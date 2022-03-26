<template>
	<renderDom title="tsx标题" @tsx-click="getTsx"></renderDom>
	<Layout> </Layout>
</template>

<script setup lang="ts">
import renderDom from "./App"
import Layout from "./layout/index.vue"

const getTsx = (param: number) => {
	console.log("getTsx=", param)
}
</script>

<style lang="less">
html,
body,
#app {
	height: 100%;
	overflow: hidden;
}
</style>
