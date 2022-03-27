<template>
	<div class="tab-b">
		<img id="tabB" width="110" height="100" src="../../assets/tabB.png" />
		<span>{{ $env }}</span>
	</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ComponentInternalInstance } from "vue"
import useBase64 from "./hooks"

// 在setup里面读取值
const { appContext } = <ComponentInternalInstance>getCurrentInstance()
const envGlobal = appContext.config.globalProperties.$env
console.log("envGlobal===", envGlobal)

useBase64({ el: "#tabB" }).then((res) => {
	// console.log("tabB-baseUrl", res.baseUrl)
})
</script>

<style lang="less" scoped>
.tab-b {
	background-color: rgb(76, 0, 255);
	height: 100px;
	border: 1px solid #ccc;
}
</style>
