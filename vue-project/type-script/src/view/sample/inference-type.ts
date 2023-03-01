// 类型推论：TypeScript会在没有明确的指定类型时推测出一个类型
let str1 = 'ndhl';
// str1 = 123; // 不能够再赋值给别的类型
// 如果你声明的变量没有定义类型，也没有赋值，这时候TS会推断成any类型可以进行任何操作
let und;

// 类型别名：type 关键字（可以给一个类型定义一个名字）多用于符合类型

// 1.定义类型别名
type s1 = string;
let str2: s1 = '123';

// 2.定义联合类型别名
type s2 = string | number;
let str3: s2 = '234';
let num3: s2 = 234;

// 3.定义函数别名
type cb1 = () => string;
let fn1: cb1 = () => 'ndhl';

// 4.定义值的别名(字面量的类型别名)
type val = 'on' | 'off' | boolean;
let value1: val = true;
let value2: val = false;
let value3: val = 'on';
let value4: val = 'off';
