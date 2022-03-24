<template>
	<div class="grand-father">
		<h2>我是祖父组件</h2>
		<Father></Father>
	</div>
</template>

<script setup lang="ts">
import { provide, ref, getCurrentInstance } from "vue"
import Father from "./Father.vue"

// 依赖注入的设计模式：采用原型的继承方式，把每一层的值都继承下来，所以改变任意一个值，就会影响每一层的链路

/**
 * 1.provide:
 * 默认情况下，实例继承父类的provides对象；
 * 但是当它需要提供自己的值时，就会使用父类的provides对象作为原型来创建自己的provides对象；
 * 这样，在“注入”中，我们可以直接从父类查找注入，让原型链来完成这项工作。
 * 2.inject:
 * 查询父类的provides对象，如果实例是在根目录，回退到appContext的provides中
 */

/**
 * options Api的写法：和data同层级
 * provide(){return {key: value}}
 * inject:['key']
 */

console.log(getCurrentInstance()) // 返回当前实例的所有信息

provide("grandfatherFlag", ref(false))
</script>

<style lang="less" scoped>
.grand-father {
	width: 200px;
	height: 200px;
	background-color: red;
	color: #fff;
}
</style>
