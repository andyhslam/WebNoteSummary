<template>
	<div>
		<input id="ipt" type="text" v-model="message1" />
		<input type="text" v-model="message2" />
		<button @click="stopWatch">停止侦听</button>
	</div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from "vue"
name: "watchEffect高级侦听器"
/**
 * 1.立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
 * 2.如果用到message，就只会监听message；用到几个监听几个，而且是非惰性，进入页面会默认调用一次
 */
const message1 = ref<string>("飞机")
const message2 = ref<string>("大炮")
// 停止跟踪：watchEffect返回一个函数，调用之后将停止更新
const stop = watchEffect(
	(oninvalidate) => {
		const ipt: HTMLInputElement = document.querySelector(
			"#ipt"
		) as HTMLInputElement
		console.log("message1=>", message1.value)
		console.log("message2=>", message2.value)
		console.log("ipt=>", ipt)
		oninvalidate(() => {
			// 清除副作用：在触发监听之前会调用一个函数可以处理你的逻辑，例如防抖、清除接口
			console.log("before")
		})
	},
	{
		flush: "post",
		/** 副作用刷新时机flush，一般使用post
		 * 1.pre：组件更新前执行
		 * 2.sync：强制效果始终同步触发
		 * 3.post：组件更新后执行
		 */
		onTrigger(e) {
			// onTrigger：可以帮助我们调试watchEffect
		},
	}
)
const stopWatch = () => stop()
</script>

<style></style>
