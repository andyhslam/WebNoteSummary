<template>
	<div class="user-view">
		<h2>用户信息</h2>
		<button @click="asc">升序</button>
		<button @click="desc">降序</button>
		<button @click="reset">重置</button>
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
		// 代理
		this.proxy = new Proxy(
			{},
			{
				get(target, key) {
					if (key === "asc") {
						// 升序
						return []
							.concat(data)
							.sort((a, b) => (a.name > b.name ? 1 : -1))
					} else if (key === "desc") {
						// 降序
						return []
							.concat(data)
							.sort((a, b) => (a.name < b.name ? 1 : -1))
					} else {
						// 重置
						console.log(data)
						return data
					}
				},
				set() {
					// 不允许设置
					return false
				},
			}
		)
		this.userList = this.proxy.default
	},
	methods: {
		asc() {
			this.userList = this.proxy.asc
		},
		desc() {
			this.userList = this.proxy.desc
		},
		reset() {
			this.userList = this.proxy.default
		},
	},
}
</script>

<style scoped>
ul {
	padding: 0;
}
li {
	list-style: none;
}
</style>
