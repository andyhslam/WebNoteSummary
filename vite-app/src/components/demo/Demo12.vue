<template>
  <div>
    <p>{{ state }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
1.ref和toRef的区别：
  ref->复制，修改响应式数据不会影响以前的数据
  toRef->引用，修改响应式数据会影响以前的数据
  ref->数据发生改变，界面会自动更新
  toRef->数据发生改变，界面不会自动更新
2.toRef的应用场景：
  - 如果想让响应式数据和以前的数据关联起来，并且更新响应式数据之后还不想更新UI界面，那么就可以使用toRef
*/
import { ref, toRef } from 'vue';
export default {
  name: 'Demo12',
  setup() {
    let obj = { name: 'lwj' };
    /**
    ref(obj.name) -> ref('lwj') -> reactive({value: 'lwj'})
    ref -> 复制对象的属性值，不会影响该对象
    */
    // let state = ref(obj.name);
    let state = toRef(obj, 'name');
    function myFn() {
      state.value = 'lx';
      /**
      结论：如果利用ref将某一个对象中的属性变成响应式数据
           我们修改该响应式数据是不会影响到原始数据的。
      */
      /**
      结论：如果利用toRef将某一个对象中的属性变成响应式数据
           我们修改该响应式数据是会影响到原始数据的，但是不会触发UI界面的更新。
      */
      console.log(obj);
      console.log(state);
    }
    return { state, myFn };
  },
};
</script>

<style lang="less" scoped></style>
