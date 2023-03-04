<script setup>
import { ref } from 'vue'
defineProps(['count'])
</script>

<template>
  <div>child1 - {{ count }}</div>
</template>

<style scoped lang="css"></style>
