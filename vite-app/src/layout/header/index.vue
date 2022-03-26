<template>
	<div class="header">
		<h3>头部区域</h3>
		<teleport to=".modal">
			<div class="loading">loading...</div>
		</teleport>
		<button @click="switchLoginRegister">账号切换</button>
		<keep-alive :include="['Login', 'Register']">
			<Login v-if="flag"></Login>
			<Register v-else></Register>
		</keep-alive>
		<Directive></Directive>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Login from "../../components/login/index.vue"
import Register from "../../components/register/index.vue"
import Directive from "../../components/directive/index.vue"

const flag = ref<boolean>(true)
const switchLoginRegister = () => {
	flag.value = !flag.value
}
</script>

<style lang="less" scoped>
.header {
	position: relative;
	height: 80px;
	border-bottom: 1px solid #ccc;
}
.loading {
	position: absolute;
	right: 10px;
	bottom: 10px;
	color: #000;
	background-color: #ff0;
}
</style>
