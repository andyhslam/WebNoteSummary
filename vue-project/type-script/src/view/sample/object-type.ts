let xm: any = { 帅: true, open: () => 123 }
console.log(xm.open())

// 因为原型链的顶端是Object，所以Object包含所有类型(除了unknown)
let a: Object = xm
let a1: Object = 123
let a2: Object = '123'
let a3: Object = false
let a4: Object = []
let a5: Object = {}
let a6: Object = () => 123

// object不支持原始类型，只能支持引用类型，常用于泛型约束，代表非原始类型的一个类型。
let b1: object = '123' // 错误，因为字符串属于原始类型
let b2: object = 123 // 错误，因为数字属于原始类型
let b3: object = false // 错误，因为布尔值属于原始类型
let b4: object = [] // 正确，因为数组属于引用类型
let b5: object = {} // 正确，因为字面量对象属于引用类型
let b6: object = () => 123 // 正确，因为函数属于引用类型

// 字面量模式：空对象{}；可以理解为new Object()，同Object，包含所有类型(除了unknown)
let c: {} = xm
let c1: {} = 123
let c2: {} = '123'
let c3: {} = false
let c4: {} = []
let c5: {} = {}
let c6: {} = () => 123
// 虽然字面量模式可以赋值任意类型(除了unknown)，但是赋值后，不能对其做修改，只能当作一个常量使用，建议少用。
let c7: {} = { x: 1 }
c7.y = 2 // 错误，不能修改
