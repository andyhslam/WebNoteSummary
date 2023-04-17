/**
 * Proxy(代理)和Reflect(反射)：
 * 1. 都有13个方法，方法和参数都是一模一样的
 * 2. 只是Reflect可以直接操作对象
 */

let person = { name: '滴滴', age: 24 }
// Reflect.set()返回布尔值
console.log('Reflect-set', Reflect.set(person, 'name', '嘀嗒', person))
// Reflect.get()可以取出对象的属性值，第三个参数可以保证上下文的正确
console.log('Reflect-get', Reflect.get(person, 'name', person), person)

// proxy只支持引用类型：对象、数组、函数、set、map
let personProxy = new Proxy(person, {
  // 取值拦截器
  get(target, key, receiver) {
    if (target.age <= 18) {
      return Reflect.get(target, key, receiver)
    } else {
      return '滴滴成年啦'
    }
  },
  // 赋值拦截器
  set(target, key, value, receiver) {
    return true
  },

  // 拦截函数调用
  apply() {},

  // 拦截in操作符
  // has() {},

  // 拦截for...in
  // ownKeys() {},

  // 拦截new操作符
  // construct() {},

  // 拦截删除的操作
  // deleteProperty(target, property) {},
})

console.log(personProxy.age)

// 创建一个事件的存储器
const funcList: Set<Function> = new Set()
// 创建一个订阅函数
const autoRun = (cb: Function) => {
  if (!funcList.has(cb)) {
    funcList.add(cb)
  }
}
// 使用Proxy实现观察者模式
const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      // Reflect.set()返回布尔值
      const result = Reflect.set(target, key, value, receiver)
      // 数据一有变化，就通知订阅者
      funcList.forEach((fn) => fn())
      // 刚好Proxy的set函数也是返回布尔值
      return result
    },
  })
}

// 验证观察者模式，提供一个可观察的数据
const mobx = observable({ name: '哈啰', attr: '出行' })

// 订阅者监听值的变化
autoRun(() => {
  console.log('有变化啦')
})

mobx.name = '摩拜'
mobx.attr = '不行'
