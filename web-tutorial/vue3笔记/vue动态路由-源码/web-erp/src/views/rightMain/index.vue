<template>
  <div class="main">
      <!-- 头部展示 -->
      <Header />
      <!-- 主体部分 -->
      <router-view />
      <!-- 底部展示 -->
      <Footer />
  </div>
</template>

<script>
import Header from './header';
import Footer from './footer'

export default {
  data () {
    return {
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>