<script>
// <Child title="hello" class="box"></Child>
// 这两个在父组件定义的特殊的选项式属性，默认会继承在子组件的根元素上；
// 可以再增加一个额外的script标签，通过inheritAttrs: false来阻断。
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { ref, useAttrs } from 'vue'
// 阻断以后，还可以通过调用useAttrs()来获取父组件传给子组件的所有属性。
const attrs = useAttrs()
console.log(attrs)
console.log(attrs.title)
console.log(attrs.class)
</script>

<template>
  <div id="child">child</div>
</template>

<style scoped lang="css">
.box {
  font-size: 50px;
}
</style>
