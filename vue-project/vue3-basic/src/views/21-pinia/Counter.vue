<script setup>
import { storeToRefs } from 'pinia'
import useCounterStore from '@/store/counter.js'
import Child from './Child.vue'
const counterStore = useCounterStore()
// 解构state的状态或者getters的属性时，千万记得用storeToRefs()恢复响应式
const { count } = storeToRefs(counterStore)
// 解构actions的方法时，千万不能用storeToRefs()
const { add } = counterStore
</script>

<template>
  <div>
    {{ count }}
    <button @click="add">add</button>
    <Child></Child>
  </div>
</template>

<style scoped lang="css"></style>
