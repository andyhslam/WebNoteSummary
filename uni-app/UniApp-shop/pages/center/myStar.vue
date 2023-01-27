<template>
	<view class="u-p-l-20 u-p-r-20 u-p-t-10">
		<view class="container">
			<view class="cartItem u-p-t-10 u-p-b-10 u-flex" v-for="item in collectsList" :key="item.id">
				<view class="image">
					<u-image width="200rpx" height="240rpx" border-radius="20" :src="item.goods.cover_url"></u-image>
				</view>
				<view class="right u-flex u-flex-col u-fl u-flex-1">
					<view class="top u-flex u-flex-col">
						<text class="title">{{item.goods.title}}</text>
						<text class="desc">{{item.goods.description}}</text>
					</view>
					<view class="bottom">
						<view class="icon" @click="del(item.goods_id)">
							<u-icon name="trash" size="40"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-empty class="empty" icon-size="100px" :show="collectsList!=''?false:true" mode="list"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collectsList: []
			};
		},
		onLoad() {
			this.myStar()
		},
		methods: {
			async myStar() {
				const res = await this.$u.api.myCollects()
				this.collectsList = res.data.map(item => {
					return item
				})
			},
			async del(data) {
				const res = await this.$u.api.goodsCollect(data)
				this.$u.toast('删除收藏成功')
				this.myStar()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.empty {
		position: absolute;
		width: 100%;
		top: 0;
	}
	.container {
		height: calc(100vh - 120rpx);
		overflow-y: scroll;

		.cartItem {

			border: 1rpx solid #eee;
			border-radius: 20rpx;
			margin-bottom: 20rpx;

			.left {
				width: 80rpx;
				height: 80rpx;
				padding: 10rpx;
			}

			.right {
				flex-direction: column;
				height: 240rpx;
				align-items: flex-start;

				.top {
					margin-top: 20rpx;
					width: 100%;
					height: 80px;
					
					.title {
						font-size: 18px;
						font-weight: bold;
					}
					
					text {
						height: 30px;
						line-height: 20px;
						width: 100%;
						text-align: left;
						margin-left: 20rpx;
					}
				}
				.bottom {
					width: 100%;
					
					.icon {
						float: right;
						margin-right: 20rpx;
						color: #2979ff;
						width: 40rpx;
					}
				}
			}
		}
	}
</style>
