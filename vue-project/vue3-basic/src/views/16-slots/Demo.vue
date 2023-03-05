<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const str = ref('hello')
</script>

<!-- html的三个基本要素：标签名、属性和子元素 -->
<!-- 插槽既可以使用父组件作用域下的数据，又可以使用子组件传递过来的数据 -->
<!-- 作用域插槽：把子组件的数据，通过在slot上添加属性，传递给父组件；父组件通过#default="{ mark, mark2 }"来接收 -->
<template>
  <Child>
    <template v-slot:default="{ mark, mark2 }">
      <p>{{ str }} vue3 {{ mark }} {{ mark2 }}</p>
    </template>
    <template v-slot:line2>
      <p>{{ str }} slot</p>
    </template>
  </Child>
</template>

<style scoped lang="css"></style>
