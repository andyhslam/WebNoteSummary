<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
</script>

<template>
  <div>
    <Child title="hello" class="box"></Child>
  </div>
</template>

<style scoped lang="css">
.box {
  font-size: 30px;
}
</style>
