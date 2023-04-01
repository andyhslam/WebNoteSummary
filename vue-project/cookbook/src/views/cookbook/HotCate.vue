<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const hotcate = ref([])
onMounted(async () => {
  const { data } = await axios.get('http://localhost:9000/hotcat')
  hotcate.value = [...data, { title: '更多...' }]
})
</script>

<template>
  <van-grid :border="false">
    <van-grid-item v-for="hc in hotcate" url="https://www.baidu.com">
      <van-image :src="hc.img" />
      <span>{{ hc.title }}</span>
    </van-grid-item>
  </van-grid>
</template>

<style lang="scss">
.van-grid-item:last-child {
  .van-image {
    visibility: hidden;
  }
}
</style>
