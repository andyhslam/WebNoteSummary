<template>
	<div class="register">
		<div>
			<button @click="router.back()">返回</button>
			<h3>商品详情</h3>
		</div>
		<ul>
			<li>ID：{{ shopItem?.id }}</li>
			<li>品牌：{{ shopItem?.name }}</li>
			<li>价格：{{ shopItem?.price }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { shopList } from "./list.json"

const route = useRoute()
const router = useRouter()

const shopItem = shopList.find((v) => v.id === Number(route.params.id))
</script>

<style lang="less" scoped>
.table {
	width: 200px;
}
</style>
