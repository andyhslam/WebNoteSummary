<template>
	<div v-if="isShow" class="loading">
		<div class="loading-content">Loading...</div>
	</div>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false)

const show = () => {
	isShow.value = true
}
const hide = () => {
	isShow.value = false
}

defineExpose({ show, hide })
</script>

<style scoped lang="less">
.loading {
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	&-content {
		font-size: 20px;
		color: #fff;
	}
}
</style>
