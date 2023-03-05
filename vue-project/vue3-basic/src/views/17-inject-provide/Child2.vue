<script setup>
import { ref, inject } from 'vue'
import Grandson from './Grandson.vue'
const title = inject('title')
</script>

<template>
  <div>
    {{ title }} child2
    <Grandson></Grandson>
  </div>
</template>

<style scoped lang="css"></style>
