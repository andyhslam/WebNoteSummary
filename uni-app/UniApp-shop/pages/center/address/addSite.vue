<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input v-model="name" type="text" placeholder-class="line" placeholder="请填写收货人姓名" />
			</view>
			<view class="item">
				<view class="left">手机号码</view>
				<input v-model="phone" type="text" placeholder-class="line" placeholder="请填写收货人手机号" />
			</view>
			<view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input v-model="location" disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" />
			</view>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea v-model="address" type="text" placeholder-class="line" placeholder="街道、楼牌等" />
			</view>
		</view>
		<view class="bottom">
			<view class="default">
				<view class="left">
					<view class="set">设置默认地址</view>
					<view class="tips">提醒：每次下单会默认推荐该地址</view>
				</view>
				<view class="right">
					<switch :checked="is_default" color="#2979ff" @change="setDefault" />
				</view>
			</view>
			<view v-if="!change">
				<u-button type="primary" class="btn" @click="add">确认并提交</u-button>
			</view>
			<view class="u-flex" v-else>
				<u-button type="primary" class="btn u-flex-3" @click="dataModify">确认修改</u-button>
				<u-button type="primary" class="btn u-flex-1 u-m-l-20" @click="dataDelete">删除地址</u-button>
			</view>
		</view>
		<u-picker mode="region" v-model="show" @confirm="confirm" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'',
			address:'',
			phone:'',
			location:'',
			province:"",
			city:"",
			area:"",
			is_default:false,
			show: false,
			change: false,
		};
	},
	onLoad() {
		this.modify()
	},
	methods: {
		async modify() {
			if (this.$route.query.params != undefined) {
				this.change = true
				let address = this.$route.query.params
				const res = await this.$u.api.addressInfo(address)
				.catch(err=>{
					if (err.statusCode == 404) {
						this.$u.toast('该地址并不存在')
						setTimeout(()=>{
							this.$u.route({
								type:'reLaunch',
								url: "/pages/center/address/address"
							})
						},1500)
					}
				})
				if (res) {
					this.name = res.name
					this.address = res.address
					this.phone = res.phone
					this.location = res.province +"-"+ res.city +"-"+ res.county
					this.province = res.province
					this.city = res.city
					this.area = res.county
					if(res.is_default==1) {
						this.is_default = true
					}
				}
			}
		},
		async add() {
			let Default = 0
			if(this.is_default==true) {
				Default = 1
			}
			const params = {
				name:this.name,
				address:this.address,
				phone:this.phone,
				province:this.province,
				city:this.city,
				county:this.area,
				is_default:Default,
			}
			const res = await this.$u.api.addAddress(params)
			this.$u.toast('添加地址成功')
			setTimeout(()=>{
				this.$u.route({
					type:'reLaunch',
					url: "/pages/center/address/address"
				})
			},1500)
		},
		async dataModify() {
			let Default = 0
			if(this.is_default==true) {
				Default = 1
			}
			const params = {
				name:this.name,
				address:this.address,
				phone:this.phone,
				province:this.province,
				city:this.city,
				county:this.area,
				is_default:Default,
			}
			let address = this.$route.query.params
			await this.$u.api.addressModify(address,params)
			.then(()=>{
				this.$u.toast('修改成功')
				setTimeout(()=>{
					this.$u.route({
						type:'reLaunch',
						url: "/pages/center/address/address"
					})
				},1500)
			})
		},
		async dataDelete() {
			await this.$u.api.addressDelete(this.$route.query.params).then(()=>{
				this.$u.toast('删除成功')
				setTimeout(()=>{
					this.$u.route({
						type:'reLaunch',
						url: "/pages/center/address/address"
					})
				},1500)
			})
		},
		confirm(val) {
			this.province = val.province.label
			this.city = val.city.label
			this.area = val.area.label
			this.location = val.province.label + "-" + val.city.label + "-" + val.area.label
		},
		setDefault() {
			this.is_default = !this.is_default
		},
		showRegionPicker() {
			this.show = true;
		}
	}
};
</script>

<style lang="scss" scoped>
/deep/ .line {
	color: $u-light-color;
	font-size: 28rpx;
}
.btn {
	font-size: 20px;
	margin-top: 20px;
	height: 100rpx;
}
.wrap {
	background-color: #f2f2f2;
	.top {
		background-color: #ffffff;
		border-top: solid 2rpx $u-border-color;
		padding: 22rpx;
		.item {
			display: flex;
			font-size: 32rpx;
			line-height: 100rpx;
			align-items: center;
			border-bottom: solid 2rpx $u-border-color;
			.left {
				width: 180rpx;
			}
			input {
				text-align: left;
			}
		}
		
		.address {
			padding: 20rpx 0;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
		}
		.site-clipboard {
			padding-right: 40rpx;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
			.clipboard {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: $u-tips-color;
				height: 80rpx;
				.icon {
					margin-top: 6rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
	.bottom {
		padding: 20rpx;
		padding-top: 0;
		background-color: #ffffff;
		font-size: 28rpx;
		.default {
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx $u-border-color;
			line-height: 64rpx;
			.tips {
				font-size: 24rpx;
			}
			.right {
				padding-top: 20rpx;
			}
		}
	}
}
</style>
