<template>
	<div>
		<Demo v-if="flag">
			<template v-slot:header>v-if可以使组件重新渲染和销毁</template>
		</Demo>
		<button @click="flag = !flag">改变组件状态</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Demo from "./components/Demo1.vue"
let flag = ref(true)
</script>

<style></style>
