<script setup>
import { ref, onMounted, watch } from 'vue'
import SearchBar from './SearchBar.vue'
import Dialog from './Dialog.vue'
import List from './list/List.vue'

const searchbarRef = ref('')
const watchClick = ref('')

const cb = () => {
  searchbarRef.value.handleClick()
}

onMounted(() => {
  myApi.openDialog()
  // 在桥里定义监听主进程的on-renderer-event事件
  myApi.onRendererEvent(cb)
})
</script>

<template>
  <main>
    <SearchBar ref="searchbarRef"></SearchBar>
    <Teleport to="body">
      <Dialog></Dialog>
    </Teleport>
    <List></List>
  </main>
</template>

<style scoped lang="stylus"></style>
