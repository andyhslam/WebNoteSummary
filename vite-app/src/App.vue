<template>
	<div class="change-router">
		<!-- <router-link :to="{ name: 'Login' }" style="margin-right: 10px"
			>Login</router-link
		>
		<router-link to="/register">Register</router-link>
		<a href="/" style="margin-right: 10px">Login</a>
		<a href="/register">Register</a> -->
		<!-- <button @click="toPage('/')" style="margin-right: 10px">Login</button>
		<button @click="toPage('/register')">Register</button> -->
		<button @click="toPage('Login')" style="margin-right: 10px">
			Login
		</button>
		<button @click="toPage('Register')">Register</button>
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
