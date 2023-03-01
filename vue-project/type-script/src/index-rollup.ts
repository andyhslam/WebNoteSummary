// 实现发布订阅模式
interface EventFace {
  on: (name: string, fn: Function) => void,
  emit: (name: string, ...args: Array<any>) => void,
  off: (name: string, fn: Function) => void,
  once: (name: string, fn: Function) => void,
}
interface List {
  [key: string]: Array<Function>
}

class Dispatch implements EventFace {
  list: List;
  constructor() {
    this.list = {}
  }
  on(name: string, fn: Function) {
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback
    // console.log(this.list)
  }
  emit(name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error(`名字错误${name}`);
    }
  }
  off(name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      let index = eventName.findIndex(fns => fns === fn)
      eventName.splice(index, 1)
    } else {
      console.error(`名字错误${name}`);
    }
  }
  once(name: string, fn: Function) {
    let tempFn = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, tempFn)
    }
    this.on(name, tempFn)
  }
}

const dispatch = new Dispatch();
// const fnc =  (...args: Array<any>) => {
//   console.log(args, 2);
// }
dispatch.on('post', (...args: Array<any>) => {
  console.log(args, 1);
})
dispatch.once('post', (...args: Array<any>) => {
  console.log(args, 'once');
})
// dispatch.on('post', fnc)
// dispatch.off('post', fnc)
dispatch.emit('post', 1, false, { sex: 'female' });
dispatch.emit('post', 2, true, { sex: 'female' });
