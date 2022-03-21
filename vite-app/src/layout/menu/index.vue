<template>
	<div class="menu">
		<h2>{{ title }}</h2>
		<span>菜单区域</span>
		<p>{{ data }}</p>
		<div>
			<button @click="clickTap1">派发1</button>
			<button @click="clickTap2">派发2</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
const list = reactive<number[]>([3, 6, 9])
const flag = ref(false)
type Props = {
	title?: string
	data?: number[]
}
withDefaults(defineProps<Props>(), {
	title: "默认值",
	data: () => [5, 6, 7], // 复杂数据类型要用这种方式来写
})

defineExpose({ list, flag })
const emit = defineEmits(["on-click1", "on-click2"])
const clickTap1 = () => {
	emit("on-click1", list, true)
}
const clickTap2 = () => {
	emit("on-click2", list, false)
}
</script>

<style lang="less" scoped>
.menu {
	width: 200px;
	border: 1px solid #ccc;
}
</style>
