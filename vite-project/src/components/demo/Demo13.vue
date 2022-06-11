<template>
  <div>
    <p>{{ state }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.toRefs：
*/
import { toRef, toRefs } from 'vue';
export default {
  name: 'Demo13',
  setup() {
    let obj = { name: 'lwj', age: 20 };
    // let name = toRef(obj, 'name');
    // let age = toRef(obj, 'age');
    let state = toRefs(obj);
    function myFn() {
      // name.value = 'lx';
      // age.value = 30;
      state.name.value = 'lx';
      state.age.value = 30;
      console.log(obj);
      console.log(state);
      // console.log(name);
      // console.log(age);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
