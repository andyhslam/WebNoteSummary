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
import { ref, toRaw } from 'vue';
export default {
  name: 'Demo10',
  setup() {
    let obj = { name: 'lwj', age: 18 };
    /**
    ref本质：reactive
    ref(obj) -> reactive({value: obj})
    */
    let state = ref(obj);
    /**
    注意点：如果想通过toRaw方法拿到ref类型的原始数据(创建时传入的那个数据),
    那么就必须明确告诉toRaw方法，要获取的是.value的值，
    因为经过Vue处理之后，.value中保存的才是当初创建时传入的那个原始数据
    */
    // let obj2 = toRaw(state);
    let obj2 = toRaw(state.value);

    console.log(obj);
    console.log(state);
    console.log(obj2);

    function myFn() {}
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
