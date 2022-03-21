<template>
	<div class="layout">
		<Menu
			ref="menus"
			@on-click1="getList"
			@on-click2="getList"
			title="我是标题"
			:data="list"
		></Menu>
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
name: "Layout"
const list = reactive<number[]>([1, 2, 3])
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
