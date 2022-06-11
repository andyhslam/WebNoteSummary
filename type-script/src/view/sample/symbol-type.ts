// symbol类型的值是通过Symbol构造函数创建的。
// 可以传递参数作为唯一标识，只支持number和string类型的参数
let num: symbol = Symbol(123);
// Symbol的值是唯一的：内存地址指针位置不同。
let str1: symbol = Symbol('123');
let str2: symbol = Symbol('123');
console.log(str1 === str2); // false

// 用作对象属性的键
let obj = {
  [num]: 'value',
  [str1]: 'miss',
  name: 'swq',
  sex: 'female',
};

// 使用symbol定义的属性，是不能通过如下方式遍历拿到的
// 1. for...in遍历
for (let key in obj) {
  console.log(key);
}
// 2. Object.keys遍历
for (let key of Object.keys(obj)) {
  console.log(key);
}
// 3. getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj));
// 4. JSON.stringify
console.log(JSON.stringify(obj));

// 可以通过如下两种方式遍历拿到
// 1. 拿到具体的symbol 属性,对象中有几个就会拿到几个
console.log(Object.getOwnPropertySymbols(obj));
// 2. es6 的 Reflect 拿到对象的所有属性(不包括隐式属性)
console.log(Reflect.ownKeys(obj));
for (let key of Reflect.ownKeys(obj)) {
  console.log(key);
}


// Symbol.iterator迭代器 和 生成器 for of
let arr11: Array<number> = [4, 5, 6];

// let itr: Iterator<number> = arr11[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

let set: Set<number> = new Set([1, 2, 3, 2, 1]);
type mapKeys = string | number;
let map: Map<mapKeys, mapKeys> = new Map();
map.set(1, '太上皇');
map.set(2, '皇上');
console.log('set', set); // Set(3) { 1, 2, 3 }
console.log('map', map); // Map(2) { 1 => '太上皇', 2 => '皇上' }

// Symbol.iterator迭代器：
// 支持遍历大部分类型迭代器 arr nodeList argumetns set map 等
// 不支持对象(因为对象没有返回迭代器的"[Symbol.iterator]()"方法)
function generation(erg: any) {
  let ite: Iterator<any> = erg[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = ite.next();
    if (!next.done) {
      console.log(next);
    }
  }
}
generation(map);

// 生成器：for...of(iterator语法糖；其实已经实现了上面的generation函数)
// 也是不支持对象
for (let item of arr11) {
  console.log(item);
}





