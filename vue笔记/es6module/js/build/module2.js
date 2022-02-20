'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
function fn1() {
    console.log('模块2的fn1函数');
}

function fn2() {
    console.log('模块2的fn2函数');
}
exports.default = { fn1: fn1, fn2: fn2 };