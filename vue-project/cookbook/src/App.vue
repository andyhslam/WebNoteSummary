<script setup>
import { ref } from 'vue'
import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'
import menu from '@/assets/images/menu.png'
import menuActive from '@/assets/images/menu-active.png'
import more from '@/assets/images/more.png'
import moreActive from '@/assets/images/more-active.png'

const active = ref(0)
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item>
      <span>菜谱大全</span>
      <template #icon="props">
        <img :src="props.active ? cookbookActive : cookbook" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>分类</span>
      <template #icon="props">
        <img :src="props.active ? menuActive : menu" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>更多</span>
      <template #icon="props">
        <img :src="props.active ? moreActive : more" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="scss"></style>
