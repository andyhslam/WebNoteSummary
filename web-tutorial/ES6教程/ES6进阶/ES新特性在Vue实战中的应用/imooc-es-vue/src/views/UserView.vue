<template>
	<div class="user-view">
		<h2>用户信息</h2>
		<ul>
			<li v-for="item of userList" :key="item.id">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "UserView",
	components: {},
	data() {
		return {
			userList: [],
		}
	},
	async created() {
		const { data } = await axios.get(
			"http://jsonplaceholder.typicode.com/users"
		)
		this.userList = data
	},
}
</script>

<style>
li {
	list-style: none;
}
</style>
