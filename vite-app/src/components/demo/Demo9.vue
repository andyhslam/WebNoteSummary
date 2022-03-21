<template>
  <div>
    <p>{{ state }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.toRaw
  - 从ref或者reactive中得到原始数据(得到引用)
2.toRaw作用
  - 做一些不想被监听的事情(提升性能)
*/
import { reactive, toRaw } from 'vue';
export default {
  name: 'Demo9',
  setup() {
    let obj = { name: 'lwj', age: 18 };
    /**
    ref/reactive数据类型的特点：
    每次修改都会被追踪，都会更新UI界面，但是这样其实是非常消耗性能的；
    所以如果我们有一些操作不需要追踪，不需要更新UI界面，此时我们可以通过toRaw方法取得原始数据；
    对原始数据进行修改，就不会被追踪，就不会更新UI界面，能够有效提升性能。
     */
    let state = reactive(obj);
    let obj2 = toRaw(state);
    // console.log(obj === obj2); // true

    // console.log(obj === state); // false
    // state和obj的关系：
    // 引用关系，state的本质是一个Proxy对象，在这个Proxy对象中引用了obj

    function myFn() {
      // 如果直接修改obj，那么是无法触发界面更新的
      // 只有通过包装之后的对象来修改，才会触发界面的更新
      obj2.name = 'lx';
      console.log(obj2); // {name: "lx", age: 18}
      console.log(state); // {name: "lx", age: 18}
      // state.name = "lx";
      // console.log(state);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
