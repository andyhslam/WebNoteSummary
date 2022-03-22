<template>
	<div class="content">
		<!-- <div class="content-items" v-for="item in 100" :key="item">
			<Card :content="`我是第${item}个`"></Card>
		</div> -->
		<teleport to=".modal">
			<div class="loading">loading...</div>
		</teleport>
		<div class="tab">
			<div
				v-for="(item, index) in tabsData"
				:class="['tab-item', { active: index === currentIndex }]"
				:key="index"
				@click="switchCom(item, index)"
			>
				{{ item.name }}
			</div>
		</div>
		<component :is="currentComponent.comName"></component>
		<Dialog>
			<template v-slot:header>
				<div>国产凌凌漆</div>
			</template>
			<template #default="{ actor, index }">
				<div>{{ index }}--{{ actor.name }}--{{ actor.age }}</div>
			</template>
			<template #[slotName]>
				<div>逃学威龙</div>
			</template>
		</Dialog>
		<Suspense>
			<template #default>
				<Asynchronous></Asynchronous>
			</template>
			<template #fallback>
				<div>Loading...</div>
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
// import...from的形式只能在顶层作用域使用，不能参杂在js逻辑里面，不然会报错
// import()的形式可以参杂在js逻辑里面，并且返回promise，而defineAsyncComponent()又会接收promise
import { ref, reactive, markRaw, defineAsyncComponent } from "vue"
import TabA from "./TabA.vue"
import TabB from "./TabB.vue"
import TabC from "./TabC.vue"
import Dialog from "../../components/dialog/index.vue"
const Asynchronous = defineAsyncComponent(
	() => import("../../components/asynchronous/index.vue")
)

let slotName = ref("footer") // 动态插槽
type Tabs = {
	name: string
	comName: any
}
type Com = Pick<Tabs, "comName">
const tabsData = reactive<Tabs[]>([
	{
		name: "我是A组件",
		comName: markRaw(TabA),
		// markRaw给对象添加属性__v_skip:true，跳过proxy代理
	},
	{
		name: "我是B组件",
		comName: markRaw(TabB),
	},
	{
		name: "我是C组件",
		comName: markRaw(TabC),
	},
])
let currentIndex = ref<Number>(0)
let currentComponent = reactive<Com>({
	comName: tabsData[0].comName,
})
const switchCom = (item: Tabs, index: Number) => {
	currentIndex.value = index
	currentComponent.comName = item.comName
}
</script>

<style lang="less" scoped>
.loading {
	position: absolute;
	right: 10px;
	top: 10px;
	color: #000;
	background-color: #ff0;
}
.content {
	flex: 1;
	position: relative;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;
	&-items {
		padding: 20px;
		border: 1px solid #ccc;
	}
	.tab {
		display: flex;
		.active {
			background-color: skyblue;
			color: #fff;
		}
		.tab-item {
			margin-right: 8px;
			cursor: pointer;
		}
	}
}
</style>
