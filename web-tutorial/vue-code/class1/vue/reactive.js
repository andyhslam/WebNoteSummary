import observe from "./observe"

function defineReactiveData (data, key, value) {
  observe(value) // 递归观察
  Object.defineProperty(data, key, {
    get () {
      console.log('响应式数据：获取', value)
      return value
    },
    set (newValue) {
      console.log('响应式数据：设置', newValue)
      if (newValue === value) return
      observe(newValue)
      value = newValue
    },
  })
}

export default defineReactiveData