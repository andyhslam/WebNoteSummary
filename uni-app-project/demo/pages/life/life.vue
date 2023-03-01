<template>
	<view>
		<life v-if="show"></life>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
			}
		},
		// 监听页面加载：页面加载时触发，一个页面只会调用一次。
		onLoad() {
			console.log('Page onLoad');
			setTimeout(() => {
				// uni.redirectTo({url:'/pages/about/about'})
				this.show = false
			}, 2000)
		},
		// 监听页面初次渲染完成：页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
		onReady() {
			console.log('Page onReady');
		},
		// 监听页面显示：页面显示时触发。
		onShow() {
			console.log('Page onShow');
		},
		// 监听页面隐藏：页面隐藏时触发。
		onHide() {
			console.log('Page onHide');
		},
		// 监听页面卸载：页面卸载时触发。
		onUnload() {
			console.log('Page onUnload');
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
