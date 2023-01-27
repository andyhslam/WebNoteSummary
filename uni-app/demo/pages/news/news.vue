<template>
	<view>
		<view>新闻列表</view>
		<card color="red">红色的</card>
		<card color="green">绿色的</card>
		<!-- #ifndef APP-PLUS -->
		<card size="18px" @myClick="myClick">默认的</card>
		<!-- #endif -->
		
		<view class="bg-color">
			<view class="font-20">111</view>
			<view class="text">222</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// uni.showToast({
			// 	icon: 'loading',
			// 	title: '加载中...',
			// 	duration: 3000
			// })
			// setTimeout(() => {
			// 	uni.redirectTo({
			// 		url: '/pages/about/about'
			// 	})
			// }, 2000)
			
			// #ifdef MP
				console.log('H5');
			// #endif
		},
		methods: {
			myClick(msg) {
				console.log('父组件的自定义事件：' + msg);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import url('./news.css');
// @import './news.css';
.bg-color {
	background-color: #007aff;
	.text {
		color: #f40;
	}
}
</style>
