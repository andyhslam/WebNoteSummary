// 用 AOP 的方式给 ajax 函数动态装饰上 Token 参数

// 前置装饰
Function.prototype.before = function (beforefn) {
  var __self = this // 保存原函数的引用
  return function () { // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments) // 执行新函数，且保证 this 不被劫持，新函数接受的参数
    // 也会被原封不动地传入原函数，新函数在原函数之前执行
    return __self.apply(this, arguments) // 执行原函数并返回原函数的执行结果，
    // 并且保证 this 不被劫持
  }
}

var ajax1 = function (type, url, param) {
  console.log(param)
}
// 然后把 Token 参数通过 Function.prototyte.before 装饰到 ajax 函数的参数 param 对象中：
var getToken = function () {
  return 'Token1'
}
ajax1 = ajax1.before(function (type, url, param) {
  param.Token = getToken()
})
ajax1('get', 'http:// xxx.com/userinfo', { name: 'sven1' })


// 变通做法：把原函数和新函数都作为参数传入before 或者 after 方法
var before = function (fn, beforefn) {
  return function () {
    beforefn.apply(this, arguments)
    return fn.apply(this, arguments)
  }
}

var ajax2 = function (type, url, param) {
  console.log(param)
}
// 然后把 Token 参数通过 Function.prototyte.before 装饰到 ajax 函数的参数 param 对象中：
var getToken = function () {
  return 'Token2'
}
ajax2 = before(ajax2, function (type, url, param) {
  param.Token = getToken()
})
ajax2('get', 'http:// xxx.com/userinfo', { name: 'sven2' })