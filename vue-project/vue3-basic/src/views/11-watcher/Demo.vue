<script setup>
import { ref, computed, watchEffect, watch } from 'vue'
const count = ref(1)
const title = ref('hello')
const doubleCount = computed(() => count.value * 2)
const handleClick = () => {
  count.value++
  title.value = 'world'
}
// watchEffect(() => {
//   console.log('count变为：' + count.value)
//   console.log(title.value)
// })
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
