<template>
	<div class="brother-a">
		<button @click="emitB">A派发给B</button>
	</div>
</template>

<script setup lang="ts">
import Bus from "../../bus"
// const emit = defineEmits(["on-click-tob"])
let flagA = false
const emitB = () => {
	flagA = !flagA
	// emit("on-click-tob", flagA)
	Bus.emit("on-click-tob", flagA)
}
</script>

<style lang="less" scoped>
.brother-a {
	width: 100px;
	height: 100px;
	color: #fff;
	background-color: #adc;
}
</style>
