<template>
	<div>
		<Code1 v-if="flag">
			<template v-slot:header>v-if可以使组件重新渲染和销毁</template>
		</Code1>
		<button @click="flag = !flag">改变组件状态</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Code1 from "./Code1.vue"
let flag = ref(true)
</script>

<style></style>
