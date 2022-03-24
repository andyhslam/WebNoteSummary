<template>
	<div class="father">
		<h2>我是父亲组件</h2>
		<button @click="changeFlag">change Flag</button>
		<span>{{ fatherFlag }}</span>
		<Son></Son>
	</div>
</template>

<script setup lang="ts">
import Son from "./Son.vue"
import { inject, Ref, ref } from "vue"

let fatherFlag = inject<Ref<boolean>>("grandfatherFlag", ref(false))
const changeFlag = () => {
	fatherFlag.value = true
}
</script>

<style lang="less" scoped>
.father {
	width: 150px;
	height: 150px;
	background-color: blue;
	color: #fff;
}
</style>
