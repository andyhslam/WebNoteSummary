<script setup>
import { ref, computed } from 'vue'
const count = ref(1)
const title = ref('hello')
const handleClick = () => {
  count.value++
}
const doubleCount = computed(() => {
  // 计算属性基于依赖缓存；点击change title，重新渲染模板时，如果依赖缓存不变，就不会运行这个计算属性。
  console.log('doubleCount')
  return count.value * 2
})
const doubleCounted = () => {
  // 点击change title，重新渲染模板时，会再次运行这个函数。
  console.log('doubleCounted')
  return count.value * 2
}
const handleChangeTitle = () => {
  title.value = 'world'
}
</script>

<template>
  <div>
    {{ count }} - {{ doubleCount }} - {{ doubleCounted() }} -
    {{ title }}
  </div>
  <div>
    <button @click="handleClick">add</button>
    <button @click="handleChangeTitle">change title</button>
  </div>
</template>

<style scoped lang="css"></style>
