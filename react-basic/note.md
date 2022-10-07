# React 笔记

## react-基础

-   this 指向问题

1. 箭头函数本身不具备 this，它的 this 指向是固定的，指向父(函数)作用域；普通函数的 this 指向是可变的，指向调用它的对象。
2. react 里使用箭头函数的 this，可以永远指向类组件的实例；setState 是类组件内置的方法，如果使用普通函数，就会改变 this 的指向，导致 undefined

-   call、apply、bind 显式指定 this 的指向

1.  call、apply 直接就会执行函数
2.  bind 先不执行函数，而是先返回一个改变 this 指向的新函数，等到调用的时候再执行这个新函数。

-   状态组件：取决于有没有一个由它在内部可以控制的自己的数据。

1.  在 hook 之前，函数组件没有状态，也叫：无状态组件；
2.  类组件有状态，也叫：有状态组件；
3.  受控组件就是可以被 React 的状态控制的组件，即 input 框状态被 React 组件状态控制。

## react-router

-   两种常用 Router: HashRouter 和 BrowserRouter

1. HashRouter：监听 url 的 hash 值实现（http://localhost:3000/#/about）
2. BrowserRouter：使用 h5 的 history.pushState API 实现（http://localhost:3000/about）
