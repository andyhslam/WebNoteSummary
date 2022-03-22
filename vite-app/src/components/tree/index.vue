<template>
	<div style="margin-left: 10px">
		<div
			v-for="(item, index) of treeData"
			:key="index"
			@click.stop="clickItem(item)"
		>
			{{ item.name }}
			<TreeItem
				v-if="item.children"
				:treeData="item.children"
				@click-tree="clickItem"
			></TreeItem>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TreeList } from "../../utils/contant"
// import TreeItem from "./index.vue" // 引用递归组件的第一种方式，但是代码有警告
type Props = {
	treeData?: TreeList[]
}
defineProps<Props>()
const emit = defineEmits(["click-tree"])
const clickItem = (item: TreeList) => {
	emit("click-tree", item)
}
</script>

<script lang="ts">
export default {
	name: "TreeItem", // 引用递归组件的第二种方式
}
</script>

<style lang="less" scoped></style>
