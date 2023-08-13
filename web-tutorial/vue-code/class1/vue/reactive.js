import observe from "./observe"

function defineReactiveData (data, key, value) {
  observe(value) // 递归观察
  Object.defineProperty(data, key, {
    get () {
      console.log('value', value)
      return value
    },
    set (newValue) {
      console.log('newValue', newValue)
      if (newValue === value) return
      value = newValue
    },
  })
}

export default defineReactiveData