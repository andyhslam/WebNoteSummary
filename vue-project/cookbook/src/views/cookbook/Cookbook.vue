<script setup>
import { ref } from 'vue'
import Swiper from './Swiper.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <Swiper></Swiper>
  <SearchBar outer-bg="#f5f5f5" inner-bg="#fff" :has-border="true"></SearchBar>
</template>

<style lang="scss"></style>
