import { defineStore } from "pinia";
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
  // 在state中返回的对象，会自动挂载到这个store实例身下，可以在getters和actions通过访问this来获取和改变状态
  state: () => {
    return {
      current: 100,
      name: 'lyy'
    }
  },
  // 类似computed，可以修饰值
  getters: {},
  // 类似methods，可以做同步、异步的操作，提交state
  actions: {
    // 在actions中直接使用this可以指到state里面的值
    setCurrent(num: number) {
      // 这里的this是由定义好的store实例调用的，箭头函数只会保存当前作用域的this；
      // 所以需要传统方式定义函数，根据调用者来改变this的指向
      this.current = num
    }
  }
})