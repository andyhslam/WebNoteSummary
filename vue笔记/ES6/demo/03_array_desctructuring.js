// 1. 数组对应的解构赋值

// 声明三个变量
let [a, b, c] = [1, 2, 3];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 2. 复杂的解构赋值
let [a, [b], c] = [1, [2], 3];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 3. 越过解析
let [a, , b] = [1, 2, 3];
console.log('a :', a);
console.log('b :', b);

// 4. 不完全解构
let [a, [b], c] = [1, [2, 4, 6], 3];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 5. 配合展开运算符
let [a, [b, ...d], c] = [1, [2, 4, 6], 3];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);

// 6. 如果解构不成功，变量的值就等于undefined
let [a, b] = [1];
console.log('a :', a);
console.log('b :', b);

// 7. 数组的解构赋值：如果等号右边不是可遍历的接口，那么将会报错
let [a, b] = null;
let [a, b] = undefined;
let [a, b] = {};
let [a, b] = 123;
let [a, b] = '123'; // 字符串可以
console.log('a :', a); // 1
console.log('b :', b); // 2

// 8. 解构赋值允许指定默认值
let [a = 3, b = 6, c = 9] = [1, 2, 4];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

// 9. 当一个数组成员严格等于undefined，默认值才会生效
let [a = 3, b = 6, c = 9] = [1, 2];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

let [a = 3, b = 6] = [undefined, 2];
console.log('a :', a);
console.log('b :', b);
// a : 3
// b : 2

let [a = 3, b = 6] = [null, 2];
console.log('a :', a);
console.log('b :', b);
// a : null
// b : 2

// 10. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [a = 9, b = a] = [1];
console.log('a :', a);
console.log('b :', b);