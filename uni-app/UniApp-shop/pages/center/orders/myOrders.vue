<template>
	<view>
		<view class="top">
			<u-tabs-swiper activeColor="#2979ff" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;overflow: hidden;" @scrolltolower="scrollEvent">
					<view class="page-box u-p-l-20 u-p-r-20 u-p-t-10">
						<navigator class="thumb-box" v-for="(goods,index) in goodsList" :key="index">
							<view class="list">
								<view>订单序号: {{goods.id}}</view>
								<view>订单编号: {{goods.order_no}}</view>
								<view>下单时间: {{goods.created_at}}</view>
								<view>订单总价: {{goods.amount}}</view>
								<view>
									<u-button @click="toInfo(goods.id)" :hair-line="false" :ripple="true" size="medium" class="btn">查看订单</u-button>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="page-box">
						<navigator class="thumb-box" v-for="(goods,index) in payList" :key="index">
							<view class="list">
								<view>订单序号: {{goods.id}}</view>
								<view>订单编号: {{goods.order_no}}</view>
								<view>下单时间: {{goods.created_at}}</view>
								<view>订单总价: {{goods.amount}}</view>
								<view>
									<u-button :hair-line="false" :ripple="true" size="medium" class="btn">查看订单</u-button>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
				<u-empty class="empty" icon-size="100px" :show="length>0?false:true" mode="list"></u-empty>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="page-box">
						<navigator class="thumb-box" v-for="(goods,index) in deliverList" :key="index">
							<view class="list">
								<view>订单序号: {{goods.id}}</view>
								<view>订单编号: {{goods.order_no}}</view>
								<view>下单时间: {{goods.created_at}}</view>
								<view>订单总价: {{goods.amount}}</view>
								<view>
									<u-button :hair-line="false" :ripple="true" size="medium" class="btn">查看订单</u-button>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
				<u-empty class="empty" icon-size="100px" :show="length>0?false:true" mode="list"></u-empty>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="page-box">
						<navigator class="thumb-box" v-for="(goods,index) in ReceivyList" :key="index">
							<view class="list">
								<view>订单序号: {{goods.id}}</view>
								<view>订单编号: {{goods.order_no}}</view>
								<view>下单时间: {{goods.created_at}}</view>
								<view>订单总价: {{goods.amount}}</view>
								<view>
									<u-button :hair-line="false" :ripple="true" size="medium" class="btn">查看订单</u-button>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
				<u-empty class="empty" icon-size="100px" :show="length>0?false:true" mode="list"></u-empty>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="page-box">
						<navigator class="thumb-box" v-for="(goods,index) in Expiredlist" :key="index">
							<view class="list">
								<view>订单序号: {{goods.id}}</view>
								<view>订单编号: {{goods.order_no}}</view>
								<view>下单时间: {{goods.created_at}}</view>
								<view>订单总价: {{goods.amount}}</view>
								<view>
									<u-button :hair-line="false" :ripple="true" size="medium" class="btn">查看订单</u-button>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
				<u-empty class="empty" icon-size="100px" :show="length>0?false:true" mode="list"></u-empty>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '我的订单'
				}, {
					name: '已支付'
				}, {
					name: '已发货'
				}, {
					name: '已收货'
				}, {
					name: '已过期'
				}],
				goodsList: [],
				payList: [],
				deliverList: [],
				ReceivyList: [],
				Expiredlist: [],
				current: 0,
				page: 1,
				length: 0,
				swiperCurrent: 0,
				isLast:false,
			}
		},
		onLoad() {
			this.myOrders()
		},
		methods: {
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				this.myOrders(this.current)
			},
			async myOrders() {
				let status = this.current + 1
				const res = await this.$u.api.ordersList(status, this.page)
				
				if(status==1) {
					this.goodsList = [...this.goodsList, ...res.data]
				}else if(status==2) {
					this.payList = [...this.payList, ...res.data]
				}else if(status==3) {
					this.deliverList = [...this.deliverList, ...res.data]
				}else if(status==4) {
					this.ReceivyList = [...this.ReceivyList, ...res.data]
				}else if(status==5) {
					this.Expiredlist = [...this.Expiredlist, ...res.data]
				}

				if (res.data != 0) {
					this.isLast = res.meta.pagination.links.next ? false : true
				}
				this.length = res.data.length

			},
			scrollEvent() {
				if(this.isLast) {
					this.$u.toast('已经到底了')
					return
				}
				this.page = this.page + 1
				this.myOrders()
			},
			toInfo(data) {
				let params = data
				this.$u.route({
					url:"pages/center/orders/orders",
					params:{params}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.empty {
		position: absolute;
		width: 100%;
		top: -44px;
	}
	.top {
		position: fixed;
		display: flex;
		top: 43px;
		z-index: 99;
		width: 100%;
		border-bottom: 1px solid #eee;
	}
	.swiper-box {
		padding-top: 44px;
		flex: 1;
		height: calc(100vh - 88px);
		overflow: hidden;
		overflow-y: scroll;
		background-color: #f5f5f5;
	}
	.swiper-item {
		overflow: hidden;
	}
	.page-box {
		overflow: hidden;
	}
	.thumb-box {
		display: flex;
		padding: 40rpx 30rpx;
		flex-direction: column;
		margin-top: 20rpx;
		background-color: #fff;
		border: 1px solid #eee;
	}
	.btn {
		width: 200rpx;
		line-height: 64rpx;
		border: 1px solid #2979ff;
		color: #2979ff;
		float: right;
	}
	.list {
		view {
			margin-top: 20rpx;
		}
	}
</style>
