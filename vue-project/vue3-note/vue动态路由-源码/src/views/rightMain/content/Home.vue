<template>
  <div class="main-content">
      <div class="content-count">
          <ul>
              <li class="count-list"
                v-for="(item,index) in list" :key="index">
                <i :class="['list-icon','iconfont',item.icon]"></i>
                <span>{{item.title}}</span>
                <p>{{item.detail}}</p>
                <router-link :to="item.path">【更多】</router-link>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      list:[
        {title:'企业管理',detail:'企业管理说明',path:'/testA',icon:'iconqiye'},
        {title:'财务管理',detail:'财务管理说明',path:'/testB',icon:'iconcaiwu'},
        {title:'产品管理',detail:'产品管理说明',path:'/testC',icon:'iconchanpin'},
        {title:'订单管理',detail:'订单管理说明',path:'/testD',icon:'iconorder-copy'}
      ]
    }
  },
  components: {
  }
}
</script>