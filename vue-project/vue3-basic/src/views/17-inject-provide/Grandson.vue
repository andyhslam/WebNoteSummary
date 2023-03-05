<script setup>
import { ref, inject } from 'vue'
const title = inject('title')
</script>

<template>
  <div>{{ title }} grandson</div>
</template>

<style scoped lang="css"></style>
