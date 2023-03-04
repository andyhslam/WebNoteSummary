<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const title = ref('hello')
</script>

<template>
  <div>
    {{ title }}
    <Child v-model:event-name="title"></Child>
  </div>
</template>

<style scoped lang="css"></style>
