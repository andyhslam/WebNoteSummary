<template>
	<div class="header">
		<div>
			<span>头部区域：{{ Test.current }}--{{ Test.name }}</span>
			<button @click="changePinia">change pinia</button>
			<span>直接解构：{{ current }}--{{ name }}</span>
		</div>
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
import { useTestStore } from "../../store"
import { storeToRefs } from "pinia"

const Test = useTestStore()
// 在Pinia是不允许直接解构，是会失去响应性的；可以使用storeToRefs
const { current, name } = storeToRefs(Test)

/** 修改State的五种方式
 * 1.直接修改值：Test.current++
 * 2.实例上有$patch方法可以批量修改多个值：Test.$patch({current: 666,name: "lx",})
 * 3.批量修改函数形式：Test.$patch((state) => {state.current = 888;state.name = "khp"})
 * 4.通过原始对象修改整个实例，缺点是必须修改整个对象的所有属性：Test.$state = {current:999, name:"lxx"}
 * 5.通过actions修改，直接在实例调用：Test.setCurrent(5566)
 */

const changePinia = () => {
	Test.current++
	// current.value++
	console.log(current.value, name.value)
}

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
