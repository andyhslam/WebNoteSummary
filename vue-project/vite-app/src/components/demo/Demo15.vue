<template>
  <ul>
    <li v-for="item in state" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
/**
1.customRef(自定义ref):
- 返回一个ref对象，可以显示地控制依赖追踪和触发响应
2.为何要自定义ref
*/
import { ref, customRef } from 'vue';
function myRef(value) {
  return customRef((track, trigger) => {
    fetch(value)
      .then((res) => {
        return res.json(); // 方便处理：把res转换成json
      })
      .then((data) => {
        console.log(data); // 拿到服务器返回的数据
        value = data;
        trigger();
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      get() {
        track(); // 告诉Vue这个数据需要追踪变化
        console.log('get', value);
        // 注意点：不能在get方法中发送网络请求
        // 渲染界面 -> 调用get -> 发送网络请求
        // 保存数据 -> 更新界面 -> 调用get
        return value;
      },
      set(newValue) {
        console.log('set', newValue);
        value = newValue;
        trigger(); // 告诉Vue触发界面更新
      },
    };
  });
}
export default {
  name: 'Demo15',
  // setup函数：只能是一个同步的函数，不能是一个异步的函数
  setup() {
    /*
    let state = ref([]);
    // 在setup函数里面，不能使用async...await的方式来解决异步调用的问题
    // const data = await fetch('../../../public/data.json');

    // 异步获取数据的方式之一：使用大量的回调函数
    fetch('../../../public/data.json')
      .then((res) => {
        return res.json(); // 方便处理：把res转换成json
      })
      .then((data) => {
        console.log(data); // 拿到服务器返回的数据
        state.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
    */

    // customRef：获取的数据就是响应式数据，自动更新UI界面
    let state = myRef('../../../public/data.json');

    return { state };
  },
};
</script>

<style lang="less" scoped></style>
