<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['count'])
console.log(props.count)
const emit = defineEmits(['my-event'])
const title = ref('hello')
onMounted(() => {
  emit('my-event', title)
})
</script>

<template>
  <div>child2 - {{ count }}</div>
</template>

<style scoped lang="css"></style>
