<template>
	<div class="route-jump">
		<!-- <router-link replace :to="{ name: 'Login' }">Login</router-link>
		<router-link replace to="/register" style="margin-left:10px">Register</router-link>
		<a href="/" style="margin-right: 10px">Login</a>
		<a href="/register">Register</a>
		<button @click="toPage('Login')" style="margin-right:10px">Login</button>
		<button @click="toPage('Register')">Register</button> -->
		<button @click="next" style="margin-right: 10px">next</button>
		<button @click="prev">prev</button>
		<button @click="logout" class="logout">登出</button>
	</div>
	<!-- 路由出口，路由匹配到的组件将渲染在这里 -->
	<!-- 通过插槽解构出的两个属性：route(当前路由信息)，Component(当前vNode) -->
	<router-view #default="{ route, Component }">
		<transition
			:enter-active-class="`animate__animated ${route.meta.transition}`"
		>
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import "animate.css"

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
// const logout = () => {
// 	router.removeRoute("Case3")
// 	router.push("/")
// }
const logout = async () => {
	const dynamicRoute = ["Case1", "Case2", "Case3"]
	dynamicRoute.forEach((v: any) => {
		router.removeRoute(v)
	})
	router.push("/")
	console.log("删除动态路由后，剩下的路由列表", router.getRoutes())
}
</script>

<style lang="less">
html,
body,
#app {
	height: 100%;
	overflow: hidden;
	.route-jump {
		.logout {
			position: absolute;
			right: 10px;
			top: 0;
			cursor: pointer;
		}
	}
}
</style>
