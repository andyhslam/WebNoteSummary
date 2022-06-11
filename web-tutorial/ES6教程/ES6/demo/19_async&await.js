// 1. async类似*的用法，await类似于yield;
// 在函数的最开始，设置async标志当前函数为异步函数。而且函数返回值是Promise实例，如果没有返回值或者非Promise都会被改造成Promise实例
// async函数执行完成后，由于返回的是Promise实例，所以可以进行连续的then和catch。
async function Add() {
    return 1; // Promise.resolve(1)
}
Add().then(data => {
    console.log(data);
})

// 2. await只能出现在async函数中
// await后面可以跟一个Promise实例，如果不是Promise会被立即改造成resolved状态的Promise。而且会暂停函数的执行，直到Promise的状态发生变化才会向下执行。
async function readFile() {
    console.log('async函数执行');
    let data = await new Promise((resolve, reject) => {
        console.log('await开始执行');
        setTimeout(() => {
                resolve(333);
            }, 1000)
            // resolve(333);
    })
    console.log('data :', data);

    await 1;
    await Promise.reject(2);
    await 3;
    return data;
}
readFile().then(data => console.log('last:data :', data)).catch(e => {})
console.log('main');

// 3. 异常处理

// 4. async的状态改变
// 只要一个await语句后面的Promise变为reject，那么整个async函数都会中断执行
// async函数返回的Promise对象，必须等到内部所有await命令后面的Promise对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。

// 5. async的多种形式

// 函数声明
async function add(params) {
    await 1;
}

// 函数表达式
let func = async function() {}

// 对象的方法
let func = {
    async getName() {

    }
}

// Class的方法
class User {
    async getName() {

    }
}

// 箭头函数
let func = async() => {}

// 6. 依次读取两个文件的内容，并把两个文件的内容写入到另外一个文件中
const fs = require('fs')
const path = require('path')
const f1 = path.join(__dirname, '02_const.js')
const f2 = path.join(__dirname, '06_string.js')
const f3 = path.join(__dirname, 'b.js')

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    })
}

async function joinFile(f1, f2, f3) {
    // let data1 = await readFilePromise(f1);
    // let data2 = await readFilePromise(f2);
    // 下面的写法效率更高
    let p1 = readFilePromise(f1);
    let p2 = readFilePromise(f2);
    let data1 = await p1;
    let data2 = await p2;
    fs.writeFile(f3, data1 + data2, 'utf8', error => {
        console.log('写入完成！');
    })
}

joinFile(f1, f2, f3).then(() => {
    console.log('最后的输出！');
})