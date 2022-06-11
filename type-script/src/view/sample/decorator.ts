const watcher = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getNames = () => {
      return name;
    }
  }
}

const login: ClassDecorator = (target: Function) => {
  target.prototype.goft = 123;
  target.prototype.goftName = <T>(name: T): T => {
    return name;
  }
}

// 组合式装饰器
@login
@watcher('lw')
class Adc {

}
@watcher('zw')
class Bcc {

}
const adc = new Adc();
const bcc = new Bcc();
console.log((<any>adc).getNames());
console.log((<any>bcc).getNames());


// 属性装饰器：返回两个参数
// 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2.属性的名字。
// [ {}, 'name', undefined ]
const prdc: PropertyDecorator = (...args) => {
  console.log(args);
}

// 方法装饰器：返回三个参数
// 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2.成员的名字。
// 3.成员的属性描述符。
// [{}, 'getMethod', {value: [Function: getMethod],writable: true,enumerable: false,configurable: true}]
const medc: MethodDecorator = (...args) => {
  console.log(args);
}

// 参数装饰器：返回三个参数
// 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2.成员的名字。
// 3.参数在函数参数列表中的索引。
// [ {}, 'getParam', 1 ]
const padc: ParameterDecorator = (...args) => {
  console.log(args);
}

class Ali {
  @prdc
  name: string = 'lx'
  constructor() {

  }
  @medc
  getMethod() {
    return 'zw'
  }
  getParam(age: number, @padc name: string) {
    return 'lyf'
  }
}
const ali = new Ali()
