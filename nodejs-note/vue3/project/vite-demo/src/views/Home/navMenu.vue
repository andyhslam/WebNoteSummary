<template>
  <el-aside width="200px" class="aside">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item :index="v.url" v-for="v in items" :key="v.url">
        <el-icon><component :is="v.icon" /></el-icon>
        <span>{{ v.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  Apple,
} from "@element-plus/icons-vue";
const items = reactive([
  { name: "首页", url: "/index", icon: Apple },
  { name: "统计管理", url: "/census", icon: Location },
  { name: "订单管理", url: "/order", icon: IconMenu },
]);
</script>