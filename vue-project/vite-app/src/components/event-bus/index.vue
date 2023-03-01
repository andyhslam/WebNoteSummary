<template>
	<div class="brother">
		<BrotherA></BrotherA>
		<BrotherB></BrotherB>
		<!-- <BrotherA @on-click-tob="getFlag"></BrotherA>
		<BrotherB :flagB="Flag"></BrotherB> -->
	</div>
</template>

<script setup lang="ts">
// import { ref } from "vue"
import BrotherA from "./BrotherA.vue"
import BrotherB from "./BrotherB.vue"

// let Flag = ref(false)
// const getFlag = (param: boolean) => {
// 	Flag.value = param
// }
</script>

<style lang="less" scoped></style>
