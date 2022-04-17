<template>
	<div>{{ dlh }} {{ msg }}</div>
	<button @click="changeMsg">change shallowRef</button>
</template>

<script setup lang="ts">
import { ref, shallowRef, triggerRef } from "vue"
name: "shallowRef"

const dlh = ref("蝶恋花")
const msg = shallowRef({
	foo: "好风凭借力",
	bar: "送我上青云",
})
// 注册函数
const changeMsg = () => {
	dlh.value = "春景"
	// ref触发triggerRefValue的依赖更新，造成shallowRef的视图更新
	msg.value.foo = "枝上柳绵吹又少"
	console.log("changeMsg", msg)
}
</script>

<style scoped lang="less"></style>
