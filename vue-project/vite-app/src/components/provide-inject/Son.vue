<template>
	<div class="son">
		<h2>我是儿子组件</h2>
		<button @click="changeFlag">change Flag</button>
		<span>{{ sonFlag }}</span>
	</div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from "vue"

let sonFlag = inject<Ref<boolean>>("grandfatherFlag", ref(false))
const changeFlag = () => {
	sonFlag.value = !sonFlag.value
}
</script>

<style lang="less" scoped>
.son {
	width: 100px;
	height: 100px;
	background-color: green;
	color: #fff;
}
</style>
