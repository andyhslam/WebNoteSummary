// 联合类型
let phone: number | string = '213243'
let fn1 = function (type: number | boolean): boolean {
  return !!type;
}
let result = fn1(false);
console.log(result);


// 交叉类型：不能多也不能少
interface People {
  name: string,
  age: number
}
interface Manzj {
  sex: string,
}
const lxy = (man:Manzj & People): void => {
  console.log(man);
}
lxy({
  name: 'lxy',
  age: 26,
  sex: 'female',
});


// 类型断言：不能乱用
let fn2 = function (num: number | string): void {
  // 类型断言写法一
  console.log((num as string).length);
}
fn2('12345');

interface Au {
  run: string
}
interface Bu {
  build: string
}
let fn3 = (type: Au | Bu): void => {
  // 类型断言写法二
  console.log((<Au>type).run);
}
fn3({
  build: '123'
});

// window.abc = 13; // 这样写是错的
// (window as any).abc = 13; // 在any类型的变量上，访问任何属性都是允许的；可以使用any类型去做临时断言。

const fn4 = (type: any): boolean => {
  return type as boolean;
}
console.log(fn4(1));
