<template>
	<view>
		<view @click="show">点击事件</view>
		
		<view @click="clickFather">
			我是父级
			<view @click.stop="clickSon">我是子级</view>
		</view>
		
		<scroll-view class="scroll" scroll-y @scroll="scroll">
			<view v-for="(item,index) in 100" :key="index">
				11
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			show() {
				console.log('滴滴');
			},
			clickFather() {
				console.log('点击父级');
			},
			clickSon() {
				console.log('点击子级');
			},
			scroll(event) {
				console.log(event.detail);
			}
		}
	}
</script>

<style>
.scroll {
	height: 400rpx;
}
</style>
