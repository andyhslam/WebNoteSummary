/**
1.Vue3响应式数据的本质
- 在Vue2.x中是通过defineProperty来实现响应式数据
- 在Vue3.x中是通过Proxy来实现响应式数据
*/

let obj1 = { name: 'lwj', age: 20 };
let state = new Proxy(obj1, {
  get(obj, key) {
    console.log(obj, key);
    return obj[key];
  },
  set(obj, key, value) {
    console.log(obj, key, value); // { name: 'lwj', age: 20 } name lx
    obj[key] = value;
    console.log('更新UI界面');
  },
});

// console.log(state.name);
state.name = 'lx';
console.log(state); // { name: 'lx', age: 20 }
