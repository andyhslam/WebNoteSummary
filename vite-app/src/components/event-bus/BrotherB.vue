<template>
	<div class="brother-b">
		<h3>BrotherB组件</h3>
		{{ flagB }}
	</div>
</template>

<script setup lang="ts">
// import Bus from "../../bus"
import { ref, getCurrentInstance } from "vue"

let flagB = ref(false)
const instance = getCurrentInstance()

const Ebs = (str: any) => {
	console.log("A=>B", str)
}

instance?.proxy?.$Bus.on("on-click-tob", Ebs)

// off(取消指定的mitt事件，取消的函数)
// instance?.proxy?.$Bus.off("on-click-tob", Ebs)

// all.clear()取消所有的mitt事件
// instance?.proxy?.$Bus.all.clear()

// instance?.proxy?.$Bus.on("*", (type, str) => {
// 	// *代表监听所有的事件触发；type代表事件名称；str代表传过来的内容
// 	console.log("A=>B", type, str)
// })

// Bus.on("on-click-tob", (param: boolean) => {
// 	flagB.value = param
// })

// type Props = {
// 	flagB: boolean
// }
// defineProps<Props>()
</script>

<style lang="less" scoped>
.brother-b {
	width: 100px;
	height: 100px;
	color: #fff;
	background-color: yellowgreen;
}
</style>
