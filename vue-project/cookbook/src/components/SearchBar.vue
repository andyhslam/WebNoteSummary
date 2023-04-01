<script setup>
import { ref } from 'vue'
import searchIcon from '@/assets/images/search.png'

defineProps(['outer-bg', 'inner-bg', 'has-border'])
</script>

<template>
  <div class="searchbar-wrapper" :style="{ backgroundColor: outerBg }">
    <div
      class="search-input"
      :class="{ border: hasBorder }"
      :style="{ backgroundColor: innerBg }"
    >
      <img :src="searchIcon" alt="" />
      <span>想吃什么搜这里，比如：川菜</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/border.scss';
.searchbar-wrapper {
  padding: 10px 15px;
  background-color: #f5f5f5;
  .search-input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    &.border {
      @include border(1px, solid, #ee7530, 5px);
    }
    img {
      width: 20px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
