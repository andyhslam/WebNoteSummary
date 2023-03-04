<script setup>
import { ref, onMounted } from 'vue'
const title = ref('world')
const emit = defineEmits(['update:event-name'])
onMounted(() => {
  setTimeout(() => {
    emit('update:event-name', title.value)
  }, 2000)
})
</script>

<template>
  <div>child</div>
</template>

<style scoped lang="css"></style>
