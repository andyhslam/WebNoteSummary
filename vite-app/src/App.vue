<template>
	<div>
		<input type="text" v-model="message1" />
		<input type="text" v-model="message2" />
		<input type="text" v-model="message3.nav.bar.name" />
		<input type="text" v-model="message4.nav.bar.name" />
		<input type="text" v-model="message5.name1" />
		<input type="text" v-model="message5.name2" />
	</div>
</template>

<script setup lang="ts">
import { watch, ref, reactive } from "vue"
name: "watch侦听器"
const message1 = ref<string>("")
const message2 = ref<string>("")
const message3 = ref({
	nav: {
		bar: {
			name: "天龙八部",
		},
	},
})
const message4 = reactive({
	nav: {
		bar: {
			name: "神雕侠侣",
		},
	},
})
const message5 = reactive({
	name1: "金庸",
	name2: "查良镛",
})
watch([message1, message2], (newVal, oldVal) => {
	console.log("新值", newVal)
	console.log("旧值", oldVal)
})
// 注意：目前侦听对象(包括深、浅层次)，新值与旧值是同样的值，属于vue的bug，还没修复
watch(
	message3,
	(newVal, oldVal) => {
		console.log("新值", newVal)
		console.log("旧值", oldVal)
	},
	{
		deep: true,
		// immediate: true, // 初始化就立即调用一次
	}
)
// 采用reactive，不加deep:true 也可以执行深度侦听
watch(message4, (newVal, oldVal) => {
	console.log("新值", newVal)
	console.log("旧值", oldVal)
})
watch(
	() => message5.name1, // 除了可以侦听整个对象，还可以侦听该对象的其中一个属性
	(newVal, oldVal) => {
		console.log("新值", newVal)
		console.log("旧值", oldVal)
	}
)
</script>

<style></style>
