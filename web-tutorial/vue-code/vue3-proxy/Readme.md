1. Proxy 与 Object.defineProperty 的比较

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
