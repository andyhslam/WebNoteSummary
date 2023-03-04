<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
const count = ref(0)
let timerId = null
onBeforeMount(() => {
  count.value = 100
})
onMounted(() => {
  console.log(document.getElementById('box').innerText)
  timerId = setTimeout(() => {
    count.value = 200
  }, 1000)
})
onBeforeUpdate(() => {
  // console.log(count.value)
  console.log(document.getElementById('box').innerText)
})
onUpdated(() => {
  // console.log(count.value)
  console.log(document.getElementById('box').innerText)
})
onBeforeUnmount(() => {})
onUnmounted(() => {
  console.log('onUnmounted')
  clearTimeout(timerId)
})
</script>

<template>
  <div id="box">
    {{ count }}
  </div>
</template>

<style scoped lang="css"></style>
