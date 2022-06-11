<template>
  <div class="sidebar">
    <div class="title">学员后台管理系统</div>
    <ul>
      <!-- 默认数据 -->
      <li v-for="(v, i) in $store.state.nav" :key="i">
        <router-link :to="v.path">
          <i class="iconfont" :class="v.icon"></i>
          <span>{{ v.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>

<style>
.selected {
  background-color: #20343d;
}
</style>

