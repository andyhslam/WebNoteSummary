// symbol类型的值是通过Symbol构造函数创建的。
// 可以传递参数作为唯一标识，只支持number和string类型的参数
let nums1: symbol = Symbol(123)
// Symbol的值是唯一的：内存地址指针位置不同。
let strs1: symbol = Symbol('123')
let strs2: symbol = Symbol('123')
console.log(strs1 === strs2) // false

// Symbol.for会在全局的Symbol查找是否有注册过这个key，如果有就直接拿来用，没有的话就创建一个新的。
console.log(Symbol.for('123') === Symbol.for('123')) // true
console.log(Symbol('123') === Symbol('123')) // false
console.log(Symbol('123') === Symbol.for('123')) // false

// 用作对象属性的键，Symbol就是用来解决对象的属性key重复的问题
let objs1 = {
  name: 'swq',
  sex: 'female',
  [strs1]: 'miss1',
  [strs2]: 'miss2',
  [nums1]: 'miss3',
  [Symbol('258')]: 369,
}
console.log('objs1', objs1)

// 使用symbol定义的属性，是不能通过如下方式遍历拿到的
// 1. for...in遍历
for (let key in objs1) {
  console.log(key)
}
// 2. Object.keys遍历
for (let key of Object.keys(objs1)) {
  console.log(key)
}
// 3. getOwnPropertyNames
console.log(Object.getOwnPropertyNames(objs1))
// 4. JSON.stringify
console.log(JSON.stringify(objs1))

// 可以通过如下两种方式遍历拿到
// 1. 只能拿到具体的symbol属性，对象中有几个就会拿到几个
console.log(Object.getOwnPropertySymbols(objs1))
// 2. es6的Reflect拿到对象的所有属性(不包括隐式属性)
console.log(Reflect.ownKeys(objs1))
for (let key of Reflect.ownKeys(objs1)) {
  console.log(key)
}

// 生成器：和迭代器用法一样
function* generator() {
  // yield后面可以跟同步或者异步，即使有异步，也是按顺序执行
  yield Promise.resolve('电科')
  yield '小满'
  yield '中满'
  yield '大满'
}
const man = generator()
console.log(man.next())

// Symbol.iterator迭代器 和 生成器 for of
let arr11: Array<number> = [4, 5, 6]

let itr: Iterator<number> = arr11[Symbol.iterator]()
console.log(itr.next())

// 只支持字符串和数字去重，不支持对象去重
let set: Set<number | string> = new Set([1, '2', 3, 3, '2', '1'])
type mapKeys = Object
let map: Map<mapKeys, mapKeys> = new Map()
const arrMap = [2, 4, 6]
const objMap = { ep: 'good' }
// map可以把引用类型当作key
map.set(objMap, '皇上')
map.set(arrMap, '太上皇')
console.log('set', set) // Set(4) { 1, '2', 3, '1' }
console.log(map.get(arrMap))
console.log('map', map) // Map(2) { { ep: 'good' } => '皇上', [ 2, 4, 6 ] => '太上皇' }

// Symbol.iterator迭代器：
// 不支持对象(因为对象没有返回迭代器的"[Symbol.iterator]()"方法)
// 支持遍历大部分类型迭代器 arr nodeList(window环境) arguments set map 等
// 实现一个方法，调用它们自身的迭代器去遍历
function iterators(arg: any) {
  let ite: Iterator<any> = arg[Symbol.iterator]()
  let next: any = { done: false }
  // 如果done为true，就终止循环
  while (!next.done) {
    next = ite.next()
    if (!next.done) {
      console.log(next.value)
    }
  }
}
iterators(map)

// 迭代器的语法糖：for...of(其底层原理就是上面的iterators函数)
// 也是不支持对象
for (let item of arr11) {
  console.log(item)
}

// 数组的解构和展开运算符的底层原理都是调用iterator
let [a11, b11, c11] = [1, 2, [3, 4, 5]]
let d11 = [...c11]

// 手动实现iterator方法，使对象支持for...of和数组的展开运算符
let iteObj = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current === this.max) {
          // 迭代结束
          return {
            value: undefined,
            done: true,
          }
        } else {
          return {
            value: this.current++,
            done: false,
          }
        }
      },
    }
  },
}
for (let val of iteObj) {
  console.log('val', val)
}
// 数组的展开：底层调用[Symbol.iterator]()
console.log('数组的展开', [...iteObj])
// 对象的展开：底层不是调用[Symbol.iterator]()
console.log('对象的展开', { ...iteObj })
