<script setup>
import useListStore from '@/store/listStore.js'
const listStore = useListStore()
</script>

<template>
  <div class="excellent-food">
    <h1>精品好菜</h1>
    <ul>
      <li v-for="item in listStore.filterList(10)">
        <img :src="item.img" alt="" />
        <div class="text">
          <h2>{{ item.name }}</h2>
          <h3>{{ item.favorites }}收藏 {{ item.all_click }}浏览</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.excellent-food {
  padding-left: 10px;
  h1 {
    font-size: 26px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    li {
      width: 50%;
      padding-right: 10px;
      padding-bottom: 10px;
      img {
        width: 100%;
        display: block;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: #fff;
        h2,
        h3 {
          padding: 0;
          margin: 0;
          font-style: normal;
          font-weight: 400;
        }
        h2 {
          font-size: 22px;
        }
        h3 {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
