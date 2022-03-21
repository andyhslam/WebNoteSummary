<template>
  <div>
    <p>{{ count }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
// ref函数只能监听简单类型的变化，不能监听复杂类型(对象/数组)的变化
import { ref } from 'vue';
export default {
  name: 'Demo1',
  // setup函数是组合API的入口函数
  setup() {
    // 定义一个名称为count的变量，初始值是0
    // 这个变量发生改变，Vue会自动更新UI
    let count = ref(0);
    // 在组合API中，如果想定义方法，不用定义到methods中，直接定义即可
    function myFn() {
      console.log(count);
      count.value += 1;
    }
    // 在组合API中定义的变量/方法，要想在外界使用，必须通过return{xx, yy}暴露出去
    return { count, myFn };
  },
};
</script>

<style lang="less" scoped></style>
