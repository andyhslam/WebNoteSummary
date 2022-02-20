var str = 'global';
var obj = {
    str: 'private',
    getStr: function() {
        console.log(this.str)
        console.log(this)
    }
};
obj.getStr();

var str = 'global';
var obj = {
    str: 'private',
    getStr: () => {
        console.log(this.str)
        console.log(this)
    }
};
obj.getStr();

// 数组结构：左边为变量，右边为匹配的结果
// 只有当一个数组成员严格等于undefined，默认值才会生效
var [x, y = 'b'] = ['a', null]; // y=null
var [x, y = 'b'] = ['a', undefined]; // y='b'
console.log(y);

function fun() {
    return 'cmj'
}
let [x = fun()] = [123]; // x = 123
let [x = fun()] = [undefined]; // x = 'cmj'
console.log(x);

// 别名和默认值同时存在；age是匹配的模式，n是变量
let { age: a = 10, name } = { age: 18, name: 'cmj' }
console.log(a);

let { x: a = 1, y: b = 2 } = { y: 3, x: undefined }
console.log(a, b); // 1 3
let { x: a = 1, y: b = 2 } = { y: 3, x: null }
console.log(a, b); // null 3

// 对象作为函数参数
let obj = { id: 1, name: 'cmj', age: 18 }

function fun({ id, name: n, age: a = 20 }) {
    console.log(id, n, a);
}
fun(obj)

function f2([x = 1, y = 2]) {
    // return x + y;
    console.log(x + y);
}
f2([])
f2([10, 20])

function f3({ x = 1, y = 2 }) {
    // return x + y;
    console.log(x + y);
}
f3({})
f3({ x: 10, y: 20 })

function f3({ x = 1, y = 2 } = {}) {
    console.log(x, y);
}
f3() // { x = 1, y = 2 } = {}
f3({}) // { x = 1, y = 2 } = {}
f3({ x: 10 }) // { x = 1, y = 2 } = { x: 10 }
f3({ x: 10, y: 20 }) // { x = 1, y = 2 } = { x: 10, y: 20 }

function f3({ x, y } = { x: 1, y: 2 }) {
    console.log(x, y);
}
f3() // { x, y } = { x: 1, y: 2 }
f3({}) // { x, y } = {}
f3({ x: 10 }) // { x, y } = { x: 10 }
f3({ x: 10, y: 20 }) // { x, y } = { x: 10, y: 20 }

// set结构
let arr2 = [1, 2, 3, 4, 5, 6, 3, 2]
    // let arr3 = Array.from(new Set(arr2)).filter(item => item > 1)
let arr3 = [...new Set(arr2)].filter(item => item > 1)
console.log(arr3);
console.log(new Set(arr3).add(7).add(6).add('5'));

// map结构
let map = new Map()
map.set('name', 'cmj').set('age', 20)
let app = { id: 1 }
map.set(app, 10)
console.log(map);

const m1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])
for (const [k, v] of m1) {
    console.log(k, v);
}

// map转为object
const m2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])
const obj = {}
for (const [k, v] of m2) {
    obj[k] = v
}
console.log(obj);

// object转为map
const o3 = { a: 1, b: 2, c: 3 }
const m3 = new Map()
    // for (const k in o3) {
    //     m3.set(k, o3[k])
    // }
for (const k of Object.keys(o3)) {
    m3.set(k, o3[k])
}
console.log(m3);