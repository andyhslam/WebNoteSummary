<template>
  <div id="app" class="container">
    <!-- 左侧导航 -->
    <Nav />
    <!-- 右侧主体数据 -->
     <RightMain />
  </div>
</template>

<script>
import Nav from './views/Nav'
import RightMain from './views/rightMain/index'

export default {
  data () {
    return {
    }
  },
  components:{
    Nav,
    RightMain
  }
}
</script>
<style>
@import './assets/css/index.css'
</style>
