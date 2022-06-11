// 1.数字枚举
enum ColorNum {
  Red = 1, // 增长枚举
  Green = 5, // 自定义枚举
  Blue
}
console.log(ColorNum.Red);
console.log(ColorNum.Green);
console.log(typeof ColorNum.Blue);

// 2.字符串枚举
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或者说一个字符串枚举成员必须具有初始化表达式。

// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，
// 这个值通常是很难读的 - 它并不能表达有用的信息，字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
enum ColorStr {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
console.log(ColorStr.Red);
console.log(ColorStr.Green);
console.log(typeof ColorStr.Blue);

// 3.异构枚举：可以混合字符串和数字成员
enum Heter {
  Yes = 1,
  No = 'No',
}
console.log(Heter.Yes);
console.log(Heter.No);

// 4.接口枚举
// 定义一个枚举Heter和一个接口EMI，然后接口EMI有一个属性Red值为Heter.Yes，声明对象时要遵循这个规则
interface EMI {
  Red: Heter.Yes
}
let objEmi: EMI = {
  Red: Heter.Yes
}

// 5.const枚举：let和var都是不允许的，声明只能使用const
// const声明的枚举会被编译成常量；普通声明的枚举编译完后是个对象
const enum Types {
  success,
  fail,
}

let code: number = 0;
if (code === Types.success) {

}

// 6.反向映射：包含正向映射(key -> value)和反向映射(value -> key)
// 注意：不会为字符串枚举成员生成反向映射。
enum Enum {
  success = 100
}
let value: number = Enum.success;
let key = Enum[value];
console.log(`value---${value}`, `key---${key}`);
