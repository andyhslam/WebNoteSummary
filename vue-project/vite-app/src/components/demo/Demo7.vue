<template>
  <div>
    <p>{{ state.a }}</p>
    <p>{{ state.gf.b }}</p>
    <p>{{ state.gf.f.c }}</p>
    <p>{{ state.gf.f.s.d }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.递归监听
  - 默认情况下，无论是通过ref还是reactive创建出来的数据都是递归监听
2.递归监听存在的问题
  - 如果数据量比较大，非常消耗性能：
    因为内部做了递归处理，把每一层数据都包装成一个Proxy对象
3.非递归监听：
  - 只能监听第一层数据，不能监听其它层
4.内部递归：
  - 检测是否为对象类型，类似深度冻结对象，MDN文档有操作
*/
import { reactive } from 'vue';
// import {ref} from 'vue';
export default {
  name: 'Demo7',
  setup() {
    let state = reactive({
      // let state = ref({
      a: 'a',
      gf: {
        b: 'b',
        f: {
          c: 'c',
          s: {
            d: 'd',
          },
        },
      },
    });
    function myFn() {
      // state.a = '1';
      // state.gf.b = '2';
      // state.gf.f.c = '3';
      // state.gf.f.s.d = '4';

      // state.value.a = '1';
      // state.value.gf.b = '2';
      // state.value.gf.f.c = '3';
      // state.value.gf.f.s.d = '4';

      console.log(state);
      console.log(state.gf);
      console.log(state.gf.f);
      console.log(state.gf.f.s);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
