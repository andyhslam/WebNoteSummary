<template>
	<div class="layout">
		<Menu
			ref="menus"
			@on-click1="getList"
			@on-click2="getList"
			title="菜单区域"
			:menu-arr="list"
		>
			<p>父组件通过ref获取子组件实例</p>
			<p>传递字符串类型不需要v-bind</p>
			<p>传递非字符串类型需要加v-bind，简写 冒号</p>
		</Menu>
		<div class="layout-right">
			<Header></Header>
			<Content></Content>
		</div>
	</div>
</template>

<script setup lang="ts">
import Menu from "./menu/index.vue"
import Header from "./header/index.vue"
import Content from "./content/index.vue"
import { reactive, ref } from "vue"
const list = reactive<number[]>([1, 2, 3])
// 父组件通过ref获取子组件实例
const menus = ref(null)
const getList = (list: number[], flag: boolean) => {
	console.log(list, "子组件传过来的参数", flag)
	console.log(menus.value)
}
</script>

<style lang="less" scoped>
.layout {
	display: flex;
	height: 100%;
	overflow: hidden;
	&-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>
