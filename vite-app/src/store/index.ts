import { defineStore } from "pinia";
import { Names } from './store-name'

type User = {
  name: string,
  age: number
}

// Promise<User>：定义返回值的类型Promise，再接收一个泛型User
const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'lx',
        age: 20
      })
    }, 1000);
  })
}

export const useTestStore = defineStore(Names.TEST, {
  // 在state中返回的对象，会自动挂载到这个store实例身下，可以在getters和actions通过访问this来获取和改变状态
  state: () => {
    return {
      current: 100,
      name: '元春',
      user: <User>{}, // 类型断言，方便ts进行类型推导
    }
  },
  // 主要作用类似于computed，数据修饰并且有缓存
  getters: {
    newBoy(): string {
      return `$-${this.name}-${this.getUserAge}`
    },
    getUserAge(): number {
      return this.user.age
    }
  },
  // 类似methods，可以做同步、异步的操作，提交state
  actions: {
    // 在actions中直接使用this可以指到state里面的值
    setCurrent(num: number) {
      // 这里的this是由定义好的store实例调用的，箭头函数只会保存当前作用域的this；
      // 所以需要传统方式定义函数，根据调用者来改变this的指向
      this.current = num
    },
    // 异步 可以结合async await 修饰
    async setUser() {
      const result = await Login()
      this.user = result
      this.setName('薛宝钗') // 多个action互相调用
    },
    setName(name: string) {
      this.name = name
    }
  }
})