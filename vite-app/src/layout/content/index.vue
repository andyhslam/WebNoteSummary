<template>
	<div class="content">
		<!-- <div class="content-item" v-for="item in 100" :key="item">
			<Card :content="`我是第${item}个`"></Card>
		</div> -->
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
		<div class="tab">
			<div
				v-for="(item, index) in tabsData"
				:class="['tab-item', { active: index === currentIndex }]"
				:key="index"
				@click="switchTab(item, index)"
			>
				{{ item.name }}
			</div>
		</div>
		<transition
			name="fade"
			:duration="{ enter: 1000, leave: 2000 }"
			@before-enter="enterFrom"
			@enter="enterActive"
			@after-enter="enterTo"
			@enter-cancelled="enterCancel"
			@before-leave="leaveFrom"
			@leave="leaveActive"
			@after-leave="leaveTo"
			@leave-cancelled="leaveCancel"
			appear
			appear-from-class="appear-from"
			appear-active-class="animate__animated animate__bounceOut"
			appear-to-class="appear-to"
			enter-active-class="animate__animated animate__bounce"
			leave-active-class="animate__animated animate__flash"
		>
			<component :is="currentComponent.comName"></component>
		</transition>
		<div class="wraps-btn">
			<button @click="addNum">Add</button>
			<button @click="popNum">Pop</button>
		</div>
		<div class="wraps">
			<transition-group
				enter-active-class="animate__animated animate__rotateIn"
				leave-active-class="animate__animated animate__rotateOut"
			>
				<div
					class="wraps-item"
					v-for="item of transitionList"
					:key="item"
				>
					{{ item }}
				</div>
			</transition-group>
		</div>
		<div class="shuffle">
			<button @click="randomNum">Random</button>
			<transition-group tag="ul" class="container" move-class="vessel">
				<div
					v-for="item in tranList"
					:key="item.id"
					class="container-item"
				>
					{{ item.number }}
				</div>
			</transition-group>
		</div>
		<div class="pack">
			<input type="number" step="20" v-model="numObj.current" />
			<p>{{ numObj.tweenedNumber.toFixed(0) }}</p>
		</div>
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
import { ref, reactive, markRaw, watch, defineAsyncComponent } from "vue"
import Dialog from "../../components/dialog/index.vue"
import TabA from "../tab/TabA.vue"
import TabB from "../tab/TabB.vue"
import TabC from "../tab/TabC.vue"
import "animate.css"
import gsap from "gsap"
import _ from "lodash"
const Asynchronous = defineAsyncComponent(
	() => import("../../components/asynchronous/index.vue")
)
const transitionList = reactive<number[]>([1, 2, 3, 4, 5, 6])
const addNum = () => {
	transitionList.push(transitionList.length + 1)
}
const popNum = () => {
	transitionList.pop()
}
let tranList = ref(
	Array.apply(null, { length: 81 } as number[]).map((_, index) => {
		return {
			id: index,
			number: (index % 9) + 1,
		}
	})
)
const randomNum = () => {
	tranList.value = _.shuffle(tranList.value)
}
const numObj = reactive({
	current: 0,
	tweenedNumber: 0,
})
watch(
	() => numObj.current,
	(newVal) => {
		gsap.to(numObj, {
			duration: 1,
			tweenedNumber: newVal,
		})
	}
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
const switchTab = (item: Tabs, index: Number) => {
	currentIndex.value = index
	currentComponent.comName = item.comName
}

const enterFrom = (el: Element) => {
	console.log("进入之前")
	gsap.set(el, {
		width: 0,
		height: 0,
	})
}
const enterActive = (el: Element, done: gsap.Callback) => {
	console.log("显示的过度曲线")
	gsap.to(el, {
		width: "100%",
		height: 100,
		// 过度完成之后，执行一个回调函数
		onComplete: done,
	})
}
const enterTo = (el: Element) => {
	console.log("过度完成")
}
const enterCancel = (el: Element) => {
	console.log("显示的过度曲线被打断")
}
const leaveFrom = (el: Element) => {
	console.log("离开之前")
}
// 当只用 JavaScript 过渡的时候，在 enter 和 leave 钩子中必须使用 done 进行回调
const leaveActive = (el: Element, done: gsap.Callback) => {
	console.log("离开的过度曲线")
	gsap.to(el, {
		width: 0,
		height: 0,
		// 过度完成之后，执行一个回调函数
		onComplete: done,
	})
}
const leaveTo = (el: Element) => {
	console.log("离开完成")
}
const leaveCancel = (el: Element) => {
	console.log("离开的过度曲线被打断")
}
</script>

<style lang="less" scoped>
.content {
	flex: 1;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;
	&-item {
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
	.wraps {
		display: flex;
		flex-wrap: wrap;
		word-break: break-all;
		border: 1px solid #ccc;
		&-item {
			margin: 10px;
		}
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		width: calc(25px * 10 + 9px);
		&-item {
			width: 25px;
			height: 25px;
			border: 1px solid #ccc;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.vessel {
		transition: transform 1s ease-out;
	}
	// 通过这个属性可以设置初始节点过度；即页面加载完成就开始动画，对应三个状态
	.appear-from {
		width: 0;
		height: 0;
	}
	.appear-active {
		transition: all 2s ease-in;
	}
	.appear-to {
		width: 100%;
		height: 100px;
	}
	.fade-enter-from {
		// 准备开始过度
		width: 0;
		height: 0;
		transform: rotate(360deg);
	}
	.fade-enter-active {
		// 开始过度
		transition: all 1.5s ease;
	}
	.fade-enter-to {
		// 过度完成
		width: 100%;
		height: 100px;
		transform: scale(1.1);
	}
	.fade-leave-from {
		// 离开前过度
		width: 100%;
		height: 100px;
		transform: rotate(360deg);
	}
	.fade-leave-active {
		// 离开中过度
		transition: all 2s ease-in-out;
	}
	.fade-leave-to {
		// 离开完成
		width: 0;
		height: 0;
	}
}
</style>
