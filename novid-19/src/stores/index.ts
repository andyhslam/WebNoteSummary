import { defineStore } from 'pinia'
import { getApiList } from '../server'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: {}
  }),
  getters: {

  },
  actions: {
    async getList() {
      const result = await getApiList()
      console.log('getApiList', result)
    }
  }
})
