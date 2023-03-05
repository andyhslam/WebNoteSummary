<script setup>
import { storeToRefs } from 'pinia'
import useCounterStore from '@/store/counter.js'
// 解构state的状态或者getters的属性时，千万记得用storeToRefs()恢复响应式
const { count } = storeToRefs(useCounterStore())
</script>

<template>
  <div>{{ count }}</div>
</template>

<style scoped lang="css"></style>
