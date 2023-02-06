<template>
	<navigator class="goods-item u-m-t-30 u-p-40">
		<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="goods.cover_url"></u-image>
		<view class="title u-m-10 u-font-32 u-line-1 u-skeleton-rect">{{goods.title || '商品名称'}}</view>
		<view class="u-flex u-row-between">
			<view class="price u-skeleton-rect">￥ {{goods.price}}</view>
			<view class="sales u-skeleton-rect">销量：{{goods.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"goods-card",
		props: {
			goods: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				
			};
		}
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