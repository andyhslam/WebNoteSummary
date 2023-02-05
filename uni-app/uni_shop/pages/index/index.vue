<template>
	<view class="wrap">
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<u-tabs :list="sortList" :is-scroll="false" :current="currentSort" @change="changeSort"></u-tabs>
		<u-row gutter="16">
			<u-col span="6" v-for="item in goods">
				<navigator class="goods-item u-m-t-30 u-p-40">
					<u-image width="100%" height="300rpx" :src="item.cover_url"></u-image>
					<view class="title u-m-10 u-font-32 u-line-1">{{item.title}}</view>
					<view class="u-flex u-row-between">
						<view class="price">￥ {{item.price}}</view>
						<view class="sales">销量：{{item.sales}}</view>
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
				sortList: [
					{name: '默认'}, 
					{name: '销量'}, 
					{name: '推荐'},
					{name: '最新'},
				],
				currentSort: 0,
				slides: [],
				goods: [],
				page: 1,
			}
		},
		onLoad() {
			this.getIndexData()
		},
		onReachBottom() {
			// 重新请求数据，带上分页参数
			this.page += 1
			this.getIndexData()
		},
		methods: {
			changeSort(index) {
				this.currentSort = index
				// 重置商品数据和分页
				this.goods = []
				this.page = 1
				this.getIndexData()
			},
			async getIndexData() {
				const params = {
					page: this.page
				}
				// 增加排序条件
				if(this.currentSort === 1) params.sales = 1
				if(this.currentSort === 2) params.recommend = 1
				if(this.currentSort === 3) params.new = 1
				const res = await this.$u.api.index(params)
				console.log('res', res);
				this.slides = res.slides
				// this.goods.push(...res.goods.data)
				this.goods = [...this.goods, ...res.goods.data]
			},
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
