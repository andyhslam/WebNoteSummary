<template>
	<div v-if="modelValue" class="dvm">
		<div class="dvm-header">
			<h2>标题---{{ vmTitle }}</h2>
			<span @click="closeDialogVm">x</span>
		</div>
		<div class="dvm-content">内容</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	modelValue: boolean
	vmTitle: string
	modelModifiers?: {
		qingwen: boolean
	}
	vmTitleModifiers?: {
		tc: boolean
	}
}
const propData = defineProps<Props>()

const emit = defineEmits(["update:modelValue", "update:vmTitle"])
const closeDialogVm = () => {
	emit("update:modelValue", false)
	console.log(propData.vmTitleModifiers)
	if (propData.vmTitleModifiers.tc) {
		emit("update:vmTitle", "探春")
	} else {
		emit("update:vmTitle", "晴雯")
	}
}
</script>

<style lang="less" scoped>
.dvm {
	width: 300px;
	height: 300px;
	border: 1px solid #ccc;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	&-header {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-bottom: 1px solid #ccc;
	}
	&-content {
		padding: 10px;
	}
}
</style>
