// 函数的默认参数和可选参数
const func1 = function (name: string, age?: number, id: number = 10): string {
  return name + age + id
}
console.log(func1('lx', 20))

// 用接口去约束函数的参数(为对象)和返回值
interface User {
  name: string
  age: number
}
const func2 = function (user: User): User {
  return user
}
let khp = func2({
  name: 'khp',
  age: 30,
})
console.log(khp)

interface Obj {
  list: number[]
  add1?(): void
  add2: (this: Obj, num: number) => void
  add3?: () => null
}

// ts可以定义this的类型，这在js中无法使用(因为js中的this无法当作参数使用)；必须是第一个参数定义this的类型。
let obj2: Obj = {
  list: [1, 2, 3],
  add2(this: Obj, num: number) {
    this.list.push(num)
  },
}
// 函数传参时，忽略第一个参数(this)，把num当作第一个参数
obj2.add2(4)
console.log('obj2', obj2)

// 函数重载：
// 1、重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 2、如果参数类型不同，则参数类型应设置为 any。
// 3、参数数量不同，你可以将不同的参数设置为可选。

// 函数重载例子一：前两个是重载函数(写规则)
function func3(params1: number): void
function func3(params1: string, params2: number): void
// 后一个是执行函数(写业务逻辑)，可以遵循任意一个重载函数的规则
function func3(params1: any, params2?: any): void {
  console.log(params1, params2)
}
func3(3) // 执行第一个重载函数
func3('1', 2) // 执行第二个重载函数

// 函数重载例子二
let user: number[] = [1, 2, 3]
// 如果传入id，就是单个查询
function findNum(id: number): number[]
// 如果传入一个number类型的数组，就添加
function findNum(add: number[]): number[]
// 如果没传参数，就是查询全部
function findNum(): number[]
// 实现函数(写业务逻辑)，可以遵循任意一个重载函数的规则
function findNum(ids?: number | number[]): number[] {
  if (typeof ids === 'number') {
    return user.filter((v) => v === ids)
  } else if (Array.isArray(ids)) {
    user.push(...ids)
    return user
  } else {
    return user
  }
}
console.log(findNum(3)) // 单个查询
console.log(findNum([4, 5, 6])) // 添加
console.log(findNum()) // 查询全部
