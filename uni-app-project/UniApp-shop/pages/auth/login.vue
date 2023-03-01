<template>
	<view class="wrap">
		<view class="content">
			<view class="title">欢迎登录图书商城</view>
			<input class="u-border-bottom" type="email" v-model="email" placeholder="请输入邮箱账号" />
			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入账号密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password" @click="RetrievePwd">找回密码</view>
				<view class="issue" @click="register">注册账号</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">图书商城用户协议、隐私政策，</text>
				并授权使用您的图书商城账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password:'',
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
		async submit() {
			if(!this.$u.test.email(this.email) || !this.password) return
			
			const params = {
				email:this.email,
				password:this.password
			}
			const res = await this.$u.api.authLogin(params)
			this.$u.vuex('vuex_token',res.access_token)
			this.$u.toast('登录成功')
			
			const userInfo = await this.$u.api.user()
			this.$u.vuex('vuex_user',userInfo)
			
			const backUrl = uni.getStorageSync('back_url') || 'pages/index/index'
			setTimeout(()=>{
				this.$u.route({
					type:'reLaunch',
					url: backUrl
				})
			},1500)
		},
		register() {
			this.$u.route({
				url:"pages/auth/register"
			})
		},
		RetrievePwd() {
			this.$u.route({
				url:"pages/auth/RetrievePwd"
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.u-border-bottom {
	margin-bottom: 40rpx !important;
}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 0 auto;
		padding-top: 100px;

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
			padding: 150rpx 150rpx 150rpx 150rpx;
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
