<template>
	<view class="cartItem u-flex">
		<view class="left">
			<u-image width="200rpx" height="240rpx" border-radius="20" :src="item.goods.cover_url"></u-image>
		</view>
		<view class="right">
			<view class="title">
				<text>{{item.goods.title}}</text>
			</view>
			<view class="bottom u-flex">
				<text class="price u-flex-9">￥{{item.goods.price}}</text>
				<text class="num u-flex-1">x<a>{{item.num}}</a></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "shopList",
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cartItem {
		border-bottom: 2px solid #eee;
		border-radius: 20rpx;
		padding-bottom: 10rpx;
		margin-bottom: 20rpx;
		background-color: #fff;

		.right {
			width: 100%;
			height: 120px;

			.title {
				margin-top: 20rpx;
				height: 80px;
				font-size: 20px;
				font-weight: bold;
			}

			.bottom {
				.price {
					font-size: 20px;
					font-weight: bold;
					color: #2979ff;
					margin-left: 15rpx;
				}

				.num {
					margin-right: 10rpx;

					a {
						color: #2979ff;
						font-size: 20px;
						font-weight: bold;
						margin-left: 10rpx;
					}
				}
			}
		}
	}
</style>
