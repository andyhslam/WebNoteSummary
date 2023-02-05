<template>
	<view class="wrap">
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<u-tabs :list="sortList" :is-scroll="false" :current="currentSort" @change="changeSort"></u-tabs>
		<u-row gutter="16"  class="u-skeleton">
			<u-col span="6" v-for="(item, index) in goods.length ? goods : 4" :key="index">
				<navigator class="goods-item u-m-t-30 u-p-40">
					<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url"></u-image>
					<view class="title u-m-10 u-font-32 u-line-1 u-skeleton-rect">{{item.title || '商品名称'}}</view>
					<view class="u-flex u-row-between">
						<view class="price u-skeleton-rect">￥ {{item.price}}</view>
						<view class="sales u-skeleton-rect">销量：{{item.sales}}</view>
					</view>
				</navigator>
			</u-col>
		</u-row>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
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
				loading: false,
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
				this.loading = true
				const params = {
					page: this.page
				}
				// 增加排序条件
				if(this.currentSort === 1) params.sales = 1
				if(this.currentSort === 2) params.recommend = 1
				if(this.currentSort === 3) params.new = 1
				const res = await this.$u.api.index(params)
				this.loading = false
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
			width: 100%;
			font-weight: 500;
		}
		.price {
			width: 40%;
			color: red;
		}
		.sales {
			width: 50%;
			color: #888;
		}
	}
</style>
