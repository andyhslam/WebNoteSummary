<template>
	<view class="u-p-l-20 u-p-r-20 u-p-t-10">
		<view class="container">
			<view class="cartItem u-p-t-10 u-p-b-10 u-flex" v-for="item in cartList" :key="item.id">
				<view class="left u-text-center">
					<u-checkbox v-model="item.is_checked === 1 ? true:false" :name="item.id" @change="changeCheck"
						shape="circle" size="40"></u-checkbox>
				</view>
				<view class="image">
					<u-image width="200rpx" height="240rpx" border-radius="20" :src="item.goods.cover_url"></u-image>
				</view>
				<view class="right u-flex u-flex-col u-fl u-flex-1">
					<view class="top u-flex u-flex-col">
						<text class="title">{{item.goods.title}}</text>
						<text class="desc">{{item.goods.description}}</text>
						<text class="stock">剩余库存: <a>{{item.goods.stock}}</a></text>
					</view>
					<view class="bottom u-p-b-20 u-flex u-flex-1 u-col-bottom u-row-around">
						<view class="price">
							￥ {{item.goods.price}}
						</view>
						<view class="num n-m-l-10 n-m-r-10" style="width: 200rpx;">
							<u-number-box v-model="item.num" @minus="handleNum(item)" @plus="handleNum(item)" :max="item.goods.stock" :min="1">
							</u-number-box>
						</view>
						<view class="icon" @click="del(item.id)">
							<u-icon name="trash" size="40"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="u-flex-2">
				<u-checkbox v-model="allChcked" size="40" shape="circle">全选</u-checkbox>
			</view>
			<view class="u-flex u-flex-8 u-row-between">
				<view>
					<text class="title">合计:</text>
					<text class="price">￥{{totalPrice}}</text>
				</view>
				<u-button ref="submit" class="btn" type="primary" :ripple="true" shape="square" :disabled="totalPrice>0?false:true" @click="submit">结算</u-button>
			</view>
		</view>
		<u-modal v-model="show" content="确认要移除商品吗?" :show-cancel-button="true" @cancel="show=false" @confirm="confirm">
		</u-modal>
		<u-empty class="empty" icon-size="100px" :show="totalPrice>0?false:true" mode="car"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardId: '', // 要删除的id
				cartList: [], // 购物车数据列表
				show: false, // 删除提示
				isArr:[],
				price:"",
			}
		},
		computed: {
			totalPrice() {
				return this.cartList.filter(item => {
					return item.is_checked ? true : false
				}).reduce((pre, curr) => {
					this.price = parseFloat(pre) + parseFloat(curr.goods.price) * curr.num
					return parseFloat(pre) + parseFloat(curr.goods.price) * curr.num
				}, 0)
			},
			allChcked: {
				get() {
					return this.cartList.every(item => {
						return item.is_checked
					})
				},
				set(val) {
					this.checkAll(val)
				}
			}
		},
		onShow() {
			this.getCartList()
		},
		methods: {
			async getCartList() {
				const res = await this.$u.api.cartGoodsList()
				this.cartList = res.data
			},
			async getCartChecked(value) {
				const params = {
					cart_ids: value
				}
				await this.$u.api.cartChecked(params)
				this.getCartList()
			},
			del(id) {
				this.show = true
				this.cardId = id
			},
			async confirm() {
				await this.$u.api.cartDelete(this.cardId)
				this.$u.toast('移除商品成功')
				this.getCartList()
			},
			submit() {
				let cartArr = []
				this.cartList.every(item => {
					if (item.is_checked==1) {
						cartArr.push(item)
					}
					return item.is_checked
				})
				this.$u.vuex('vuex_cart',cartArr)
				this.$u.route({
					url:"pages/cart/preview",
				})
			},
			// 单选
			async changeCheck(val) {
				console.log('val', val);
				const {name,value} = val
				if(!value) {
				console.log('isArr', this.isArr);
					this.isArr.splice(this.isArr.indexOf(name),1)
				}else {
					this.isArr.push(name)	
				}
				this.getCartChecked(this.isArr)
			},
			// 全选/全不选
			async checkAll(val){
				if(!val){
					this.isArr=[]
					this.getCartChecked(this.isArr)
				}else{
					this.isArr = this.cartList.map(item => item.id)
					this.getCartChecked(this.isArr)
				}
			},
			// 数量增加或减少
			async handleNum(item){
				await this.$u.api.cartNum(item.id,{num: item.num})
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
	.btn {
		/* #ifdef H5 */
		padding: 0 120rpx;
		/* #endif */
		/* #ifdef MP */
		width: 130px;
		/* #endif */
		line-height: 50px;
		margin: 0;
		margin-right: 40rpx;
	}
.container {
	height: calc(100vh - 100rpx);
	/* #ifdef H5 */
	height: calc(100vh - 298rpx);
	/* #endif */
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
				width: 100%;

				text {
					height: 30px;
					line-height: 20px;
					width: 100%;
					text-align: left;
					margin-left: 20rpx;
				}
				.stock {
					text-align: right;
					margin-right: 40rpx;
					a {
						font-weight: bold;
						color:#2979ff;
						margin-left: 20rpx;
					}
					
				}
			}

			.bottom {
				width: 100%;

				.price {
					height: 50rpx;
					line-height: 50rpx;
					overflow: hidden;
					color: #2979ff;
					font-weight: bold;
					font-size: 35rpx;
				}

				.icon {
					color: #2979ff;
					width: 40rpx;
				}
			}
		}
	}
}

.footer {
	position: fixed;
	display: flex;
	/* #ifdef H5 */
	bottom: 100rpx;
	/* #endif */
	height: 100rpx;
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
