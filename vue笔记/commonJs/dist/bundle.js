(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// commonjs规范暴露的本质，就是exports这个对象
// var module1 = require('./modules/module1')
var module2 = require('./modules/module2')
var module3 = require('./modules/module3')

// module1.setArr([1, 2])
// console.log(module1.getArr());
// module2()
// module2.say()

// console.log(module3);
// module3.say()
// module3.eat('tea')
module3.setArr([1, 2, 4])
console.log(module3.getArr());
},{"./modules/module2":3,"./modules/module3":4}],2:[function(require,module,exports){
var arr = []
module.exports = {
    setArr: function(param) {
        arr = param
    },
    getArr: function() {
        return arr
    }
}
},{}],3:[function(require,module,exports){
module.exports = function() {
    console.log('模块2');
}

// module.exports.say = function() {
//     console.log('running');
// }
},{}],4:[function(require,module,exports){
// 第三方模块的使用顺序
// 1、npm install 模块名(安装模块)
// 2、使用require引入模块到项目(注意引入路径的写法)
// 3、按照第三方给出的使用方式使用
var uniq = require('uniq')
var module1 = require('./module1')
exports.say = function() {
    console.log('running');
}
module.exports.eat = function(food) {
    console.log(`今天吃了${food}`);
}
module.exports.getArr = module1.getArr
module.exports.setArr = module1.setArr

var arr = [1, 2, 3, 10, 3, 2, 1]
uniq(arr)
console.log(arr);
},{"./module1":2,"uniq":5}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
