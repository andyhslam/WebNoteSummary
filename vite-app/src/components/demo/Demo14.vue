<template>
  <div>
    <p>{{ age }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.customRef(自定义ref):
- 返回一个ref对象，可以显示地控制依赖追踪和触发响应
2.如何自定义ref
*/
import { ref, customRef } from 'vue';
function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track(); // 告诉Vue这个数据需要追踪变化
        console.log('get', value);
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
  name: 'Demo14',
  setup() {
    // let age = ref(18); // reactive({value: 18});
    let age = myRef(18);
    function myFn() {
      age.value += 1;
    }
    return { age, myFn };
  },
};
</script>

<style lang="less" scoped></style>
