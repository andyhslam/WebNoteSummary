<script setup>
import { ref } from 'vue'
const isShow = ref(true)
const grade = ref(95)
const handleClick = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div v-if="isShow">hello</div>
  <div>
    <button @click="handleClick">toggle</button>
  </div>
  <div v-if="grade >= 85">A</div>
  <div v-else-if="grade >= 60 && grade <= 85">B</div>
  <div v-else>C</div>
</template>

<style scoped lang="css"></style>
