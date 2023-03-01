<template>
	<view>
		<view style="text-align: center;">
			<img height="200" :src="goodsInfo.cover_url">
		</view>
		<view class="top2" style="margin-top: 10px;">
			<view class="title u-line-2">{{goodsInfo.title}}</view>
			<view class="des">
				<view class="price">￥ {{goodsInfo.price}}</view>
				<view class="sales">销量: {{goodsInfo.sales}}</view>
			</view>
		</view>
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="curTab" @change="changeTab"></u-tabs>
		</view>
		
		<view v-if="curTab === 0">
			<view class="info u-p-b-80">
				<u-parse :html="goodsInfo.details"></u-parse>
			</view>
		</view>
		
		<view v-if="curTab === 1">
			<view class="comment" v-for="(res,index) in commentList" :key="res.id">
				<view class="left">
					<image :src="res.user.avatar_url" mode="aspectFill"></image>
				</view>
				<view class="right">
					<view class="top">
						<view class="name">{{res.user.name}}</view>
					</view>
					<view class="content">{{res.content}}</view>
					<view class="bottom">
						{{res.created_at}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="u-p-b-80" v-if="curTab === 2">
			<u-row gutter="16">
				<u-col v-for="(goods,index) in goodsList" :key="index" span="6">
					<goods-card :goods="goods"></goods-card>
				</u-col>
			</u-row>
		</view>
		<view class="navigation">
			<view class="left u-text-center">
				<view class="item" @click="collect">
					<block v-if="isCollect === 0">
						<u-icon name="star" :size="50"></u-icon>
						<view class="text u-line-1">收藏</view>
					</block>
					<block v-else>
						<u-icon name="star-fill" :size="50" color="#2979ff"></u-icon>
						<view class="text u-line-1" style="color:#2979ff;">已收藏</view>
					</block>
				</view>
				<view class="item car" @click="toCart">
					<u-badge class="car-num" :count="cartCount" type="primary" :offset="[-3,-6]"></u-badge>
					<u-icon name="shopping-cart" :size="50"></u-icon>
					<view class="text u-line-1">购物车</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1" @click="addCart">加入购物车</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					name:'商品详情'
				},{
					name:'商品评论',
					count:0
				},{
					name:'推荐商品'
				}],
				curTab:0,
				goodsInfo:{},
				commentList:[],
				goodsList:[],
				goodsId:null,
				isCollect:0,
				cartCount:0,
			};
		},
		onLoad(option) {
			this.goodsId = option.id
			// 商品数据
			this.getData()
			// 购物项产品数量
			this.getCartCount()
		},
		methods:{
			async getData() {
				const res = await this.$u.api.goodsInfo(this.goodsId)
				console.log(res);
				this.goodsInfo = res.goods
				this.commentList = res.goods.comments
				this.list[1].count = res.goods.comments.length
				this.goodsList = res.like_goods
				this.isCollect = res.goods.is_collect
			},
			changeTab(index) {
				this.curTab = index
			},
			// 收藏商品
			async collect() {
				await this.$u.api.goodsCollect(this.goodsId)
				if (this.isCollect === 0) {
					this.isCollect = 1
					this.$u.toast('收藏成功')
				} else {
					this.isCollect = 0
					this.$u.toast('取消收藏')
				}
			},
			// 加入购物车
			async addCart() {
				const params = {goods_id: this.goodsId}
				await this.$u.api.cartAdd(params)
				this.$u.toast('添加成功')
				// 重新获取购物项产品数量
				this.getCartCount()
			},
			// 跳转到购物车
			toCart() {
				this.$u.route({
					type:"switchTab",
					url:"pages/cart/cart"
				})
			},
			// 获取购物项产品数量
			async getCartCount() {
				const token = this.vuex_token
				if (token) {
					const res = await this.$u.api.cartList()
					this.cartCount = res.data.find(item => item.goods_id === parseInt(this.goodsId))?.num
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.top2 {
	margin: 40rpx 0;
	padding: 30rpx 40rpx;
	background: white;
	margin-bottom: 0;
}
.title {
	font-size: 36rpx;
	font-weight: 600;
}
.des {
	margin-top: 30rpx;
	display: flex;
	justify-content: space-between;
}
.price {
	font-size: 36rpx;
	color: #5677fc;
	font-weight: 600;
}
.sales {
	color: #333;
}
.comment {
	display: flex;
	padding: 30rpx;
	
	.left {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 20rpx;
		font-size: 30rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10rpx;
			.name {
				color: #2979ff;
			}
		}
		.content {
			margin-bottom: 10rpx;
		}
		.bottom {
			margin-top: 20rpx;
			display: flex;
			font-size: 24rpx;
			color: #9a9a9a;
		}
	}
}
.navigation {
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 120rpx;
	margin-top: 100rpx;
	border: solid 2rpx #f2f2f2;
	background-color: #fff;
	padding: 16rpx 0;
	justify-content: space-between;
	.left {
		display: flex;
		font-size: 20rpx;
		margin-left: 30rpx;
		.item {
			margin: 0 30rpx;
			width: 40px;
		}
		.car {
			text-align: center;
			position: relative;
			.car-num {
				position: absolute;
				top: -10rpx;
				right: -10rpx;
				background-color: #2979ff;
			}
		}
	}
	.right {
		display: flex;
		font-size: 20rpx;
		align-items: center;
		margin-right: 30rpx;
		color: #fff;
		.btn {
			line-height: 66rpx;
			padding: 0 30rpx;
			border-radius: 15rpx;
		}
		.cart {
			background-color: #2979ff;
			text-align: center;
			line-height: 40px;
			font-size: 18px;
			margin-right: 30rpx;
			/* #ifdef H5 */
			padding: 0 120rpx;
			/* #endif */
			/* #ifdef MP */
			width: 150px;
			/* #endif */
		}
	}
}
</style>
