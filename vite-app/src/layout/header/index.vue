<template>
	<div class="header">
		<div class="pinia-management">
			<span>头部区域：{{ Test.user }}--{{ Base.baseCurrent }}</span>
			<button @click="changeTest">change test</button>
			<button @click="changeBase">change base</button>
			<!-- <button @click="changePinia">change pinia</button>
			<button @click="resetPinia">reset pinia</button> -->
			<!-- <span>getters:{{ Test.newBoy }}</span>
			<span>直接解构：{{ current }}--{{ name }}</span> -->
		</div>
		<teleport to=".modal">
			<div class="continue">未完待续...</div>
		</teleport>
		<button @click="switchLoading">切换遮罩层</button>
		<button @click="switchLoginRegister" class="layer">登录/注册</button>
		<keep-alive :include="['Login', 'Register']">
			<Login v-if="loginFlag"></Login>
			<Register v-else></Register>
		</keep-alive>
		<div class="case">
			<router-link to="/case1">case1</router-link>
			<router-link to="/case2">case2</router-link>
			<router-link to="/case3">case3</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from "vue"
import Login from "../../components/login/index.vue"
import Register from "../../components/register/index.vue"
import { useTestStore, useBaseStore } from "../../store"
import { storeToRefs } from "pinia"

const Test = useTestStore()
const Base = useBaseStore()
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
	// Test.current++
	// current.value++
	// Test.setUser()
	Test.setName("王熙凤")
	// console.log(current.value, name.value)
}
const changeTest = () => {
	Test.setUser("杜甫草堂")
}
const changeBase = () => {
	Base.baseCurrent++
}
const resetPinia = () => {
	// $reset()：把state所有值重置回原始状态
	Test.$reset()
}

// 订阅state的改变：类似于Vuex的abscribe，只要有state的变化就会走这个函数
Test.$subscribe(
	(args, state) => {
		// console.log("subscribe-args", args)
		// console.log("subscribe-state", state)
	},
	// 第一个参数是工厂函数，第二个参数是配置项；detached: true，表示组件卸载之后还能继续调用
	{ detached: true, deep: true, flush: "post" }
)

// 订阅Actions的调用：只要有actions被调用就会走这个函数
Test.$onAction((args) => {
	args.after(() => {
		// console.log("onAction-after")
	})
	// 先执行onAction-args，再执行onAction-after
	// console.log("onAction-args", args)
}, true)

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
	.case {
		position: absolute;
		right: 10px;
		top: 10px;
		a {
			margin-right: 10px;
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
