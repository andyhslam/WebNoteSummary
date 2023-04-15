/**
 * 1.类装饰器 ClassDecorator
 * 2.属性装饰器 PropertyDecorator
 * 3.参数装饰器 ParameterDecorator
 * 4.方法装饰器 MethodDecorator PropertyDescriptor
 * 5.装饰器工厂
 */

import 'reflect-metadata'
// axios封装浏览器和node环境的方法
import axios from 'axios'

// 实现类装饰器
const Base1: ClassDecorator = (target) => {
  // 参数target是类Http的构造函数，可以通过该构造函数的prototype来增加属性和方法
  console.log(target)
  target.prototype.xm = 'xiao'
  target.prototype.fn = () => {
    console.log(123)
  }
}
// 在编译阶段，自动调用Base1函数，不需要手动调用，并且装饰器@Base1默认返回target参数。
@Base1
class Http1 {
  // 有了构造函数，就可以不去破坏这个类自身原有的代码结构，也能够给它增加方法和属性
}
// Base1(Http1) // 底层原理，就是这样手动传参调用
const http1 = new Http1() as any
http1.fn()

// 实现装饰器工厂（利用函数柯里化或者说闭包）
const Base5 = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.__xy = name
    target.prototype.fn = () => {
      console.log(name)
    }
  }
  return fn
}

// 实现方法装饰器
const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    // 此处的target是原型对象
    console.log('原型对象', target)
    console.log('函数名', key)
    console.log('描述符', descriptor)
    const result = Reflect.getMetadata('key', target)
    axios.get(url).then((res) => {
      // descriptor.value就是getList函数
      descriptor.value(result ? res.data[result] : res.data)
    })
  }
  return fn
}

// 实现参数装饰器
const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    // 此处的target还是原型对象
    console.log('原型对象', target)
    console.log('函数名', key)
    // 参数装饰器的参数后面不需要加逗号隔开
    console.log('参数所在的位置', index)
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}

// 实现属性装饰器 PropertyDecorator
const Sex: PropertyDecorator = (target, key) => {
  // 此处的target依然是原型对象
  console.log('原型对象', target)
  console.log('属性名', key)
}

// 在编译阶段，首先手动传参调用Base5函数，接着返回fn函数，再自动调用fn函数，并且装饰器@fn默认返回target参数。
@Base5('xiaoyu')
class Http5 {
  @Sex
  sex: string
  constructor() {
    this.sex = 'female'
  }
  // AOP面向切面编程
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  // 自动调用接口，返回参数给getList函数；参数装饰器@Result比方法装饰器@Get先执行。
  getList(@Result() data: any) {
    // console.log('getList', data.list)
  }

  // 还可以实现Post请求
  create() {}
}
const http5 = new Http5() as any
// http5.fn()
