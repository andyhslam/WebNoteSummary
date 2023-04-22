// 1. 定义一个类型：如果是数组类型，就返回数组元素的类型；否则传入什么类型，就返回什么类型
type TYPE2<T> = T extends Array<any> ? T[number] : T
type A2 = TYPE2<(string | number)[]>
type B2 = TYPE2<boolean>

// infer一般用于extends的后面；U不是泛型，只是充当占位符，会读取数组元素的类型并返回。
type TYPE3<T> = T extends Array<infer U> ? U : T
type A3 = TYPE3<(string | number)[]>
type B3 = TYPE3<boolean>

// 2. 配合tuple 转换 union 联合类型
type INFER<T> = T extends Array<infer U> ? U : never
type tuple = [string, number]
type union = INFER<tuple>
type bool = INFER<boolean>

/**
 * 1.提取头部元素:
 * 类型参数 T 通过extends约束，只能是数组类型，然后通过infer声明局部one变量做提取，
 * 后面的元素可以是任意类型，然后把局部变量返回
 */
type Arr = ['a', 'b', 'c']
// 泛型工具
type First<T extends any[]> = T extends [infer one, ...any[]] ? one : []
type firstOne = First<Arr>

// 2.提取尾部元素
type Last<T extends any[]> = T extends [...any[], infer three] ? three : []
type lastOne = Last<Arr>

/**
 * 3.剔除第一个元素 shift
 * 除了第一个的元素，把其他的剩余元素声明成一个变量直接返回，就可以剔除第一个元素
 */
type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
type shiftArr = Shift<Arr>

// 4.剔除尾部元素 pop
type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
type popArr = Pop<Arr>

/**
 *  infer递归:
 * 1.首先使用泛型约束 约束只能传入数组类型的东西;
 * 2.然后从数组中提取第一个，放入新数组的末尾;
 * 3.反复此操作，形成递归，满足结束条件返回该类型T。
 */
type Arr1 = [1, 2, 3, 4]
type RevertArr<T extends any[]> = T extends [infer first, ...infer rest]
  ? [...RevertArr<rest>, first]
  : T
type Arr2 = RevertArr<Arr1>
