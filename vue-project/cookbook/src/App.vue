<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useListStore from '@/store/listStore.js'

import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'
import menu from '@/assets/images/menu.png'
import menuActive from '@/assets/images/menu-active.png'
import more from '@/assets/images/more.png'
import moreActive from '@/assets/images/more-active.png'

const active = ref(0)
const title = ref('菜谱大全')
const route = useRoute()

watch(
  () => route.meta,
  (meta) => {
    title.value = meta.title
  }
)

const listStore = useListStore()
onMounted(() => {
  listStore.loadData()
})
</script>

<template>
  <div class="home-container">
    <van-nav-bar safe-area-inset-top :title="title" />
    <main>
      <router-view></router-view>
    </main>
    <van-tabbar
      route
      :fixed="false"
      v-model="active"
      active-color="#000"
      inactive-color="#ccc"
      safe-area-inset-bottom
    >
      <van-tabbar-item to="/cookbook">
        <span>菜谱大全</span>
        <template #icon="props">
          <img :src="props.active ? cookbookActive : cookbook" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/category">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? menuActive : menu" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/more">
        <span>更多</span>
        <template #icon="props">
          <img :src="props.active ? moreActive : more" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow-y: scroll;
  }
  .van-nav-bar__content {
    background-color: #ee7530;
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
