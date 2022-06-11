// 1. 字符串作为数组进行解构赋值
let [a, b, c] = '123456';
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 2. 字符串作为对象进行解构赋值
let { toString: s, 0: a, 1: b, 2: c } = '123456';
console.log(s);
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 3. number类型和boolean类型都可以当作对象来解构赋值，首先转换成包装对象再进行解构
let { toString: m } = 123;
let { toString: b } = true;
console.log('m :', m);
console.log('b :', b);

// 4. 函数参数作为数组进行解构赋值
function add([a, b]) {
    console.log('a :', a);
    console.log('b :', b);
    return a + b;
}
console.log('add([1,2]) :', add([1, 2]));

// 5. 函数参数作为数组进行解构赋值时带默认值
function add([a = 1, b = 20]) {
    console.log('a :', a);
    console.log('b :', b);
    return a + b;
}
console.log('add([10]) :', add([10]));

// a : 10
// b : 20
// add([10]) : 30

// 6. 函数参数作为对象进行解构赋值
function add({ a = 1, b = 1 }) {
    console.log('a :', a);
    console.log('b :', b);
    return a + b;
}
// console.log('add({a:2,b:3}) :', add({ a: 2, b: 3 }));
// console.log('add({a:2}) :', add({ a: 2 }));
console.log('add() :', add());

// 7. 函数参数作为对象进行解构赋值时带默认值
function add({ a = 1, b = 1 } = {}) {
    console.log('a :', a);
    console.log('b :', b);
    return a + b;
}
console.log('add() :', add());

function add({ a = 1, b = 1 }) {
    console.log('a :', a);
    console.log('b :', b);
    return a + b;
}
console.log('add({}) :', add({}));