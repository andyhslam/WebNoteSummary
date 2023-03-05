import { defineStore } from 'pinia'
import axios from 'axios'

const useProductStore = defineStore('product', {
  state () {
    return {
      products: []
    }
  },
  actions: {
    async loadData () {
      // 启动服务：json-server ./src/data/api.json -p 9000
      const result = await axios.get('http://localhost:9000/data')
      this.products = result.data
      // json-server可以基于json文件对数据做增删改查的操作，但毕竟不是操作数据库，容易出现数据不一致的情况，所以一般只用于测试。

      // axios.post('http://localhost:9000/data', {
      //   id: 4,
      //   name: "iphone15",
      //   price: 15000,
      //   inventory: 5
      // })
    }
  }
})

export default useProductStore