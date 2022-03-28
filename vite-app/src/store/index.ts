import { defineStore } from "pinia";
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 100,
      name: 'lyy'
    }
  },
  // 类似computed，可以修饰值
  getters: {},
  // 类似methods，可以做同步、异步的操作，提交state
  actions: {}
})