<template>
  <div>
    <p>{{ name }}</p>
    <button @click="myFn1">按钮</button>
    <p>{{ age }}</p>
    <button @click="myFn2">按钮</button>
  </div>
</template>

<script>
/**
1.Composition API 和 Option API混合使用
2.Composition API本质(组合API/注入API)
  - 本质：在运行时，将Composition API当中暴露出去的数据和方法注入到Option API的data和methods中。
3.setup执行时机
  - setup在beforeCreate之前执行
  - beforeCreate：表示组件刚刚被创建出来，组件的data和methods还没有初始化好
  - created：表示组件刚刚被创建出来，并且组件的data和methods已经初始化好
4.setup注意点
  - 由于在执行setup函数的时候，还没有执行created生命周期函数
    所以在setup函数中，不能使用data和methods
  - 由于我们不能在setup函数中使用data和methods
    所以Vue为了避免我们错误的使用，它直接将setup函数中的this修改成undefined
  - setup函数只能是同步的，不能是异步的
*/
import { ref } from 'vue';
export default {
  name: 'Demo3',
  data() {
    return {
      name: 'lwj',
    };
  },
  methods: {
    myFn1() {
      alert(this.name);
    },
  },
  setup() {
    let age = ref(18);
    function myFn2() {
      alert(age.value);
    }
    // console.log(this); //undefined
    return { age, myFn2 };
  },
};
</script>

<style lang="less" scoped></style>
