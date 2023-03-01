// 元组就是数组的变种
// 元组（Tuple）是固定数量的不同类型的元素的组合
let tupleArr: [string, number] = ['123', 56]; // 要按照类型的顺序来写
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
tupleArr[0].length; // success
// tupleArr[1].length; // error
tupleArr.push(32, '5566', 99); // success

// 对于越界元素，其类型被限制为 联合类型（在元组中定义的类型）
// tupleArr.push(true); // error：越界元素

// 越界元素的应用场景：例如定义execl返回的数据
let excel: [string, string, number][] = [
  ['title', 'name', 12], ['title', 'name', 23], ['title', 'name', 34]
]
