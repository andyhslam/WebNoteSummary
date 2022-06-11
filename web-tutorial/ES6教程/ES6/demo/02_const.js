// 1. const声明后，需要立即赋值，后续不能修改
const e = 10;
e = 20; // TypeError: Assignment to constant variable.

const f; // SyntaxError: Missing initializer in const declaration
f = 20;

// 2. const声明的变量，也有暂时性死区
{
    console.log(g); // ReferenceError: Cannot access 'g' before initialization
    const g = 20;
    console.log(g);
}

// 3.const 与复杂类型
const stu = {}; // 要求指向的 具体的内存地址不能修改，但是该内存地址里面的内容是可以改变的
stu.age = 20;
console.log(stu);

// 4. const 声明的变量也不属于全局对象的属性
const h = 20;
console.log(window.h);

// 5. const不能重复声明变量