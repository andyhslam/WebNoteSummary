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
  [nums1]: 'value',
  [strs1]: 'miss',
  name: 'swq',
  sex: 'female',
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

// Symbol.iterator迭代器 和 生成器 for of
let arr11: Array<number> = [4, 5, 6]

// let itr: Iterator<number> = arr11[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

let set: Set<number> = new Set([1, 2, 3, 2, 1])
type mapKeys = string | number
let map: Map<mapKeys, mapKeys> = new Map()
map.set(1, '太上皇')
map.set(2, '皇上')
console.log('set', set) // Set(3) { 1, 2, 3 }
console.log('map', map) // Map(2) { 1 => '太上皇', 2 => '皇上' }

// Symbol.iterator迭代器：
// 支持遍历大部分类型迭代器 arr nodeList argumetns set map 等
// 不支持对象(因为对象没有返回迭代器的"[Symbol.iterator]()"方法)
function generation(erg: any) {
  let ite: Iterator<any> = erg[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = ite.next()
    if (!next.done) {
      console.log(next)
    }
  }
}
generation(map)

// 生成器：for...of(iterator语法糖；其实已经实现了上面的generation函数)
// 也是不支持对象
for (let item of arr11) {
  console.log(item)
}
