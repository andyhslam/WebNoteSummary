<script setup>
import { ref, onMounted } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
const count = ref(100)
onMounted(() => {
  setTimeout(() => {
    count.value = 200
  }, 3000)
})
const handleMyEvent = (msg) => {
  console.log(msg.value)
}
</script>

<template>
  <div>
    <Child1 :count="count"></Child1>
    <Child2 :count="count" @my-event="handleMyEvent"></Child2>
  </div>
</template>

<style scoped lang="css"></style>
