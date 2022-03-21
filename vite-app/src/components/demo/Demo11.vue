<template>
  <div>
    <p>{{ state }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.markRaw
  - 使数据不被追踪(监听)，不变成响应式
*/
import { reactive, markRaw } from 'vue';
export default {
  name: 'Demo11',
  setup() {
    let obj = { name: 'lwj', age: 18 };
    obj = markRaw(obj);
    let state = reactive(obj);
    function myFn() {
      state.name = 'lx';
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
