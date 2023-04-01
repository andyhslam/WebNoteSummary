<script setup>
import { ref } from 'vue'
import Swiper from './Swiper.vue'
import SearchBar from '@/components/SearchBar.vue'
import HotCate from './HotCate.vue'
</script>

<template>
  <Swiper></Swiper>
  <SearchBar outer-bg="#f5f5f5" inner-bg="#fff" :has-border="true"></SearchBar>
  <HotCate></HotCate>
</template>

<style lang="scss"></style>
