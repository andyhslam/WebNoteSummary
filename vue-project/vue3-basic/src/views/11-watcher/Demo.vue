<script setup>
import { ref, computed, watchEffect, watch } from 'vue'
const count = ref(1)
const title = ref('hello')
const doubleCount = computed(() => count.value * 2)
const handleClick = () => {
  count.value++
  title.value = 'world'
}

/**
 * watch和watchEffect都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
 * watch只追踪明确侦听的源，不会追踪任何在回调中访问到的东西。另外，仅在响应源确实改变时才会触发回调；
 * watch会避免在发生副作用时追踪依赖，因此能更加精确地控制回调函数的触发时机。
 * watchEffect会在副作用发生期间追踪依赖，它会在同步执行过程中，自动追踪所有能访问到的响应式property；
 * 这更方便，而且代码往往更简洁，但其响应性依赖关系不那么明确。
 */
watchEffect(() => {
  console.log('count变为：' + count.value)
  console.log(title.value)
})
watch(
  () => count.value,
  () => {
    console.log(title.value)
  }
)
</script>

<template>
  <div>
    {{ title }}
    {{ count }}
    {{ doubleCount }}
  </div>
  <div>
    <button @click="handleClick">add</button>
  </div>
</template>

<style scoped lang="css"></style>
