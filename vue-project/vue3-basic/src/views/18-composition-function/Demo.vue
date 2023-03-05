<script setup>
import useCount from './use-count'
import useTitle from './use-title'

const { count, handleClick } = useCount()
useTitle(count)
</script>

<template>
  <div>{{ count }}</div>
  <div>
    <button @click="handleClick">add</button>
  </div>
</template>

<style scoped lang="css"></style>
