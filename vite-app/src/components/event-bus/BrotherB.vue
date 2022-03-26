<template>
	<div class="brother-b">
		<h3>BrotherB组件</h3>
		{{ flagB }}
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Bus from "../../bus"

let flagB = ref(false)
Bus.on("on-click-tob", (param: boolean) => {
	flagB.value = param
})

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
	background-color: #edc;
}
</style>
