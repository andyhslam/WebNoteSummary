<template>
	<view>
		<view class="u-p-t-10">
			<view class="top">
				<view class="left u-flex-9">
					<view class="address">
						<text>{{location}}</text>
					</view>
					<view class="info">
						<text>
							<a>{{name}}</a>
							<a>{{phone}}</a>
						</text>
					</view>
				</view>
				<view class="right u-flex-1" @click="toAddress">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="container u-p-l-20 u-p-r-20">
				<view v-for="(item,index) in shoplist" :key="index">
					<shopList :item="item"></shopList>
				</view>
			</view>
			<view class="footer">
				<view class="u-flex u-flex-1 u-row-between">
					<view style="width: 100%;padding-left: 60rpx;">
						<text class="title">合计:</text>
						<text class="price">￥{{totalPrice}}</text>
					</view>
					<u-button ref="submit" style="padding: 0 100rpx;line-height: 50px;margin: 0;margin-right: 40rpx;" :disabled="totalPrice>0?false:true" type="primary" :ripple="true" shape="square" @click="submit">提交订单并支付</u-button>
				</view>
			</view>
		</view>
		<u-modal title="请支付订单" v-model="show" :show-cancel-button="true" cancel-text="稍后支付" @cancel="cancel"  :show-confirm-button="false">
			<view class="qrcode">
				<u-image width="100%" height="285px" :src="QR_code"></u-image>
			</view>
		</u-modal>
		<u-empty class="empty" icon-size="100px" :show="totalPrice>0?false:true" mode="order"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: {},
				location: "",
				name: "",
				phone: "",
				shoplist: [],
				show: false,
				address_id:"",
				QR_code:"",
				timer:"",
			}
		},
		onLoad() {
			this.cartPreview()
			if (this.totalPrice==0) {
				console.log(1);
			}
		},
		computed: {
			totalPrice() {
				return this.shoplist.reduce((pre, curr) => {
					return parseFloat(pre) + parseFloat(curr.goods.price) * curr.num
				}, 0)
			}
		},
		methods: {
			async cartPreview() {
				const res = await this.$u.api.orderPreview()
				this.shoplist = res.carts
				if (this.$route.query.params != undefined) {
					const addressData = await this.$u.api.addressInfo(this.$route.query.params)
					this.location = addressData.province + "-" + addressData.city + "-" + addressData.county + "-" +
						addressData.address
					this.name = addressData.name
					this.phone = addressData.phone
					this.address_id = addressData.id
				} else {
					this.address = res.address.filter(item => {
						return item.is_default ? true : false
					})
					this.location = this.address[0].province + "-" + this.address[0].city + "-" + this.address[0]
						.county + "-" + this.address[0].address
					this.name = this.address[0].name
					this.phone = this.address[0].phone
					this.address_id = this.address[0].id
				}
			},
			toAddress() {
				uni.navigateTo({
					url: '/pages/center/address/address'
				});
			},
			cancel() {
				clearInterval(this.timer)
				this.$u.toast('已取消,请在订单有效期内支付')
				this.show = false
				setTimeout(()=>{
					this.$u.route({
						url: "pages/center/orders/myOrders"
					})
				},1500)
			},
			async submit() {
				const params = {
					address_id:this.address_id
				}
				const res = await this.$u.api.orders(params)
				const code = await this.$u.api.QRcode(res.id)
				this.QR_code = code.qr_code_url
				this.show = true
				this.timer = setInterval(()=>{
					this.Query(res.id)
				},1500)
			},
			async Query(data) {
				const status = await this.$u.api.status(data)
				console.log(status);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.qrcode {
		padding: 20rpx;
	}
	.empty {
		position: absolute;
		width: 100%;
		top: 0;
	}
	.top {
		position: fixed;
		display: flex;
		width: 100%;
		top: 44px;
		height: 100rpx;
		z-index: 99;
		background-color: #fff;
		border-bottom: 2px solid #eee;

		.left {
			margin-left: 20rpx;

			.address {
				font-weight: bold;
				font-size: 40rpx;
			}

			.info {
				a {
					margin-right: 20rpx;
					color: #82848A;
				}
			}
		}

		.right {
			text-align: right;
			margin-right: 20rpx;
			line-height: 44px;
		}
	}

	.container {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top) - 105px);
		/* #endif  */
		overflow-y: scroll;
		margin-top: 50px;
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

			.price {
				width: 100px;
				line-height: 120rpx;
				overflow: hidden;
				color: #2979ff;
				font-weight: bold;
				font-size: 40rpx;
				margin-left: 10rpx;
			}
		}

</style>
