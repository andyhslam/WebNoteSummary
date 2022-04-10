<template>
	<div class="box" :style="{ background: `url(${bg})` }">
		<div class="box-left"></div>
		<div class="box-center"></div>
		<div class="box-right"></div>
	</div>
</template>

<script setup lang="ts">
import { useStore } from "./stores"
import bg from "./assets/世界双铲.jpeg"

const store = useStore()
store.getList()
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
}
html,
body,
#app {
	height: 100%;
	overflow: hidden;
	.box {
		display: flex;
		height: 100%;
		overflow: hidden;
		&-left {
			width: 400px;
		}
		&-center {
			flex: 1;
		}
		&-right {
			width: 400px;
		}
	}
}
</style>
