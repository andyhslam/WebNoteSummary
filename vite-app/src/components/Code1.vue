<template>
	<div id="demo">
		<h1>我是code组件</h1>
		<slot name="header"></slot>
		<p>{{ count }}</p>
		<button @click="count++">增加</button>
	</div>
</template>
<script setup lang="ts">
import {
	ref,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from "vue"
name: "认识组件&Vue3生命周期"
console.log("setup")
const count = ref(0)
onBeforeMount(() => {
	let helloDiv = document.querySelector("#demo")
	console.log("创建之前==> onBeforeMount", helloDiv)
})
onMounted(() => {
	let helloDiv = document.querySelector("#demo")
	console.log("创建完成==> onMounted", helloDiv)
})
onBeforeUpdate(() => {
	console.log("更新之前==> onBeforeUpdate")
})
onUpdated(() => {
	console.log("更新完毕==> onUpdated")
})
onBeforeUnmount(() => {
	console.log("卸载之前==> onBeforeUnmount")
})
onUnmounted(() => {
	console.log("卸载完成==> onUnmounted")
})
</script>

<style scoped>
#demo {
	border: 1px solid #ccc;
}
</style>
