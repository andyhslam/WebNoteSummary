<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="header-container">
    <router-link to="/home" custom v-slot="{ isActive, navigate }">
      <div class="text-link" :class="{ active: isActive }" @click="navigate">
        <i class="icon iconfont icon-hotfill"></i>
        <span>网站收藏</span>
      </div>
    </router-link>
    <router-link to="/imageGallery" custom v-slot="{ isActive, navigate }">
      <div class="text-link" :class="{ active: isActive }" @click="navigate">
        <i class="icon iconfont icon-xiaoheiqun"></i>
        <span>图片收藏</span>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="stylus">
.header-container
  display flex
  background #1e90ff
  height 44px
  .text-link
    padding-left 10px
    padding-right 20px
    display flex
    justify-content center
    align-items center
    color #ccc
    cursor pointer
    &.active
      color #fff
    .icon
      margin-right .2rem
      fill #ccc
    &.active .icon
      fill #fff
</style>
