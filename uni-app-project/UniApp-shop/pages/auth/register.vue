<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">请注册账号</view>
			<input class="u-border-bottom" type="text" v-model="name" placeholder="请输入您的昵称" />
			<input class="u-border-bottom" type="email" v-model="email" placeholder="请输入邮箱账号" />
			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入账号密码" />
			<input class="u-border-bottom" type="password" v-model="password_confirmation" placeholder="请确认账号密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">注册账号</button>
		</view>
		<view class="buttom">
			<view class="hint">
				注册即代表同意
				<text class="link">图书商城用户协议、隐私政策，</text>
				并授权使用您的图书商城账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
		<!-- 昵称 -->
		<!-- 邮箱 -->
		<!-- 密码 -->
		<!-- 确认密码 -->
		<!-- 注册按钮 -->
</template>

<script>
	export default {
		data() {
			return {
				name:null,
				email:null,
				password:null,
				password_confirmation:null,
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if(this.$u.test.email(this.email) && this.password) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			submit() {
				const params = {
					name:this.name,
					email:this.email,
					password:this.password,
					password_confirmation:this.password_confirmation
				}
				if(this.name && this.email && this.password && this.password_confirmation) {
					const res = this.$u.api.authRegister(params)
					this.$u.toast('注册成功,即将跳回登录页面')
					setTimeout(()=>{
						this.$u.route({
							type:'reLaunch',
							url:"pages/auth/login"
						})
					},1500)
				}else {
					this.$u.toast('请输入账号、密码后重试')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.u-border-bottom {
	margin-bottom: 40rpx !important;
}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
