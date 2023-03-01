<template>
	<Directive></Directive>
	<renderDom title="tsx标题" @tsx-click="getTsx"></renderDom>
</template>

<script setup lang="ts">
import Directive from "@/components/directive/index.vue"
import renderDom from "./case"

const getTsx = (param: number) => {
	console.log("getTsx=", param)
}
</script>

<style scoped lang="less"></style>
