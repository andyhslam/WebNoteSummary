<script setup>
import useListStore from '@/store/listStore.js'
const listStore = useListStore()
</script>

<template>
  <div class="swiper-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in listStore.filterList(5)" :key="item.id">
        <img class="swiper-img" :src="item.img" :alt="item.name" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss">
.swiper-container {
  // 这里的设置是为了给图片没有那么快显示出来而预留的位置
  height: 0;
  font-size: 0;
  padding-bottom: 66.67%; // 真实图片的高与宽之比
  .my-swipe {
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
