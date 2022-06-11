const func1 = function (name: string, age?: number): string {
  return name + age;
}
let lx = func1('lx', 20);

// 用接口去约束函数的参数和返回值
interface User {
  name: string,
  age: number,
}
const func2 = function (user: User): User{
  return user;
}
let khp = func2({
  name: 'khp',
  age: 30,
});
// console.log(khp);

// 函数重载：
// 1、重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 2、如果参数类型不同，则参数类型应设置为 any。
// 3、参数数量不同你可以将不同的参数设置为可选。

// 前两个是重载函数(写规则)
function fn(params1: number): void
function fn(params1: string, params2: number): void
// 后一个是执行函数(写业务逻辑)，可以遵循任意一个重载函数的规则
function fn(params1: any, params2?: any): void {
  console.log(params1);
  console.log(params2);
}
fn('1', 2);
