<template>
	<div>
		<table border style="width: 800px">
			<thead>
				<tr>
					<th>名称</th>
					<th>数量</th>
					<th>单价</th>
					<th>价格</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) of dataList" :key="index">
					<td align="center">{{ item.name }}</td>
					<td align="center">
						<button @click="addAndSub(item, false)">-</button>
						{{ item.num }}
						<button @click="addAndSub(item, true)">+</button>
					</td>
					<td align="center">{{ item.price }}</td>
					<td align="center">{{ item.num * item.price }}</td>
					<td align="center">
						<button @click="delShop(index)">删除</button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<td align="center">合计</td>
				<td align="center">{{ $totalNum }}</td>
				<td></td>
				<td align="center">{{ $totalPrice }}</td>
				<td></td>
			</tfoot>
		</table>
	</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue"
name: "computed计算属性"
type Shop = {
	name: string
	num: number
	price: number
}
let $totalNum = ref(0)
let $totalPrice = ref(0)
const dataList = reactive<Shop[]>([
	{
		name: "裤子",
		num: 3,
		price: 100,
	},
	{
		name: "帽子",
		num: 10,
		price: 50,
	},
	{
		name: "袜子",
		num: 30,
		price: 20,
	},
])
const addAndSub = (item: Shop, type: boolean): void => {
	if (item.num > 1 && !type) {
		item.num--
	}
	if (item.num < 99 && type) {
		item.num++
	}
}
const delShop = (index: number) => {
	dataList.splice(index, 1)
}
$totalNum = computed(() => {
	return dataList.reduce((prev, next) => {
		return prev + next.num
	}, 0)
})
$totalPrice = computed<number>(() => {
	return dataList.reduce((prev, next) => {
		return prev + next.num * next.price
	}, 0)
})
</script>

<style></style>
