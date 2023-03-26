import { defineStore } from 'pinia'
import store from 'store2'
import _ from 'lodash'

/**
 * defineStore：内存的状态管理，性能高，提供很多方法；
 * store2(即localStorage本地存储)：读写硬盘的数据，性能效率低。
 */
const useWebsiteStore = defineStore('websiteStore', {
  state () {
    return {
      websites: []
    }
  },
  getters: {
    searchWebsite (_state) {
      // 在getters里面，this和_state都可以用
      return (keywords) => {
        if (!keywords) {
          return _state.websites
        } else {
          const result = _.filter(_state.websites, (item) => {
            // 通过正则表达式做的模糊查询
            const pattern = new RegExp(keywords, 'i')
            return pattern.test(item.title)
          })
          return result
        }
      }
    }
  },
  actions: {
    add (item) {
      if (_.find(this.websites, { url: item.url })) {
        myApi.alert('此网站已经被添加')
      } else {
        this.websites.unshift(item)
        store.set('websites', this.websites)
      }
    },
    init () {
      this.websites = store.get('websites')
    },
    deleteItem (url) {
      const index = this.websites.findIndex(item => item.url === url)
      this.websites.splice(index, 1)
      store.set('websites', this.websites)
    }
  }
})

export default useWebsiteStore