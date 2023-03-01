<template>
  <div>
    <p>{{ state.time }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.什么是reactive
  - reactive是Vue3中提供的实现响应式数据的方法
  - 在Vue2中响应式数据是通过defineProperty来实现的
  - 在Vue3中响应式数据是通过ES6的Proxy来实现的
    把reactive方法的参数包装成Proxy对象，就可以监听该数据的变化
2.reactive的注意点：
  - reactive的参数必须是对象(json/arr)
  - 如果给reactive传递其它对象
    + 默认情况下修改对象，界面不会自动更新
    + 如果想更新，可以通过重新赋值的方式
*/
import { reactive } from 'vue';
export default {
  name: 'Demo4',
  setup() {
    // 创建一个响应式数据
    // 本质：将传入的数据包装成一个Proxy对象
    // let state = reactive(123);
    // let state = reactive({
    //   age: 123
    // });
    // let state = reactive([1, 3, 5]);
    let state = reactive({
      time: new Date(),
    });
    function myFn() {
      // state = 666; //由于在创建响应式数据时，传递的不是一个对象，所以无法实现响应式
      // state.age = 666;
      // state[0] = 666;

      // 直接修改以前的，界面不会更新
      // state.time.setDate(state.time.getDate() + 1);
      // 重新赋值：用当前时间创建一个新的时间对象，两者的时间是一样的
      const newTime = new Date(state.time.getTime());
      newTime.setDate(state.time.getDate() + 1);
      state.time = newTime;
      console.log(state.time);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
