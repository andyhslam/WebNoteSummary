<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:"life",
		data() {
			return {
				
			};
		},
		// 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
		beforeCreate() {
			console.log('beforeCreate');
		},
		// 在实例创建完成后被立即调用。
		created() {
			console.log('created');
		},
		// 实例被挂载后调用。
		mounted() {
			console.log('mounted');
		},
		// Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
		destroyed() {
			console.log('destroyed');
		},
	}
</script>

<style>

</style>