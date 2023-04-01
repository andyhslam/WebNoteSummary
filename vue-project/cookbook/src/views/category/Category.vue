<script setup>
import { ref } from 'vue'
import useListStore from '@/store/listStore.js'
const listStore = useListStore()
const list = ref(listStore.filterList(10))
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const curPage = ref(1)
const totalPage = ref(Math.ceil(listStore.list.length / 10))

// 上拉加载更多
const onLoad = () => {
  curPage.value++
  setTimeout(() => {
    // 下拉操作
    if (refreshing.value) {
      list.value = []
      curPage.value = 1
      refreshing.value = false
    }

    list.value = listStore.filterList(curPage.value * 10)

    // 上拉操作
    loading.value = false
    if (curPage.value >= totalPage.value) {
      finished.value = true
    }
  }, 500)
}
// 下拉刷新
const onRefresh = () => {
  // 清空列表数据
  finished.value = false

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}
</script>

<template>
  <div class="menu-list">
    <!-- 下拉刷新组件 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 上拉加载组件 -->
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul>
          <li v-for="item in list" :key="item.id">
            <div class="pic">
              <img :src="item.img" alt="" />
            </div>
            <div class="text">
              <h2>{{ item.name }}</h2>
              <h3>{{ item.burdens }}</h3>
              <h4>{{ item.favorites }}收藏 {{ item.all_click }}浏览</h4>
            </div>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/border.scss';
.menu-list {
  ul {
    li {
      display: flex;
      padding-right: 10px;
      &:not(:last-child) {
        @include border(0 0 1px 0);
      }
      .pic {
        padding: 10px 15px 10px 10px;
        img {
          width: 110px;
          height: 70px;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2,
        h3,
        h4 {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }
        h2 {
          font-size: 20px;
        }
        h3 {
          font-size: 16px;
          color: #aaa;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        h4 {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
  }
}
</style>
