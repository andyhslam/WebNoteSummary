<template>
	<div class="menu">
		<h2>{{ title }}</h2>
		<span>菜单区域</span>
		<p>{{ data }}</p>
		<div>
			<button @click="clickTap1">派发1</button>
			<button @click="clickTap2">派发2</button>
		</div>
		<Tree :treeData="treeData" @click-tree="getItem"></Tree>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import Tree from "../../components/tree/index.vue"
import { TreeList } from "../../utils/contant"
const list = reactive<number[]>([3, 6, 9])
const flag = ref(false)

// 非TS的默认值方式
// defineProps({
// 	title: {
// 		default: "",
// 		type: String,
// 	},
// 	data: Array,
// })

// TS 特有的默认值方式
type Props = {
	title?: string
	data?: number[]
}

const treeData = reactive<TreeList[]>([
	{
		name: "No1",
		children: [
			{
				name: "No1-1",
				children: [
					{
						name: "No1-1-1",
					},
				],
			},
		],
	},
	{
		name: "No2",
		children: [
			{
				name: "No2-1",
			},
		],
	},
	{
		name: "No3",
	},
	{
		name: "No4",
		children: [],
	},
])

withDefaults(defineProps<Props>(), {
	title: "默认值",
	data: () => [5, 6, 7], // 复杂数据类型要采用这种方式
})

// 通过defineExpose，子组件暴露给父组件内部属性
defineExpose({ list, flag })

/** 子组件给父组件传参：通过defineEmits派发一个事件
 * 1. 在子组件绑定click事件，然后通过defineEmits注册自定义事件
 * 2. 点击click，触发emit，调用注册的事件，然后传递参数
 */
const emit = defineEmits(["on-click1", "on-click2"])
const clickTap1 = () => {
	emit("on-click1", list, true)
}
const clickTap2 = () => {
	emit("on-click2", list, false)
}
const getItem = (item: TreeList) => {
	console.log("父组件的item", item)
}
</script>

<style lang="less" scoped>
.menu {
	width: 200px;
	border: 1px solid #ccc;
}
</style>
