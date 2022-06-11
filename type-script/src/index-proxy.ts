// TS进阶用法proxy & Reflect
type Person1 = {
  name: string,
  age: number,
  text: string
}
// 实现事件监听器
const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log('get=>', prop);
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log('set=>', prop);
      return Reflect.set(target, prop, value, receiver)
    }
  })
}

const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key);
}

const girl: Person1 = logAccess({
  name: 'lx',
  age: 18,
  text: '女中豪杰'
}, 'name')

const boy = logAccess({
  id: 10,
  name: 'andy'
}, 'id')

girl.age;
console.log(girl);
