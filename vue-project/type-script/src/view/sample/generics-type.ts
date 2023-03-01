// 函数泛型:
// 一个是数字类型的函数，另一个是字符串类型的函数
// 其实就是类型不同，实现的功能是一样的，这时候可以使用泛型来优化
function numGen(a: number, b: number): Array<number> {
  return [a, b];
}
numGen(1, 2);
function strGen(a: string, b: string): Array<string> {
  return [a, b];
}
strGen('3', '4');

// 泛型优化：
// 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了 T
// 当我们使用这个函数的时候把参数的类型传进去就可以了 也就是动态类型）
// 1. 单类型的泛型
function add<T>(a: T, b: T): Array<T> {
  return [a, b];
}
add<number>(1, 2); // 简写为 add(1, 2)
add<string>('曾侯乙', '编钟');

// 箭头函数的写法：
const arrowFn = <T>(arg: T): T => {
  return arg
}

// 2. 多类型的泛型
function mutiple<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [a, b];
  return arr;
}
mutiple<number, string>(1, '2');

// 定义泛型接口：
// 声明接口的时候，在名字后面加一个<参数>，使用的时候传递类型
interface MyInter<T> {
  (arg: T): T
}
function fn<T>(arg: T): T {
  return arg
}
let result: MyInter<number> = fn
result(123)

// 对象字面量泛型：
let foo: { <T>(arg: T): T }
foo = function <T>(arg: T): T {
  return arg
}
foo(123)

// 泛型约束：
// 我们期望在一个泛型的变量上面，获取其length参数，但是有的数据类型是没有length属性的
interface Len {
  length: number // 约束其为具有length属性的类型
}
function getLength<T extends Len>(arg: T) {
  return arg.length;
}
getLength<string>('123');
getLength<Array<string | number>>(['1', 2, 3]); // getLength(['1', 2, 3]);


// 使用keyof约束泛型对象
// 其中使用TS泛型和泛型约束
// 首先定义T类型并使用extends关键字继承object类型的子类型
// 然后使用keyof操作符获取T类型的所有键，它的返回类型是联合类型
// 最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let og = { a: 1, b: 2, c: 3 };
prop(og, 'a');
// prop(og, 'd'); // 报错

// 泛型类：
// 声明方法跟函数类似，名称后面定义<类型>，使用的时候确定类型new Sub<number>()
class Sub<T> {
  attr: T[] = [];
  add(a: T): T[] {
    return [a];
  }
}
let sub1 = new Sub<number>();
sub1.attr = [1, 2, 3];
sub1.add(123);

let sub2 = new Sub<string>();
sub2.attr = ['1', '2', '3'];
sub2.add('123');

console.log(sub1);
console.log(sub2);

