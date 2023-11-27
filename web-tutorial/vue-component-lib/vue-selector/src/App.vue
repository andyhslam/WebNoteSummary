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
      <StarsView :num="num" :size="size" @getStarNum="getStarNum" />
      <div style="margin: 10px 0">选择的框架是：{{ itemValue }}</div>
      <SelectorView
        :data="selectorData"
        @setItemValue="setItemValue"
        placeholder="请选择框架"
      />
    </div>
    <div class="wrapper">
      <MagnifierView
        :link="link"
        :blank="blank"
        :imgUrl="imgUrl"
        :imgAlt="imgAlt"
        :imgWidth="imgWidth"
        :imgHeight="imgHeight"
        :magWidth="magWidth"
        :magHeight="magHeight"
      ></MagnifierView>
      <ModalView
        :show="true"
        :width="350"
        :borderRadius="10"
        headerBgc="#007bff"
        headerText="SUPER MODAL"
        headerTextColor="#fff"
        contentText="This is a SUPER MODAL."
        contentTextColor="#333"
        position="center"
        :btnGroupShow="true"
        confirmText="确定"
        cancelText="取消"
        @confirm="modalConfirm"
        @close="modalClose"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import carData from '@/data/carousel'
import menuData from '@/data/treeMenu'
import selectorData from '@/data/selector'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      itemValue: '',
      num: 2,
      size: 30,
      blank: true,
      link: 'https://www.baidu.com',
      imgUrl: require('/src/assets/img/suzy.jpg'),
      imgAlt: '裴秀智',
      imgWidth: 375,
      imgHeight: 480,
      magWidth: 100,
      magHeight: 100,
    })
    const fn = {
      setItemValue(value) {
        state.itemValue = value
      },
      getStarNum(num) {
        console.log('num', num)
      },
      modalConfirm() {
        console.log('modal Confirm')
      },
      modalClose() {
        console.log('modal Close')
      },
    }
    return {
      ...toRefs(state),
      ...fn,
      carData,
      menuData,
      selectorData,
    }
  },
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 300px;
}
.wrapper {
  width: 375px;
  margin: 100px auto;
}
.container {
  width: 500px;
  height: 500px;
  margin: 50px auto 350px;
}
</style>
