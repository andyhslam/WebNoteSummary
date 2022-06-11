// 1. Promise：简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。
// Promise对象代表一个异步操作，有三种状态：pending(进行中)、fulfilled(已成功，也称resolved)和rejected(已失败)
let p = new Promise((resolve, reject) => {
    try {
        console.log('开始执行：Promise代码');
        throw new Error('我们自定义的异常信息！');
        setTimeout(() => {
            // 写一些 处理逻辑的代码。
            resolve(123); //处理事件完成后，如果成功，直接调用resolve方法
        }, 1000)
    } catch (e) {
        reject(e); // 把当前的promise状态改成fail
    }
});
// p.then(data => console.log('data :', data), error => console.log('error :', error))
p.then(data => console.log('data :', data))
    .catch(error => console.log('error :', error))
console.log('结束！');

// 同步代码执行完成之后，才会执行微任务队列。

// 2. 构建一个Promise
// Promise对象是一个构造函数，用来生成Promise实例。接受一个函数作为参数，该函数的两个参数分别是resolve和reject，它们是两个函数，由JavaScript内部部署。

// 3. Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

// then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为reject
const fs = require('fs');
const path = require('path');
let p2 = new Promise((resolve, reject) => {
    console.log('执行Promise的初始化');
    // 读取02_const.js的文件内容
    let fileData = fs.readFileSync(path.join(__dirname, '02_const.js'), 'utf-8');
    resolve(fileData);
})
p2.then(data1 => {
    console.log('data1 :', data1);
    return { data1, time: Date.now() }
}).then(data2 => console.log('data2 :', data2))

// 4. 调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误。

// 5. resolve函数的参数除了正常的值以外，还可能是另一个Promise实例。那么resolve会等到Promise实例返回结果后再执行resolve状态改变。
let p1 = new Promise((resolve, reject) => {
    console.log('p1初始化');
    setTimeout(() => {
        resolve(123);
    }, 2000)
})

p1.then(data1 => {
    console.log('p1: then');
    console.log('data1 :', data1);
})

let p2 = new Promise((resolve, reject) => {
    console.log('p2初始化');
    resolve(p1); // 如果resolve传入的是一个promise，那么必须等待这个promise的then执行完成后，才能改变当前promise的状态。
})

p2.then(data2 => {
    console.log('p2: then');
    console.log('data2 :', data2);
})

// 6. then方法返回另外一个新的Promise，所以可以进行链式编程。
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000)
})

p1.then(data => {
        console.log('data :', data);
        return 10;
    }).then(data => {
        console.log('data :', data);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(3)
            }, 1000)
        })
    }).then(data => {
        console.log('data :', data);
    }).catch(err => console.log(err))
    .finally(() => { // es2018的标准
        console.log('fin'); //无论如何都会执行的
    })

// 7. then前一个回调函数，有可能返回的还是一个Promise对象(即有异步操作)，这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用

// 8. Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数

// 异常的传递

// 9. finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。该方法是ES2018引入标准的。

// 10. Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
// 所有的子Promise全部为Resolved状态，则它就是Resolved；其中一个Reject，那么就直接Rejected
// then的参数是 所有子Promise的结果的组成的数组。
Promise.all([Promise.resolve(1), Promise.resolve(), Promise.reject(new Error('我的错！'))])
    .then(data => console.log(data))
    .catch(error => console.log(error))

// 11. Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。
// 所有子Promise之中有一个实例率先改变状态，当前Promise的状态就跟着改变。
Promise.race([new Promise(resolve => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    }), Promise.reject(3), Promise.resolve(2)])
    .then(data => console.log(data))
    .catch(err => console.log(err))

// 12. Promise.resolve()：可以将现有对象转为Promise对象。
// (1) 参数是一个Promise实例
// (2) 参数是一个thenable对象，具有then方法的对象，然后就立即执行thenable对象的then方法。
Promise.resolve({
    then(resolve, reject) {
        resolve(12)
    }
}).then(data => console.log(data))

// (3) 参数不是具有then方法的对象，或者根本就不是对象，比如数值。则Promise.resolve方法返回一个新的Promise对象，状态为resolved.
Promise.resolve('zyf');

// (4) 不带有任何参数，直接返回一个resolved状态的Promise对象。
Promise.resolve(); // 值为undefined

// 13. Promise.reject()
// Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected
// 注意：Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。