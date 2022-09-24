# React 笔记

1. 箭头函数本身不具备 this，它的 this 指向是固定的，指向父(函数)作用域；普通函数的 this 指向是可变的，指向调用它的对象。
2. react 里使用箭头函数永远指向类组件，setState 是类组件内置的方法，所以使用普通函数会改变指向导致 undefined
3. call、apply、bind 显式指定 this 的指向

-   call、apply 直接就会执行函数
-   bind 先不执行函数，而是先返回一个改变 this 指向的新函数，等到调用的时候再执行这个新函数。
