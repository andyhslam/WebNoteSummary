<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const title = ref('hello')
</script>

<template>
  <div>
    <input type="text" v-focus />
    <Child></Child>
  </div>
  <div>
    {{ title }}
  </div>
</template>

<style scoped lang="css"></style>
