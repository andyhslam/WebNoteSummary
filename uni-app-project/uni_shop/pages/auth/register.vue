<template>
	<view class="wrap">
		<view class="content">
			<view class="title">用户注册</view>
			<input class="u-border-bottom" v-model="name" placeholder="请输入昵称" />
			<input class="u-border-bottom" v-model="email" placeholder="请输入邮箱" />
			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入密码" />
			<input class="u-border-bottom" type="password" v-model="confirmPassword" placeholder="请确认密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">注册</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.name && this.$u.test.email(this.email) && this.password && this.confirmPassword && this.password === this.confirmPassword) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
			}
			return style;
		}
	},
	methods: {
		// 执行注册
		async submit() {
			// 1.表单验证
			if(!this.name || !this.$u.test.email(this.email) || !this.password || !this.confirmPassword || this.password !== this.confirmPassword) return
			// 2.准备提交参数
			const params = {
				name: this.name,
				email: this.email,
				password: this.password,
				password_confirmation	: this.confirmPassword,
			}
			// 3.请求API，执行注册
			await this.$u.api.authRegister(params)
			// 4.注册成功之后，重定向到登录(redirect)
			// 注意：该接口注册成功没有返回值，注册失败才有(已经在响应拦截做了异常捕获)；能走到这一步，就说明已经注册成功，不需要返回值。
			this.$u.toast('注册成功，请登录')
			setTimeout(() => {
				this.$u.route({
					type: 'redirect',
					url: 'pages/auth/login',
				})
			}, 1500)
		}
	}
}
</script>

<style lang="scss" scoped>
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
			margin-bottom: 40rpx;
			padding-bottom: 6rpx;
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
	}
}
</style>