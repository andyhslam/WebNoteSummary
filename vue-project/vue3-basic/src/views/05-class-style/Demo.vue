<script setup>
import { ref } from 'vue'
const hasColor = ref(true)
const ital = ref('italic')
const ul = ref('underline')
const changeColor = () => {
  hasColor.value = !hasColor.value
}
</script>

<template>
  <div :class="[ital, { a: hasColor, b: true }]">
    <p
      :style="{
        textDecoration: ul,
      }"
    >
      hello vue
    </p>
    <button @click="changeColor">changeColor</button>
  </div>
</template>

<style scoped lang="css">
.a {
  color: #f40;
}
.b {
  font-size: 50px;
}
.italic {
  font-style: italic;
}
</style>
