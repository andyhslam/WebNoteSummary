// 1. Generator函数除了状态机，还是一个遍历器对象生成函数。
// Generator函数特点：(1)function关键字与函数名之间有一个星号；(2)函数体内部使用yield表达式，定义不同的内部状态。
function* G() {
    console.log('1开始执行');
    yield 1;
    console.log('2开始执行');
    yield 2;
    yield 3;
    return 4;
}
let k = G(); // 返回一个遍历器对象
console.log('next方法调用之前！');
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

// 2. Generator函数执行后，并不会执行内部的代码，而是返回一个遍历器对象。执行遍历器对象的next方法才会执行Generator函数内的代码。

// 3. yield
// (1) 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回对象的value属性值。
// (2) 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
// (3) 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回对象的value属性值。
// (4) 如果该函数没有return语句，则返回对象的value属性值为undefined。

// 4. 与Iterator接口的关系
function* G1() {
    yield 1;
    yield 2;
    yield 3;
}
let t = { // t为可遍历的接口的对象
    [Symbol.iterator]() {
        return G1();
    }
}
for (let k of t) {
    console.log('k :', k);
}

// 5. next方法的参数
function* Add() {
    let a1 = yield 1; // {value: 1, done: false}
    let a2 = yield 2;
    let a3 = yield 3;
    console.log('a1 :', a1);
    console.log('a2 :', a2);
    console.log('a3 :', a3);
}
let g = Add();
console.log('g.next() :', g.next()); // {value: 1, done: false}
console.log('g.next(3) :', g.next(3));
console.log('g.next(4) :', g.next(4));
console.log('g.next(5) :', g.next(5));

// 6. for...of循环
function* G1() {
    yield 1;
    yield 2;
    yield 3;
    return 4; // next {value:4, done:true}
}
for (let k of G1()) {
    console.log('k :', k);
}

// 7. Generator.prototype.throw()
// Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体内捕获。
// 可以通过throw改变Generator函数内部的执行流程
function* G1() {
    try {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    } catch (err) {
        console.log('err :', err);
    }
}
let k = G1();
console.log(k.next());
console.log(k.next());
k.throw(new Error('异常信息！'));

// 8. Generator.prototype.return()
// Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
function* G2() {
    yield 'abcd';
    yield 2;
    yield 3;
}
let k = G2();
console.log(k.next());
console.log('k.return(369) :', k.return(369));

// 9. yield* 表达式
// 如果在Generator函数内部，调用另一个Generator函数
function* G2() {
    yield 'abcd';
    yield 2;
    yield 6;
}

function* G3() {
    yield 1;
    yield 3;
    yield* G2();
    // for (let k of G2()) {
    //     yield k;
    // }
    yield 4;
}
for (let k of G3()) {
    console.log('k :', k);
}

// yield* 跟可遍历的对象
function* G4() {
    yield 1;
    yield*[2, 3, 4, 5];
    yield*'syq';
    yield 6;
}
for (let k of G4()) {
    console.log('k :', k);
}

// 10. 作为对象属性的Generator函数
let m = {
    * G5() {
        yield*[1, 2, 3, 4]
    }
}
for (let k of m.G5()) {
    console.log('k :', k);
}