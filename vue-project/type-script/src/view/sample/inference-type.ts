// 类型推论：TypeScript会在没有明确的指定类型时推测出一个类型
let str01 = 'ndhl'
str01 = 123 // 不能够再赋值给别的类型
// 如果你声明的变量没有定义类型，也没有赋值，这时候TS会推断成any类型可以进行任何操作
let und
und = 100
und = '123'

// 类型别名：type 关键字（可以给一个类型定义一个名字）多用于符合类型

// 1.定义类型别名
type s1 = string
let str02: s1 = '123'

// 2-1.定义联合类型别名
type s2 = string | number
let str3: s2 = '234'
let num3: s2 = 234

// 2-2.定义联合类型别名
type oa = { name: string } | number[]
let objInfe: oa = { name: 'ldh' }
let arrInfe: oa = [1, 2, 3]

// 3.定义函数别名
type cb1 = () => string
let fn1: cb1 = () => 'ndhl'

// 4.定义值的别名(字面量的类型别名)
type val = 'on' | 'off' | boolean
let value1: val = true
let value2: val = false
let value3: val = 'on'
let value4: val = 'off'

// extends表示包含的意思：左边的值会作为右边类型的子类型，此处也会涉及到类型等级
type num01 = 1 extends Number ? 1 : 0

/**
 * type与interface的区别：
 * interface可以使用extends关键字去继承，但是type只能使用交叉类型&来继承
 * interface遇到重名的会合并，而type不会
 * type可以在外部写联合类型，interface只能在内部写联合类型
 */
interface A extends B {}
interface B {}
type c = Array<number> & d
type d = string
type e = number & B
