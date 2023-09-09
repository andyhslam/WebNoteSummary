# 实现步骤

1. 通过 Object.defineProperty 或者 Proxy 实现响应式数据
2. input 框的 input 或 keyup 事件 -> 事件处理函数的绑定 -> 改变数据
3. 相关的 DOM 和数据绑定在一起；操作数据的某个属性 -> 对应 DOM 就改变
