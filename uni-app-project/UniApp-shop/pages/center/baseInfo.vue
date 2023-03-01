<template>
	<view class="u-p-l-40 u-p-r-40">
		<u-form :model="form" :error-type="errorType" ref="uForm">
			<u-form-item label="用户昵称" prop="name" required label-width="80px">
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="绑定邮箱" prop="email" required label-width="80px">
				<u-input v-model="email" />
				<u-button size="mini" slot="right" @click="getCode(1,email)">获取邮箱验证码</u-button>
			</u-form-item>
			<u-form-item label="验证码" prop="code" required label-width="80px" v-show="emailShow?true:false">
				<u-input placeholder="请输入验证码" v-model="emailCode" type="text"></u-input>
			</u-form-item>
			<u-form-item label="手机号码" prop="phone" required label-width="80px">
				<u-input v-model="phone" />
				<u-button size="mini" slot="right" @click="getCode(2,phone)">获取手机验证码</u-button>
			</u-form-item>
			<u-form-item label="验证码" prop="code" required label-width="80px" v-show="phoneShow?true:false">
				<u-input placeholder="请输入验证码" v-model="phoneCode" type="text"></u-input>
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType:['message'],
				emailShow:false,
				phoneShow:false,
				emailCode:'',
				phoneCode:'',
				form: {
					name: '',
				},
				email:'',
				phone:'',
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}]
				}
			};
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.form.name = this.vuex_user.name
			this.email = this.vuex_user.email
			this.phone = this.vuex_user.phone
		},
		methods: {
			submit() {
				this.$refs.uForm.validate( async (valid) => {
					if (valid) {
						await this.$u.api.userInfoUpdata(this.form)
						
						if (this.emailCode != "") {
							const params = {
								code:this.emailCode,
								email:this.email
							}
							await this.$u.api.email(params)
						}
						
						if (this.phoneCode != "") {
							const params = {
								code:this.phoneCode,
								phone:this.phone
							}
							await this.$u.api.phone(params)
						}
						
						this.$u.utils.UpdataUser()
						
						this.$u.toast('更新信息成功')
					}
				});
			},
			async getCode(code,data) {
				console.log(typeof(data));
				
				if (code == 1) {
					this.emailShow = true
					const params = {
						email:data
					}
					await this.$u.api.emailCode(params)
				} else if (code == 2) {
					this.phoneShow = true
					const params = {
						phone:data
					}
					await this.$u.api.phoneCode(params)
				}
			}
		},
	}
</script>

<style lang="scss">

</style>
