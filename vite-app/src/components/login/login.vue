<template>
	<div class="login">
		<h3>商品列表</h3>
		<table class="table" cellspacing="0" border="1">
			<thead>
				<tr>
					<th>品牌</th>
					<th>价格</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in shopList" :key="item.id">
					<th>{{ item.name }}</th>
					<th>{{ item.price }}</th>
					<th><button @click="toDetail(item)">详情</button></th>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { shopList } from "./list.json"

const router = useRouter()

type Item = {
	id: number
	name: string
	price: number
}

const toDetail = (item: Item) => {
	// router.push({
	// 	path: "/register",
	// 	query: item,
	// })
	router.push({
		name: "Register",
		// params传递的参数不会显示在地址栏中，而是存在于内存当中；页面刷新，传递过来的值会丢失。
		params: {
			id: item.id,
		},
	})
}
</script>

<style lang="less" scoped>
.table {
	width: 200px;
}
</style>
