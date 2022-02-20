// 统一暴露
function fn1() {
    console.log('模块2的fn1函数');
}

function fn2() {
    console.log('模块2的fn2函数');
}
export default { fn1, fn2 }