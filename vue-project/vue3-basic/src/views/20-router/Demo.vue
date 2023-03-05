<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <router-link to="/home">首页</router-link> |
    <router-link to="/about">关于我们</router-link>
    <!-- 路由出口：路由组件显示的位置 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<style scoped lang="css"></style>
