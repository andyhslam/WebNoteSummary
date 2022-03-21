<template>
	<div class="layout">
		<Menu></Menu>
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
name: "Layout"
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
