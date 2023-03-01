<template>
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
</template>

<script setup lang="ts">
import { ref } from "vue"
import Dialog from "@/components/dialog/index.vue"

let slotName = ref("footer") // 动态插槽
</script>

<style scoped lang="less"></style>
