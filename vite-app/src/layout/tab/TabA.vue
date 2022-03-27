<template>
	<div class="tab-a">
		<img id="tabA" width="100" height="100" src="../../assets/tabA.png" />
	</div>
</template>

<script setup lang="ts">
import useBase64 from "./hooks"

useBase64({ el: "#tabA" }).then((res) => {
	console.log("tabA-baseUrl", res.baseUrl)
})
</script>

<style lang="less" scoped>
.tab-a {
	background-color: #f40;
	height: 100px;
	border: 1px solid #ccc;
}
</style>
