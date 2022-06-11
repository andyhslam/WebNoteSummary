// 1. ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
// 数据类型：String, Number, Boolean, Object, Array, Function, null, undefined, Symbol
let s1 = Symbol(); // 创建一个Symbol
let s2 = Symbol();
console.log('s1 === s2 :', s1 === s2);

s1.toString();
console.log(String(s1));

// 构建一个Symbol值，直接用它的构造函数执行即可，不能用new。每次构建都会是一个独一无二的值。

// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述。
let s3 = Symbol('gwj');
console.log('s3 :', s3);

// 2. Symbol不能参与运算，但是Symbol值可以显式转为字符串。
let s4 = Symbol('syq');
console.log('s4.toString() + "===" :', s4.toString() + "==="); // 可以显式转为字符串
console.log('s4 + "===" :', s4 + "==="); // 不能隐式转为字符串

// 3. 作为属性名的Symbol
let t = {
    name: 'syq',
    age: 20,
    [Symbol('kaka')]: 22,
    [Symbol('fun')]() {
        console.log('messi');
    }
}
console.log('Object.getOwnPropertyNames(t) :', Object.getOwnPropertyNames(t));
console.log('Object.getOwnPropertySymbols(t) :', Object.getOwnPropertySymbols(t));
for (let s of Object.getOwnPropertySymbols(t)) {
    console.log('t[s] :', t[s]);
}
for (let key of Object.keys(t)) {
    console.log('key :', key);
}

// 4. 属性名的遍历
// 不能遍历Symbol属性：for...in、for...of、Object.keys()、Object.getOwnPropertyNames()

// Object.getOwnPropertySymbols

// 5. Symbol.for()，Symbol.keyFor()
let s1 = Symbol.for('gwj');
let s2 = Symbol.for('gwj');
console.log('s1 === s2 :', s1 === s2);
console.log('Symbol.keyFor(s1) :', Symbol.keyFor(s1));
console.log('Symbol.keyFor(s2) :', Symbol.keyFor(s2));