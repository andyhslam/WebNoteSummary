<template>
	<view :class="msg" :data="1+2">
		<text>大力神杯</text>
		<button @click="clickme">点我</button>
		<view v-for="(item,index) of list" :key="index">
			{{index + 1}} : {{item}}
		</view>
		<view v-for="(value,key) in movie" :key="key">
			{{key}} : {{value}}
		</view>
		<block v-for="mv of movies">
			<view>{{mv.title}} : {{mv.starring}}</view>
		</block>
	</view>
</template>

<script>
export default {
	// 不推荐这种方式，因为每次页面关闭和加载，数据不会发生变化。
	// data: { message: 'ct'},
	// 推荐这种方式，因为每次页面关闭和加载，都会重新执行data函数，从而返回最新的数据。
	data() {
		return {
			msg: 'content',
			list: ['H5', 'App', 'mini-program'],
			movie: {
				title: '满江红',
				director: '张艺谋',
			},
			movies: [
				{
					title: '流浪地球2',
					starring: '刘德华',
				},
				{
					title: '满江红',
					starring: '易烊千玺',
				}
			],
		}
	},
	onLoad() {

	},
	methods: {
		clickme() {
			console.log('点击按钮');
		}
	}
}
</script>

<style>

</style>
