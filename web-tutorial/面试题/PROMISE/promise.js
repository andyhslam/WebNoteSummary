class Promise {
    constructor(executor) {
        // 参数校验
        if (typeof executor !== 'function') {
            throw new TypeError(`Promise resolver ${executor} is not a function`)
        }

        this.initValue()
        this.initBind()
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    // 绑定this
    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    // 初始化值
    initValue() {
        this.value = null // 终值
        this.reason = null // 拒因
        this.state = Promise.PENDING // 状态
        this.onFulfilledCallbacks = [] // 成功回调
        this.onRejectedCallbacks = [] // 失败回调
    }

    resolve(value) {
        // 成功后的一系列操作(状态的改变，成功回调的执行)
        if (this.state === Promise.PENDING) {
            // 这里要保留this，因为resolve在全局环境下执行，node中为undefined
            // 浏览器/客户端，非严格模式下，this指向全局对象window
            // 因此可以用箭头函数来解决
            this.state = Promise.FULFILLED
            this.value = value
            this.onFulfilledCallbacks.forEach((fn) => fn(this.value))
        }
    }

    reject(reason) {
        // 失败后的一系列操作(状态的改变，失败回调的执行)
        if (this.state === Promise.PENDING) {
            this.state = Promise.REJECTED
            this.reason = reason
            this.onRejectedCallbacks.forEach((fn) => fn(this.reason))
        }
    }

    then(onFulfilled, onRejected) {
        // 参数校验
        if (typeof onFulfilled !== 'function') {
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function') {
            onRejected = function(reason) {
                throw reason
            }
        }
        // 实现链式调用，且改变后面then的值，必须通过新的实例
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === Promise.FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value)
                        Promise.resolvePromise(promise2, x, resolve, reject);
                        // resolve(x)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.state === Promise.REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason)
                        Promise.resolvePromise(promise2, x, resolve, reject);
                        // resolve(x)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.state === Promise.PENDING) {
                this.onFulfilledCallbacks.push(value => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(value)
                            Promise.resolvePromise(promise2, x, resolve, reject);
                            // resolve(x)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })

                this.onRejectedCallbacks.push(reason => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(reason)
                            Promise.resolvePromise(promise2, x, resolve, reject);
                            // resolve(x)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }
        })
        return promise2
    }
}

Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'rejected'
Promise.resolvePromise = function(promise2, x, resolve, reject) {
    if (promise2 === x) {
        // promise与x相等
        reject(new TypeError('Chaining cycle detected for promise'))
    }
    let called = false
    if (x instanceof Promise) {
        // 判断x为MyPromise
        x.then(value => {
            Promise.resolvePromise(promise2, value, resolve, reject);
        }, reason => {
            reject(reason)
        })
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // x 为对象或函数
        try {
            // 用then代替x.then，就没有this，因此需要用then.call()方法，且第一个参数是this指向的对象
            const then = x.then
            if (typeof then === 'function') {
                then.call(
                    x,
                    value => {
                        if (called) return
                        called = true
                        Promise.resolvePromise(promise2, value, resolve, reject);
                    }, reason => {
                        if (called) return
                        called = true
                        reject(reason)
                    })
            } else {
                if (called) return
                called = true
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

Promise.defer = Promise.deferred = function() {
    let dfd = {}
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;