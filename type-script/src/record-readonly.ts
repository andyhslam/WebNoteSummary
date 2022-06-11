// TS进阶用法Record & Readonly
type Person3 = {
  name: string;
  age: number;
  text: string;
}
type readonly = Readonly<Person3>

// 源码实现
type ReadonlyOne<T> = {
  readonly [P in keyof T]: T[P];
};

// readonly：这个操作就是将每一个属性变成只读
// keyof T 等价于 type key = 'name' | 'age' | 'text'


// 源码实现
type RecordOne<K extends keyof any, T> = {
  [P in K]: T;
};

// 详解步骤：
// 1. keyof any 返回 string number symbol 的联合类型
// 2. extends：约束类型
// 3. [P in K]：遍历key，就是string number symbol类型的每一项
// 4. T：直接返回类型
// 做到约束 对象的key 同时约束 value

// keyof any 等价于 type key = string | number | symbol(内部定义的)

type K = 'A' | 2 | 'C'
type record = Record<K, Person3> // 使用Record约束对象的键和值
const obj1: record = {
  A: { name: 'lx', age: 18, text: '巾帼枭雄' },
  2: { name: 'zw', age: 20, text: '巾帼枭雄' },
  C: { name: 'zyn', age: 22, text: '巾帼枭雄' },
}