<template>
	<div>
		<div v-for="item of dataList">{{ item.name }}</div>
	</div>
</template>

<script setup lang="ts">
// 异步组件的作用：当需要使用或者等浏览器闲暇的时候，才调用异步组件，这样子就会节省内存，节省白屏时间。
import { axios } from "./server"
const dataList = await axios("./data.json")
console.log(dataList)
</script>

<style lang="less" scoped></style>
