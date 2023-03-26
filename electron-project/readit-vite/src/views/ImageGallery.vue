<script setup>
import { ref, onMounted } from 'vue'
const picList = ref([])
onMounted(async () => {
  const fileList = await myApi.getFileList()
  picList.value = fileList
})
</script>

<template>
  <div class="img-container">
    <!-- public就是项目根目录，可以不写 -->
    <img v-for="pic in picList" :src="`/uploads/${pic}`" alt="" />
  </div>
</template>

<style scoped lang="stylus">
.img-container
  padding 10px
  img
    width 160px
    margin-right 10px
</style>
