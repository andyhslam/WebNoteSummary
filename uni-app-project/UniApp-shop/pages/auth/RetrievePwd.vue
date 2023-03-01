<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">找回密码</view>
			<u-form :model="form" :error-type="errorType" ref="uForm">
				<u-form-item label="绑定邮箱" prop="email" required label-width="90px">
					<u-input v-model="form.email" />
					<u-button size="mini" slot="right" @click="getCode(form.email)">获取验证码</u-button>
				</u-form-item>
				<u-form-item label="邮箱验证码" prop="code" required label-width="90px">
					<u-input placeholder="请输入验证码" v-model="form.emailCode" type="text"></u-input>
				</u-form-item>
				<u-form-item label="请输入密码" prop="code" required label-width="90px">
					<u-input placeholder="请输入密码" v-model="form.password" type="password"></u-input>
				</u-form-item>
				<u-form-item label="请确认密码" prop="code" required label-width="90px">
					<u-input placeholder="请确认密码" v-model="form.password_confirmation" type="password"></u-input>
				</u-form-item>
			</u-form>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">进行登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType:['message'],
				form: {
					emailCode:'',
					email:'',
					password:'',
					password_confirmation:'',
				}
			};
		},
		computed: {
			inputStyle() {
				let style = {};
				if(this.$u.test.email(this.form.email) && this.form.password) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods:{
			async getCode(data) {
				const params = {
					email:data
				}
				await this.$u.api.resetCode(params)
			},
			async submit() {
				await this.$u.api.resetCode(this.form)
				this.$u.toast('找回密码成功')
				setTimeout(()=>{
					this.$u.route({
						url:"pages/auth/login"
					})
				},1500)
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 0 auto;
		padding-top: 80px;

		.title {
			text-align: center;
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
}

</style>
