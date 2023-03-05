<script setup>
import { ref, provide, onMounted } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
const title = ref('hello')
provide('title', title)
onMounted(() => {
  setTimeout(() => {
    title.value = 'world'
  }, 2000)
})
</script>

<template>
  <div>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>

<style scoped lang="css"></style>
