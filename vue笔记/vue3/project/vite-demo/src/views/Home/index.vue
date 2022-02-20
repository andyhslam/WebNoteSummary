<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <!-- 右侧主体 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavMenu from "./navMenu.vue";
import { ref, reactive } from "vue";

const obj = reactive({ id: "home" });
</script>