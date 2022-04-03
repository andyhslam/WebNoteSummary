<template>
	<div class="tab">
		<router-link to="/tab1">tab1</router-link>
		<router-link to="/tab2" style="margin-left: 10px">tab2</router-link>
		<router-view></router-view>
		<router-view name="tabB"></router-view>
		<router-view name="tabC"></router-view>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
