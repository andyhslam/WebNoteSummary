// 1. 定义一个类型：如果是数组类型，就返回数组元素的类型；否则传入什么类型，就返回什么类型
type TYPE<T> = T extends Array<any> ? T[number] : T;
type A = TYPE<(string | number)[]>
type B = TYPE<boolean>

// 2. 配合tuple 转换 union 联合类型
type INFER<T> = T extends Array<infer U> ? U : never;
type tuple = [string, number]
type union = INFER<tuple>
type bool = INFER<boolean>