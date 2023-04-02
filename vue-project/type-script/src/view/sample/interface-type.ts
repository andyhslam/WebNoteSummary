// 两个接口(interface)名称一样会合并的
interface Personpx {
  name: string
  gender: string
  func(): number
  cb(): void
  readonly callback: () => boolean
}
// 可选属性：可选式操作符?
// 联合类型：|
// 任意属性(索引签名)：[propName: string]
// 注意：一旦定义任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// readonly 只读属性是不允许被赋值的，只能读取；一般用于函数或者后台返回的id
interface Personpx {
  age?: number
  salary: string | number
  [propName: string]: any
  readonly id: number
}

// 用接口定义一个对象
const woman: Personpx = {
  id: 10,
  name: 'lx',
  gender: 'Female',
  age: 20,
  salary: 10000,
  zyn: 'ivu',
  func: (): number => 123,
  cb: () => {
    console.log(100)
  },
  callback: () => {
    return false
  },
}
console.log(woman)

// 接口组合使用
interface Ait {
  id: number
}
interface Bit {
  name: string
}
// 接口继承(可继承多个)
interface Cit extends Ait, Bit {
  age: number
}
let pit: Cit = {
  id: 10,
  name: 'zm',
  age: 18,
}

// 接口定义函数类型
interface Fn {
  (name: string): number[]
}
const fnc: Fn = function (name: string): Array<number> {
  return [1, 2, 3]
}
