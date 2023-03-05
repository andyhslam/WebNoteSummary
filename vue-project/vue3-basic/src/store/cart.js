import { defineStore } from 'pinia'

const useCartStore = defineStore('cartStore', {
  state () {
    return {
      cartList: []
    }
  },
  actions: {
    addToCart (product) {
      // 查找购物车里是否有这个产品
      const pdt = this.cartList.find(item => item.id === product.id)
      if (pdt) {
        // 如果有，就让购物车里的产品数量加1
        pdt.quantity++
      } else {
        // 如果没有，就将这个产品添加到购物车里
        this.cartList.push({
          ...product,
          quantity: 1
        })
      }
      // 需要减少库存
      product.inventory--
    }
  },
  getters: {
    totalPrice () {
      return this.cartList.reduce((sum, item) => {
        sum += item.price * item.quantity
        return sum
      }, 0)
    }
  }
})

export default useCartStore