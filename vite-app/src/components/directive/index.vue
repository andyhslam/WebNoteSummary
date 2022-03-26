<template>
	<div class="directive">
		<div v-move="" class="box">
			<div class="box-header"></div>
			<p>内容</p>
		</div>
		<button @click="directFlag = !directFlag">自定义指令切换</button>
		<input type="text" v-model="directValue" />
		<Example
			v-move-directive:example.test="{
				background: 'green',
				directFlag: directFlag,
			}"
		></Example>
		<Example v-shorthand="{ background: directValue }"></Example>
	</div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue"
import Example from "./example.vue"

let directFlag = ref<boolean>(true)
let directValue = ref<string>("")
type Dir = {
	background: string
}
// 在setup内定义局部指令
const vMoveDirective: Directive = {
	created() {
		console.log("created---->")
	},
	beforeMount() {
		console.log("beforeMount---->")
	},
	mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
		console.log("mounted---->")
		el.style.background = dir.value.background
	},
	beforeUpdate() {
		console.log("beforeUpdate---->")
	},
	updated() {
		console.log("updated---->")
	},
	beforeUnmount() {
		console.log("beforeUnmount---->")
	},
	unmounted() {
		console.log("unmounted---->")
	},
}

// 函数简写
const vShorthand: Directive = (
	el: HTMLElement,
	binding: DirectiveBinding<Dir>
) => {
	el.style.background = binding.value.background
}

// 拖拽案例
const vMove: Directive<any, void> = (
	el: HTMLElement,
	binding: DirectiveBinding
) => {
	let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
	console.log("moveElement===", moveElement)
	const mouseDown = (e: MouseEvent) => {
		let X = e.clientX - el.offsetLeft
		let Y = e.clientY - el.offsetTop
		const move = (e: MouseEvent) => {
			el.style.left = e.clientX - X + "px"
			el.style.top = e.clientY - Y + "px"
		}
		document.addEventListener("mousemove", move)
		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", move)
		})
	}
	moveElement.addEventListener("mousedown", mouseDown)
}
</script>

<style scoped lang="less">
.directive {
	display: flex;
	position: absolute;
	right: 0;
	top: 0;
	.box {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		height: 200px;
		border: 3px solid #edc;
		&-header {
			height: 20px;
			cursor: move;
			background-color: #007;
		}
	}
}
</style>
