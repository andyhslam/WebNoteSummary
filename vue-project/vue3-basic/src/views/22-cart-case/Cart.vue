<script setup>
import { storeToRefs } from 'pinia'
import useCartStore from '@/store/cart.js'
// 解构state的状态或者getters的属性时，千万记得用storeToRefs()恢复响应式
const { cartList, totalPrice } = storeToRefs(useCartStore())
</script>

<template>
  <div>
    <h1>购物车</h1>
    <hr />
    <ul>
      <li v-for="cart in cartList">
        {{ cart.name }} - ￥{{ cart.price }} x {{ cart.quantity }} = ￥{{
          cart.price * cart.quantity
        }}
      </li>
    </ul>
  </div>
  <div>总价：￥{{ totalPrice }}</div>
</template>

<style scoped lang="css"></style>
