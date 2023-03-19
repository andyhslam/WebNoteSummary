<script setup>
import { onMounted } from 'vue'
import useWebsiteStore from '@/store/websiteStore.js'

const websiteStore = useWebsiteStore()
onMounted(() => {
  websiteStore.init()
})
</script>

<template>
  <div>
    <p id="no-item" v-if="!websiteStore.websites.length">暂无数据</p>
    <div id="items" v-else>
      <div class="read-item selected" v-for="ws in websiteStore.websites">
        <img :src="ws.screenShot" :alt="ws.title" />
        <h2>{{ ws.title }}</h2>
        <button @click="websiteStore.deleteItem(ws.url)">x</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
#no-item
  font-weight bold
  color silver
  text-align center
  width 100%
  position absolute
  top 100px
  z-index -1

#items
  .read-item
    display flex
    align-items center
    align-content center
    border-bottom lightgray 2px solid
    background #fafafa
    border-left 10px solid lightgray
    -webkit-user-select none
    position relative
    padding 10px
    img
      width 20%
      margin-right 25px
      border solid 1px #ccc
    &:hover
      background #eee
    &:hover button
      display inline-block
    &.selected
      border-left-color dodgerblue
    button
      position absolute
      display none
      right 10px
      top 10px
      width 30px
      height 30px
      background #f44336
      border none
      border-radius 50%
      color white
      text-align center
      font-size 16px
      cursor pointer
</style>
