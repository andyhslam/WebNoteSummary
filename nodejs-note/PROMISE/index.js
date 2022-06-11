// 1. index.js 进行原生的Promise演示
// 2. promise.js 进行自定义的Promise演示
// 3. test.js 是对 promise.js进行测试
// 4. 开发过程结合promise/a+规范

new Promise((resolve, reject) => {
    resolve(1)
}).then(
    value => {
        return new Promise(resolve => {
            resolve(
                new Promise((resolve, reject) => {
                    resolve('333')
                })
            )
        })
    },
    reason => {
        console.log('reason111 :', reason);
    }
).then(
    value => {
        console.log('value :', value);
    },
    reason => {
        console.log('reason222 :', reason);
    }
)

// new Promise((resolve, reject) => {
//     resolve(1)
// }).then(
//     value => {
//         return new Promise(resolve => {
//             resolve(2)
//         })
//     },
//     reason => {
//         console.log('reason111 :', reason);
//     }
// ).then(
//     value => {
//         console.log('value :', value);
//     },
//     reason => {
//         console.log('reason222 :', reason);
//     }
// )