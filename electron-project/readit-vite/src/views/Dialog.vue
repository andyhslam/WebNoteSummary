<script setup>
import { ref, inject } from 'vue'
const { isShow, setIsShow } = inject('dialog-visible')
const url = ref('https://www.baidu.com/')

const handleAddClick = async () => {
  const result = await myApi.sendUrl(url.value)
  console.log(result)
}
</script>

<template>
  <div class="dialog-wrap" v-if="isShow">
    <div class="content">
      <div class="input">
        <input type="text" v-model="url" placeholder="请输入网址..." />
      </div>
      <div class="btns">
        <button @click="handleAddClick">添加</button>
        <button @click="setIsShow(false)">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.dialog-wrap
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0,0,0, 0.8)
  display flex
  justify-content center
  align-items center
  z-index 1000
  .content
    width 100%
    padding 0 20px
    input
      height 30px
      width 100%
      outline none
      margin-bottom 10px
      font-size 12px
    .btns
      button
        height 30px
        margin-right 10px
        font-size 12px
        padding 0 20px
</style>
