<template>
  <div id="app">
    <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData" :key="item.id">
          <menu-item v-if="!item.children">{{ item.title }}</menu-item>
          <re-sub-menu :data="item" v-else></re-sub-menu>
        </template>
      </tree-menu>
    </div>
    <div class="container">
      <CarouselView
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`./assets/img/${item.img_name}`)" />
        </car-item>
      </CarouselView>
      <SelectorView
        :data="selectorData"
        @setItemValue="setItemValue"
        placeholder="请选择框架"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import menuData from '@/data/treeMenu'
import carData from '@/data/carousel'
import selectorData from '@/data/selector'

export default {
  name: 'App',
  setup() {
    const val = ref('')
    const setItemValue = (value) => {
      val.value = value
    }
    return {
      menuData,
      carData,
      selectorData,
      setItemValue,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 1000px;
  margin: 200px auto;
}
.side-bar {
  width: 300px;
}
</style>
