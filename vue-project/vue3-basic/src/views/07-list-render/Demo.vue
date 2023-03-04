<script setup>
import { ref, reactive } from 'vue'
const fruits = ref(['🍇', '🍌', '🍒', '🥔'])
const course = reactive({
  title: 'Webpack5学习指南',
  author: 'lurongtao',
  publishDate: '2022-07-17',
})
</script>

<template>
  <div>
    <ul>
      <template v-for="(fruit, index) in fruits">
        <li v-if="fruit !== '🥔'">{{ index }} - {{ fruit }}</li>
      </template>
    </ul>
    <ul>
      <li v-for="(c, k, i) in course">{{ i }} - {{ k }}: {{ c }}</li>
    </ul>
  </div>
</template>

<style scoped lang="css"></style>
