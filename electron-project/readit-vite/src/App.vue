<script setup>
import { ref, provide } from 'vue'
import Header from './views/Header.vue'

// 窗口显示的状态
const isShow = ref(false)
const setIsShow = (val) => {
  isShow.value = val
}
provide('dialog-visible', {
  isShow,
  setIsShow,
})

// searchBar的keywords
const keywords = ref('')
const setKeywords = (val) => {
  keywords.value = val
}
provide('searchbar-keywords', {
  keywords,
  setKeywords,
})
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped lang="stylus"></style>
