<template>
  <div id="app">
    <div class="container">
      <CarouselView
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`./assets/img/${item.img_name}`)" alt="" />
        </car-item>
      </CarouselView>
      <SelectorView
        :data="selectorData"
        @setItemValue="setItemValue"
        placeholder="请选择框架"
      />
    </div>
    <div class="side-bar">
      <tree-menu>
        <menu-item v-for="item of menuData" :key="item.id">{{
          item.title
        }}</menu-item>
      </tree-menu>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import carData from '@/data/carousel'
import selectorData from '@/data/selector'
import menuData from '@/data/treeMenu'

export default {
  name: 'App',
  setup() {
    const val = ref('')
    const setItemValue = (value) => {
      val.value = value
    }
    return {
      carData,
      selectorData,
      menuData,
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
