import { defineStore } from 'pinia'
import axios from 'axios'

const useListStore = defineStore('listStore', {
  state () {
    return {
      list: []
    }
  },
  actions: {
    async loadData () {
      const { data } = await axios.get('http://localhost:9000/list')
      this.list = data.data
    }
  },
  getters: {
    filterList () {
      return (amount) => {
        return this.list.slice(0, amount)
      }
    }
  }
})

export default useListStore