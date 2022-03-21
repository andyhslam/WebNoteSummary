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
1.递归监听(ref和reactive)：
  - 默认情况下，无论是通过ref还是reactive创建出来的数据都是递归监听
2.递归监听存在的问题
  - 如果数据量比较大，非常消耗性能：
    因为内部做了递归处理，把每一层数据都包装成一个Proxy对象
3.非递归监听(shallowReactive和shallowRef)：
  - 只能监听第一层数据，不能监听其它层
4.应用场景：
  - 一般情况下我们使用递归监听(ref和reactive)即可
    只有在需要监听的数据量比较大的时候，我们才使用非递归监听(shallowReactive和shallowRef)
5.triggerRef方法：作用是根据传入的数据，主动更新界面。
  - 注意点：
  Vue3只提供triggerRef方法，没有提供triggerReactive方法；
  所以如果是reactive类型的数据，就无法主动触发界面更新。
6.内部递归：
  - 检测是否为对象类型，类似深度冻结对象，MDN文档有操作
*/
// import { shallowReactive } from "vue";
import { shallowRef, triggerRef } from 'vue';
export default {
  name: 'Demo8',
  setup() {
    // shallowRef(10) -> shallowReactive({value: 10})
    // let state = shallowReactive({
    let state = shallowRef({
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

    // 注意点：如果是通过shallowRef创建的数据，那么Vue监听的是.value的变化
    // 因为底层本质上value才是第一层，非递归监听只能监听第一层数据
    // let state1 = shallowRef({
    //   a: "a",
    //   gf: {
    //     b: "b",
    //     f: {
    //       c: "c",
    //       s: {
    //         d: "d",
    //       },
    //     },
    //   },
    // });

    // let state2 = shallowReactive({
    //   value: {
    //     a: "a",
    //     gf: {
    //       b: "b",
    //       f: {
    //         c: "c",
    //         s: {
    //           d: "d",
    //         },
    //       },
    //     },
    //   },
    // });

    function myFn() {
      // state.a = "1";
      // state.gf.b = "2";
      // state.gf.f.c = "3";
      // state.gf.f.s.d = "4";

      // console.log(state);
      // console.log(state.gf);
      // console.log(state.gf.f);
      // console.log(state.gf.f.s);

      // state.value = {
      //   a: "1",
      //   gf: {
      //     b: "2",
      //     f: {
      //       c: "3",
      //       s: {
      //         d: "4",
      //       },
      //     },
      //   },
      // };

      // state.value.a = "1";
      // state.value.gf.b = "2";
      // state.value.gf.f.c = "3";
      // state.value.gf.f.s.d = "4";

      state.value.gf.f.s.d = '4';
      triggerRef(state);

      // 注意点：如果是通过shallowRef创建的数据，那么Vue监听的是.value的变化
      // 因为底层本质上value才是第一层，非递归监听只能监听第一层数据
      console.log(state);
      console.log(state.value);
      console.log(state.value.gf);
      console.log(state.value.gf.f);
      console.log(state.value.gf.f.s);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
