{
    let a = 100
    console.log(a);
}
console.log(a);

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4)
}

// let声明的方式，解决循环索引的问题
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4)
}

// 闭包解决循环索引的问题
for (var i = 0; i < 10; i++) {
    (function(index) {
        setTimeout(() => {
            console.log(index);
        }, 4)
    })(i)
}

// let不能重复声明变量
let b = 10
let b = 100

// let声明的变量不能添加到全局对象
var c = 10
console.log(window.c); // 10

let d = 11
console.log(window.d); // undefined

// 块级作用域嵌套，因此立即执行函数就可以被块级作用域取代
{
    let k = 9; {
        console.log(k); // 9
        let m = 10;
        console.log(m); // 10
    }
    console.log(m); // ReferenceError: m is not defined
}