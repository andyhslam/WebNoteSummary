<template>
	<div class="content-item" v-for="item in 7" :key="item">
		<Card :content="`我是第${item}个`"></Card>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>
