<template>
  <div ref="box">我是div</div>
</template>

<script>
/**
1.获取元素
- 在Vue2.x中我们可以通过给元素添加ref='xxx'，
- 然后在代码中通过refs.xxx的方式来获取元素
2.在Vue3.x中我们也可以通过ref来获取元素，在template的写法不变
- 具体流程：
1) 在setup里面，先创建一个响应式数据，然后暴露出去；
2) 当元素被创建出来，然后给响应式数据赋值；
3) 在生命周期方法里面，可以获取到该元素。
*/
import { ref, onMounted } from 'vue';
export default {
  name: 'Demo16',
  // setup函数在beforeCreate之前执行，所以最早要获得组件的元素是要在mounted()获得
  setup() {
    let box = ref(null); // reactive({value: null});
    onMounted(() => {
      console.log('onMounted', box.value);
    });
    console.log(box.value); // null
    return { box };
  },
};
</script>

<style lang="less" scoped></style>
