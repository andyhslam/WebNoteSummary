<template>
  <div>
    <p>{{ age }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.ref和reactive的区别：
  - 如果在template里面使用的是ref类型的数据，那么Vue会自动添加.value
  - 如果在template里面使用的是reactive类型的数据，那么Vue不会自动添加.value
2.Vue如何判断是否需要自动添加.value
  - Vue在解析数据之前，会判断该数据是不是ref类型，如果是就自动添加.value,如果不是就不添加
3.Vue如何判断当前数据是否是ref类型
  - 通过当前数据的__v_isRef私有属性来判断的
  - 如果有这个私有属性，并且取值为true，那么就代表是一个ref类型的数据
4.我们可以在JS当中通过isRef和isReactive这两个方法来判断当前数据是ref类型还是reactive类型。
*/
import { isRef, isReactive } from 'vue';
import { reactive } from 'vue';
// import {ref} from 'vue';
export default {
  name: 'Demo6',
  setup() {
    // ref(18) -> reactive({value: 18})
    // let age = ref(18);
    let age = reactive({ value: 18 });
    function myFn() {
      age.value = 666;
      console.log(isRef(age));
      console.log(isReactive(age));
    }
    return { age, myFn };
  },
};
</script>

<style lang="less" scoped></style>
