<template>
	<div>
		<button @click="change1">按钮1</button>
		<span>{{ state1 }}</span>
		<br />
		<button @click="change2">按钮2</button>
		<span>foo2---{{ foo2 }}</span>
		<span>bar2---{{ bar2 }}</span>
	</div>
</template>

<script setup lang="ts">
import { reactive, toRef, toRefs, toRaw } from "vue"
name: "to系列全家桶"

// 如果原始对象是非响应式的，就不会更新视图，但是数据会变
// const nav1 = {
// 	foo1: 1,
// 	bar1: 1,
// }

// 如果原始对象是响应式的，会更新视图，并且改变数据
const nav1 = reactive({
	foo1: 1,
	bar1: 1,
})
const state1 = toRef(nav1, "bar1")
const change1 = () => {
	state1.value++
	console.log("原始对象", nav1)
	console.log("引用对象", state1)
}

const nav2 = reactive({
	foo2: 2,
	bar2: 2,
})
const { foo2, bar2 } = toRefs(nav2) // 可以批量创建ref对象，主要是方便我们解构使用
console.log(foo2, bar2)
const change2 = () => {
	foo2.value++
	bar2.value++
}

const nav3 = reactive({
	foo3: 3,
	bar3: 3,
})
const state3 = toRaw(nav3) // 将响应式对象转化为普通对象
console.log("响应式对象", nav3)
console.log("普通对象", state3)
</script>

<style></style>
