<script setup>
import { ref } from 'vue'
const count = ref(0)
const handleClick = (num) => {
  count.value += num
}
const handleInput = (e, num) => {
  console.log(e.target.value, num)
}
const handle1 = () => {
  console.log('handle1')
}
const handle2 = () => {
  console.log('handle2')
}
</script>

<template>
  <div>{{ count }}</div>
  <div><button @click="handleClick(100)">add</button></div>
  <div><input type="text" @input="handleInput($event, 20)" /></div>
  <div><input type="text" @input="(e) => handleInput(e, 20)" /></div>
  <div><button @click="handle1(), handle2()">click</button></div>
</template>

<style scoped lang="css"></style>
