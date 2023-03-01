type BusClass = {
  emit: (name: string) => void,
  on: (name: string, callback: Function) => void,
}

type ParamKey = string | number | symbol
type List = {
  // key使用对象嵌名的方式
  [key: ParamKey]: Array<Function>
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach(fn => {
      fn.apply(this, args) // 此处的this指向Bus
    })
  }
  on(name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
}

export default new Bus()