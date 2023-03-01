<template>
  <div>
    <p>{{ state.name }}</p>
    <p>{{ state.attr.age }}</p>
    <p>{{ state.attr.height }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.readonly
*/
import { readonly, isReadonly, shallowReadonly } from 'vue';
export default {
  name: 'Demo17',
  setup() {
    // readonly：用于创建一个只读的数据，并且是递归只读(即所有层次的数据都是只读的)
    // let state = readonly({ name: 'lwj', attr: { age: 20, height: 188 } });

    // shallowReadonly：用于创建一个只读的数据，只有第一层的数据才是只读的，不是递归只读
    let state = shallowReadonly({ name: 'lwj', attr: { age: 20, height: 188 } });

    /**
     * const和readonly的区别：
     * const：赋值保护，不能给值类型的常量重新赋值，但是可以给引用类型的变量重新赋值
     * readonly：属性保护，不能给属性重新赋值
     */

    // const value = 123;
    const value = { name: 'xr', age: 22 };

    function myFn() {
      state.name = 'lx';
      state.attr.age = 30;
      state.attr.height = 166;
      console.log(state);
      console.log(isReadonly(state));
      // value = 456;
      // console.log(value);
      value.name = 'ky';
      value.age = 32;
      console.log(value);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
