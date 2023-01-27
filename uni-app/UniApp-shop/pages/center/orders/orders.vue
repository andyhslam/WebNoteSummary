<template>
	<view>
		<view class="u-p-t-10">
			<view class="top">
				<view class="left u-flex-9">
					<view class="address u-flex">
						<text class="more u-flex-9">{{location}}</text>
						<u-tag class="tag" :text="text" mode="plain" />
					</view>
					<view class="info">
						<text>
							<a>{{name}}</a>
							<a>{{phone}}</a>
						</text>
					</view>
					<view>订单编号: {{order_no}}</view>
					<view>下单时间: {{created_at}}</view>
				</view>
			</view>
			<view class="container u-p-l-20 u-p-r-20">
				<view v-for="(item,index) in shoplist" :key="index">
					<shopList :item="item"></shopList>
				</view>
				<u-empty class="empty" icon-size="100px" :show="totalPrice>0?false:true" mode="order"></u-empty>
			</view>
			<view class="footer">
				<view class="u-flex u-flex-1">
					<view class="card">
						<text class="title">共计</text>
						<text class="num">{{num}}</text>
						<text class="title">商品</text>
					</view>
					<view class="card">
						<text class="title">合计:</text>
						<text class="price">￥{{totalPrice}}</text>
					</view>
					<u-button ref="submit" style="padding: 0 50rpx;" :disabled="totalPrice>0?false:true" type="primary" :ripple="true" shape="square" @click="submit">{{btn}}</u-button>
				</view>
			</view>
		</view>
		<u-modal title="请支付订单" v-model="show" :show-cancel-button="true" cancel-text="稍后支付" @cancel="cancel" :show-confirm-button="false">
			<view class="qrcode">
				<u-image width="100%" height="285px" :src="QR_code"></u-image>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: "",
				name: "",
				phone: "",
				order_no:"",
				created_at:"",
				num:0,
				shoplist:[],
				text:"标签",
				btn:"按钮",
				status:1,
				show:false,
				QR_code:"",
				id:"",
				timer:"",
			};
		},
		computed: {
			totalPrice() {
				return this.shoplist.reduce((pre, curr) => {
					return parseFloat(pre) + parseFloat(curr.price) * curr.num
				}, 0)
			}
		},
		onLoad() {
			this.orderInfo()
		},
		methods:{
			async orderInfo() {
				const res = await this.$u.api.ordersInfo(this.$route.query.params).catch(err=>{
					if (err.statusCode == 500) {
						this.$u.toast('此地址已经被删除,订单失效')
						setTimeout(()=>{
							this.$u.route({
								url: "pages/center/orders/myOrders"
							})
						},1500)
					}
				})
				if (res != undefined) {
					this.id = res.id
					this.status = res.status
					this.num = res.orderDetails.data.length
					this.shoplist = res.orderDetails.data
					this.location = res.address.province + "-" + res.address.city + "-" + res.address.county + "-" +
						res.address.address
					this.name = res.address.name
					this.phone = res.address.phone
					this.order_no = res.order_no
					this.created_at = res.created_at
					
					if (res.status == 1) {
						this.text = "未支付"
					} else if (res.status == 2) {
						this.text = "已付款"
					} else if (res.status == 3) {
						this.text = "已发货"
					} else if (res.status == 4) {
						this.text = "已收货"
					} else if (res.status == 5) {
						this.text = "已过期"
					}
					
					if(res.status == 1) {
						this.btn = "支付订单"
					} else if (res.status < 5) {
						this.btn = "查看物流"
					} else {
						this.btn = "订单已过期"
					}
				}
			},
			async submit() {
				console.log(this.id);
				if (this.status == 1) {
					this.show = true
					const code = await this.$u.api.QRcode(this.id)
					this.QR_code = code.qr_code_url
					this.show = true
					this.timer = setInterval(()=>{
						this.Query(this.id)
					},1500)
				}
				if(this.status == 2) {
					this.$u.route({
						url: "pages/center/orders/express"
					})
				}
			},
			async Query(data) {
				const status = await this.$u.api.status(data)
				console.log(status);
			},
			cancel() {
				this.$u.toast('已取消,请在订单有效期内支付')
				this.show = false
				clearInterval(this.timer)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.qrcode {
		padding: 20rpx;
	}
	.more {
		width: 100px;
		white-space:nowrap; 
		text-overflow:ellipsis; 
		-o-text-overflow:ellipsis; 
		overflow:hidden;
	}
	.container {
		/* #ifdef H5 */
		height: calc(100vh - 97px);
		/* #endif  */
		overflow-y: scroll;
		padding-top: 150px;
		background-color: #f5f5f5;
	}
	.top {
		position: fixed;
		display: flex;
		width: 100%;
		top: 44px;
		padding: 20rpx;
		z-index: 99;
		background-color: #fff;
		border-bottom: 2px solid #eee;

		.left {
			margin-left: 20rpx;
			
			view {
				margin-top: 15rpx;
			}
			
			.address {
				font-weight: bold;
				font-size: 40rpx;
				.tag {
					float: right;
					margin-top: 5px;
				}
			}

			.info {
				a {
					margin-right: 20rpx;
					color: #82848A;
				}
			}
		}
	}
	.footer {
		position: fixed;
		display: flex;
		height: 50px;
		bottom: 0;
		background-color: #fff;
		border-top: 2px solid #eee;
		line-height: 100rpx;
		width: 100%;
		.card {
			height: 48px;
			line-height: 48px;
			margin-left: 20px;
		}
		.num {
			margin: 0 20rpx;
			width: 100px;
			color: #2979ff;
			font-weight: bold;
			font-size: 40rpx;
		}
		.price {
			width: 100px;
			color: #2979ff;
			font-weight: bold;
			font-size: 40rpx;
			margin-left: 10rpx;
		}
	}
</style>
