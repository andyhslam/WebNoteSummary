<template>
	<form action="/">
		<h3>防止触发form标签的submit事件，刷新页面</h3>
		<button @click.prevent type="submit">提交</button>
		<h2 v-bind:style="style" :class="cls">高文君</h2>
		<p v-for="item of list" :key="item.name">{{ item.name }}</p>
		<input type="text" v-model="message" />
		<h3>{{ message }}</h3>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue"
const list: Array<any> = [{ name: "g" }, { name: "w" }, { name: "j" }]
const message = ref("凯瑟琳") // 响应式属性
// ref原理：通过Proxy做属性的劫持，Vue会收集依赖，再去更新视图
const flag: boolean = true
type Style = {
	color: string
	fontSize: string
}
const style: Style = {
	color: "blue",
	fontSize: "30px",
}
type Cls = {
	fa: boolean
	fb: boolean
}
const cls: Cls = {
	fa: true,
	fb: false,
}
</script>

<style>
.fa {
	font-family: "Times New Roman", Times, serif;
}
.fb {
	border: 1px dashed #f40;
}
</style>
