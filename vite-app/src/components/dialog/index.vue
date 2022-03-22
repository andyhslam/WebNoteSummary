<template>
	<div class="dialog">
		<header class="header">
			<slot name="header"></slot>
		</header>
		<main class="main">
			<div v-for="(item, index) of actorList" :key="item.id">
				<slot :index="index" :actor="item"></slot>
			</div>
		</main>
		<footer class="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
type Person = {
	id: number
	age: number
	name: string
}
const actorList = reactive<Person[]>([
	{
		id: 1,
		age: 60,
		name: "Stephen Chow",
	},
	{
		id: 2,
		age: 61,
		name: "Andy Lau",
	},
	{
		id: 3,
		age: 60,
		name: "Tony Leung",
	},
	{
		id: 4,
		age: 61,
		name: "Jacky Cheung",
	},
])
</script>

<style lang="less" scoped>
.dialog {
	.header {
		height: 200px;
		background-color: red;
		color: #fff;
	}
	.main {
		height: 300px;
		background-color: green;
		color: #fff;
	}
	.footer {
		height: 200px;
		background-color: blue;
		color: #fff;
	}
}
</style>
