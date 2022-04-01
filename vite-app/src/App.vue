<template>
	<div>
		<router-link to="/" style="margin-right: 10px">Login</router-link>
		<router-link to="/register">Register</router-link>
	</div>
	<!-- 路由出口，路由匹配到的组件将渲染在这里 -->
	<router-view></router-view>
	<Layout> </Layout>
	<!-- <renderDom title="tsx标题" @tsx-click="getTsx"></renderDom> -->
</template>

<script setup lang="ts">
// import renderDom from "./App"
import Layout from "./layout/index.vue"

// const getTsx = (param: number) => {
// 	console.log("getTsx=", param)
// }
</script>

<style lang="less">
html,
body,
#app {
	height: 100%;
	overflow: hidden;
}
</style>
