<script setup>
import { ref, reactive } from 'vue'
const msg = ref('qfnext')
const words = ref('hello vue3')
const rawHtml = ref('<h1>2022</h1>')
const title = ref('qf-education')
const object = reactive({
  id: '011',
  class: 'box',
})
const handleKeyup = (e) => {
  console.log('e', e.target.value)
}
</script>

<template>
  <div>{{ msg }}</div>
  <div>{{ words.split('').reverse().join('') }}</div>
  <div>{{ rawHtml }}</div>
  <div v-html="rawHtml"></div>
  <div :title="title">qianfeng edu</div>
  <div v-bind="object">object</div>
  <div>
    <input type="text" v-on:keyup.enter="handleKeyup" />
  </div>
</template>

<style scoped lang="css"></style>
