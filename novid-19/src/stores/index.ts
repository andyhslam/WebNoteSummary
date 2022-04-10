import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children, ChinaAdd, ChinaTotal } from './type'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
  }),
  getters: {

  },
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
      console.log('getApiList', this.list)
    }
  }
})
