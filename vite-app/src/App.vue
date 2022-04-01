<template>
	<div class="route-jump">
		<!-- <router-link replace :to="{ name: 'Login' }" style="margin-right: 10px"
			>Login</router-link
		>
		<router-link replace to="/register">Register</router-link> -->
		<!-- <a href="/" style="margin-right: 10px">Login</a>
		<a href="/register">Register</a> -->
		<button @click="toPage('Login')" style="margin-right: 10px">
			Login
		</button>
		<button @click="toPage('Register')">Register</button>
		<button @click="next" style="margin-right: 10px">next</button>
		<button @click="prev">prev</button>
	</div>
	<!-- 路由出口，路由匹配到的组件将渲染在这里 -->
	<router-view></router-view>
	<Layout> </Layout>
	<!-- <renderDom title="tsx标题" @tsx-click="getTsx"></renderDom> -->
</template>

<script setup lang="ts">
// import renderDom from "./App"
import Layout from "./layout/index.vue"
import { useRouter } from "vue-router"

// const getTsx = (param: number) => {
// 	console.log("getTsx=", param)
// }

const router = useRouter()
const toPage = (url: string) => {
	// router.push(url) // 1.字符串模式
	// router.push({ path: url }) // 2.对象模式
	router.push({ name: url }) // 3.命名式路由模式
	// router.replace({ name: url })
}
const next = () => {
	router.go(1)
}
const prev = () => {
	// router.go(-1)
	router.back()
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
