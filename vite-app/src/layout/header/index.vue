<template>
	<div class="header">
		<h3>头部区域</h3>
		<teleport to=".modal">
			<div class="continue">未完待续...</div>
		</teleport>
		<button @click="switchLoginRegister">切换登录/注册</button>
		<button @click="switchLoading" class="layer">切换遮罩层</button>
		<keep-alive :include="['Login', 'Register']">
			<Login v-if="loginFlag"></Login>
			<Register v-else></Register>
		</keep-alive>
		<Directive></Directive>
	</div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from "vue"
import Login from "../../components/login/index.vue"
import Register from "../../components/register/index.vue"
import Directive from "../../components/directive/index.vue"

const loginFlag = ref<boolean>(true)
const switchLoginRegister = () => {
	loginFlag.value = !loginFlag.value
}

const { appContext } = getCurrentInstance() as ComponentInternalInstance
const switchLoading = () => {
	appContext.config.globalProperties.$loading.show()
	setTimeout(() => {
		appContext.config.globalProperties.$loading.hide()
	}, 500)
}
</script>

<style lang="less" scoped>
.header {
	position: relative;
	height: 100px;
	padding: 6px;
	border-bottom: 1px solid #ccc;
	button {
		cursor: pointer;
		&.layer {
			margin-left: 6px;
		}
	}
}
.continue {
	position: absolute;
	right: 10px;
	bottom: 10px;
	padding: 6px;
	color: #000;
	background-color: #ff0;
}
</style>
