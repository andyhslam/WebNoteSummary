<template>
	<div class="tab-c">
		<img id="tabC" width="120" height="100" src="../../assets/tabC.jpeg" />
		<el-badge :value="100">
			<el-button>忍野惠</el-button>
		</el-badge>
	</div>
</template>

<script setup lang="ts">
import useBase64 from "./hooks"

useBase64({ el: "#tabC" }).then((res) => {
	// console.log("tabC-baseUrl", res.baseUrl)
})
</script>

<style scoped lang="less">
.tab-c {
	background-color: rgb(0, 255, 221);
	height: 100px;
	border: 1px solid #ccc;
	.el-badge {
		:deep(span) {
			color: #9acd32;
		}
	}
}
</style>
