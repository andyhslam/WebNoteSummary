/**
1.Vue3响应式数据的本质
- 在Vue2.x中是通过defineProperty来实现响应式数据
- 在Vue3.x中是通过Proxy来实现响应式数据
2.Proxy注意点
- set方法必须通过返回值告诉Proxy此次操作是否成功
*/

// let obj = { name: 'lwj', age: 20 };
let arr = [1, 3, 5];
let state = new Proxy(arr, {
  get(obj, key) {
    console.log(obj, key); // [ 1, 3, 5 ] 1
    return obj[key];
  },
  set(obj, key, value) {
    /**
     * set方法调用两次：
     * 第一次：[ 1, 3, 5 ] 3 7
     * 第二次：[ 1, 3, 5, 7 ] length 4
     */
    console.log(obj, key, value);
    obj[key] = value;
    console.log('更新UI界面');
    // 通过返回值告诉Proxy当前操作是否成功，否则不会继续下一次操作，否则有可能在控制台报错；
    // 一定要返回true，才能继续下一次操作，才不会报错。
    return true;
  },
});

state.push(7);
