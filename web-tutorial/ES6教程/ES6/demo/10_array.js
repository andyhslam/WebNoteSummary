// 1. 数组的扩展运算符的应用
let k = [1, 3, 4, 9, 'sdfa'];
console.log(...k);

// 例如：用Math.max方法获取数组中的最大值。
// 替代函数的apply方法
let m = [1, 9, 22, 12];
let max = Math.max.apply(null, m);
console.log('max :', max);

let maxEs6 = Math.max(...m);
console.log('maxEs6 :', maxEs6);

// 2. rest参数的逆应用
function sum(...arr) {
    return arr.reduce((pre, next) => pre + next);
}
console.log('sum(1,2,3,4) :', sum(1, 2, 3, 4));
console.log('sum(...[1,2,3,4,5]) :', sum(...[1, 2, 3, 4, 5]));

// 3. 复制数组
// es5方法
let arr = [2, 4, 6, 8];
let newArr = arr.slice();
console.log('newArr :', newArr);

let newArr2 = arr.concat();
console.log('newArr2 :', newArr2);

// es6方法
let array = [2, 4, 6, 8];
let newArr3 = [...array]
console.log('newArr3 :', newArr3);

let [...newArr4] = array;
console.log('newArr4 :', newArr4);

// 4. 合并数组
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let arr3 = [9, 10, 11, 12];
let nana = arr1.concat(arr2, arr3);
let zyf = [...arr1, ...arr2, ...arr3, 13];
console.log('nana :', nana);
console.log('zyf :', zyf);

// 5. 字符串展开
let k = '123456';
console.log('[...k] :', [...k]);

// 6. querySelectorAll返回值的展开
let arr = [...document.querySelectorAll('li')]

// 7. Array.from()转换成数组：1：类数组对象 2：可遍历的对象
let obj = { '0': 'a', '1': 2, 'length': 2 }
let k = Array.from(obj);
console.log('k :', k);

// 8. 数组实例的 find() 和 findIndex() 用于找出第一个符合条件的数组成员或者索引
let k = [5, 10, 15, 20];
let m = k.find((val, index) => {
    console.log('index :', index);
    return val >= 10;
});
console.log('m :', m);

let n = k.findIndex(val => val >= 10);
console.log('n :', n);

// 9. 数组实例的fill方法使用给定值，填充一个数组
let k = new Array(10);
k.fill(3);
console.log('k :', k);

// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
let k = new Array(10);
k.fill(3, 1, 5);
console.log('k :', k);

// 10. 数组实例的entries(), keys() 和 values()
let arr = [5, 10, 15, 20];
for (let [k, v] of arr.entries()) {
    console.log('k :', k);
    console.log('v :', v);
}
for (let k of arr.keys()) {
    console.log('k :', k);
}
for (let v of arr.values()) {
    console.log('v :', v);
}
for (let entry of arr.entries()) {
    console.log('entry :', entry);
}

// 11. 数组实例的includes()
let arr = [5, 10, 15, 20, NaN];
console.log('arr.includes(5) :', arr.includes(5)); // true
console.log('arr.includes(25) :', arr.includes(25)); // false
console.log('arr.includes(NaN) :', arr.includes(NaN)); // true
console.log('arr.indexOf(5) :', arr.indexOf(5)); // 0
console.log('arr.indexOf(25) :', arr.indexOf(25)); // -1
console.log('arr.indexOf(NaN) :', arr.indexOf(NaN)); // -1