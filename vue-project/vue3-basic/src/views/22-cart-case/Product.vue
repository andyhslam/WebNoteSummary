<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useCartStore from '@/store/cart.js'
import useProductStore from '@/store/product.js'
const { addToCart } = useCartStore()
const productStore = useProductStore()
// 解构state的状态或者getters的属性时，千万记得用storeToRefs()恢复响应式
const { products } = storeToRefs(productStore)
// 解构actions的方法时，千万不能用storeToRefs()
const { loadData } = productStore

onMounted(() => {
  loadData()
})
</script>

<template>
  <div>
    <h1>产品列表</h1>
    <hr />
    <ul>
      <li v-for="product in products">
        {{ product.name }} - ￥{{ product.price }}
        <button :disabled="product.inventory < 1" @click="addToCart(product)">
          加入购物车
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css"></style>
