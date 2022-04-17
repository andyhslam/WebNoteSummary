<template>
	<div class="brother-a">
		<button @click="emitB">A派发给B</button>
	</div>
</template>

<script setup lang="ts">
// import Bus from "../../bus" // 方式二
import { getCurrentInstance } from "vue"

const instance = getCurrentInstance() // 方式三
// const emit = defineEmits(["on-click-tob"]) // 方式一
let flagA = false
const emitB = () => {
	// flagA = !flagA
	// emit("on-click-tob", flagA)
	// Bus.emit("on-click-tob", flagA)
	instance?.proxy?.$Bus.emit("on-click-tob", "lyy")
	instance?.proxy?.$Bus.emit("on-click-tob2", "lyy2")
}
</script>

<style lang="less" scoped>
.brother-a {
	width: 100px;
	height: 100px;
	color: #fff;
	background-color: skyblue;
}
</style>
