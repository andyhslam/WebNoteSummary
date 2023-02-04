<template>
	<view class="wrap">
		<u-swiper :list="imgList"></u-swiper>
		<u-tabs :list="sortList" :is-scroll="false" :current="currentSort" @change="changeSort"></u-tabs>
		<u-row gutter="16">
			<u-col span="6" v-for="i in 12">
				<navigator class="goods-item u-m-t-30 u-p-40">
					<u-image width="100%" height="300rpx" :src="imgSrc"></u-image>
					<view class="title u-m-10 u-font-32">区块链</view>
					<view class="u-flex u-row-between">
						<view class="price">￥ 99</view>
						<view class="sales">销量：10</view>
					</view>
				</navigator>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [
					{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				sortList: [
					{name: '默认'}, 
					{name: '销量'}, 
					{name: '推荐'},
					{name: '最新'},
				],
				currentSort: 0,
				imgSrc: 'https://oss.shop.eduwork.cn/product/2020-0820-5f3e152e57d13.png',
			}
		},
		 async onLoad() {
			
		},
		methods: {
			changeSort(index) {
				this.currentSort = index;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, .1);
		.title {
			font-weight: 500;
		}
		.price {
			color: red;
		}
		.sales {
			color: #888;
		}
	}
</style>
