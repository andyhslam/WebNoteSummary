// 元组就是数组的变种
// 元组（Tuple）是固定数量的不同类型的元素的组合
const tupleArr1: [string, number] = ['123', 56] // 要按照类型的顺序来写
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
tupleArr1[1] = 332
tupleArr1[0].length // success
// tupleArr1[1].length; // error
tupleArr1.push(32, '5566', 99) // success

// 使用修饰符readonly，就不能修改tupleArr2
const tupleArr2: readonly [number, boolean] = [56, true]

// 还可以起名字
const tupleArr3: readonly [x: number, y: boolean] = [11, false]
type firstNum = typeof tupleArr3[0]
type arrLength = typeof tupleArr3['length']

// 对于越界元素，其类型被限制为 联合类型（在元组中定义的类型）
// tupleArr1.push(true); // error：越界元素

// 越界元素的应用场景：后台返回的execl的固定表头
const excel: [string, string, number][] = [
  ['title', 'name', 12],
  ['title', 'name', 23],
  ['title', 'name', 34],
]
