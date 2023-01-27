<template>
	<view>
		<view class="u-flex user-box u-p-t-30 u-p-l-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<view class="u-p-r-10 avatar-body">
					<oss-upload></oss-upload>
				</view>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{vuex_user.name}}</view>
				<view class="u-font-14 u-tips-color">邮箱: {{vuex_user.email}}</view>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="个人信息" @click="toPage(1)"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="所有订单" @click="toPage(2)"></u-cell-item>
				<u-cell-item icon="star" title="收藏商品" @click="toPage(3)"></u-cell-item>
				<u-cell-item icon="map" title="收货地址"  @click="toPage(4)"></u-cell-item>
				<u-cell-item icon="car" title="我的物流"  @click="toPage(5)"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="arrow-right-double" title="退出登录" @tap="logOut"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return
		},
		methods: {
			toPage(data) {
				let url = ''
				if (data == 1) {
					url = 'pages/center/baseInfo'
				} else if (data== 2) {
					url = "/pages/center/orders/myOrders"
				} else if (data== 3) {
					url = "/pages/center/myStar"
				} else if (data== 4) {
					url = 'pages/center/address/address'
				} else if (data== 5) {
					url = 'pages/center/orders/express'
				}
				this.$u.route({
					url: url
				})
			},
			async logOut() {
				await this.$u.api.authLoginOut()
				this.$u.toast('已退出登录')
				setTimeout(()=>{
					this.$u.vuex('vuex_token', null)
					this.$u.vuex('vuex_user', {})
					
					this.$u.route({
						type:'reLaunch',
						url: 'pages/index/index'
					})
				},1500)
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
.avatar-body {
	height: 70px;
	width: 70px;
}
</style>