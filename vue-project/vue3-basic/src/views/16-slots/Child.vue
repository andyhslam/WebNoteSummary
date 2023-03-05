<script setup>
import { ref } from 'vue'
const mark = ref('!!!')
</script>

<template>
  <div>
    <slot :mark="mark" mark2="---">hello</slot>
    <slot name="line2"></slot>
  </div>
</template>

<style scoped lang="css"></style>
