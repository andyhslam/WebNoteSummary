const get = createGetter()
const set = createSetter()

function createGetter () {
  return function get (target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    console.log('响应式获取：' + target[key])
    // res就是target[key]
    return res
  }
}

function createSetter () {
  return function set (target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    console.log('响应式设置：' + key + '=' + value)
    // res是布尔值，表示是否设置成功。
    return res
  }
}

const mutableHandler = {
  get,
  set
}

export { mutableHandler }