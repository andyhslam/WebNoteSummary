<template>
	<div>
		<p>{{ message1 }}</p>
		<p>{{ obj }}</p>
		<p>{{ message2.list }}</p>
		<p>
			<button @click="changeName1">1</button>
			<button @click="changeName2">2</button>
			<span>{{ person }}</span>
		</p>
	</div>
</template>

<script setup lang="ts">
import { reactive, shallowReactive } from "vue"
name: "Reactive全家桶"
let message1 = reactive<(number | string)[]>([]) // 接收数组、对象类型的数据

type Obj = {
	list: Array<number>
}
let message2 = reactive<Obj>({
	list: [2, 5, 8],
})

// 异步赋值需要注意的问题
setTimeout(() => {
	let list = [1, "2", 3, "4"]
	// message1 = list // 通过直接赋值的方式会破坏message的响应式
	message1.push(...list)
	console.log(message1)
}, 1000)
setTimeout(() => {
	message2.list = [3, 6, 9]
}, 1000)
let obj = reactive({ name: "cxl" })
obj.name = "cxq"

// 只能对浅层的数据起作用；如果是深层的数据只会改变值，不会改变视图
let person = shallowReactive({
	title: "顺流逆流",
	movie: {
		director: {
			name: "徐克",
		},
	},
})
const changeName1 = () => {
	person.title = "神雕侠侣"
}
const changeName2 = () => {
	person.movie.director.name = "伍佰"
	console.log(person)
}

// 这两个操作是在dom挂载之前，所以页面(包括深层与浅层的数据)能够被触发更新
// changeName1()
// changeName2()
// 反之，如果是在dom挂载之后，再去做这两个操作，深层的数据只会改变值，不会改变视图
</script>

<style></style>
