const Promise = require('./promise.js')

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