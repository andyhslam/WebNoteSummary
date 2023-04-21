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
