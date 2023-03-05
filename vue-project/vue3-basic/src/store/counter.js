import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ count: 10 }),
  actions: {
    add () {
      this.count++
    }
  }
})

export default useCounterStore