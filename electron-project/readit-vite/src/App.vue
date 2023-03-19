<script setup>
import { ref, provide } from 'vue'
import Home from './views/Home.vue'

// 窗口显示的状态
const isShow = ref(false)
const setIsShow = (val) => {
  isShow.value = val
}
provide('dialog-visible', {
  isShow,
  setIsShow,
})
</script>

<template>
  <Home></Home>
</template>

<style scoped lang="stylus"></style>
