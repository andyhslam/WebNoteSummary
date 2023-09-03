1. Proxy 与 Object.defineProperty 的差异

- Proxy 代理的是一个对象；
- Object.defineProperty 代理的是对象的一个属性。

```js
const proxy = new Proxy(obj, {
  // receiver：代理的源对象
  get(target, key, receiver) {},
  set(target, key, value, receiver) {},
})

Object.defineProperty(target, key, {
  get() {},
  set(value) {},
})
```
