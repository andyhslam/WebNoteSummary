<template>
	<view>
		首页 {{vuex_user.name}}
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		 async onLoad() {
			// const res = await this.$u.get('/api/index')
			
			// this.$u.post('/api/auth/wx/bind').then(res => {
			// 	// Promise.then的写法不影响后面代码的执行，所以不需要使用try...catch(e)来捕获异常
			// 	console.log('res-bind', res);
			// })
			
			// try {
			// 	const res = await this.$u.post('/api/auth/login')
			// 	console.log('res-login', res);
			// 	// async...await的写法影响后面代码的执行，所以需要使用try...catch(e)来捕获异常
			// } catch(e) {
			// 	console.log(e);
			// }
			
			// const res = await this.$u.patch('/api/orders/2/confirm')
			// console.log(res);
			
			// 集中管理api
			// const res = await this.$u.api.index()
			// const res = await this.$u.api.authLogin({email: 'test@a.com', password: '123123'})
			// console.log(res);
			
			console.log('vuex_version', this.vuex_version);
			// this.$u.vuex('vuex_name', 'Tom1')
			console.log('vuex_name', this.vuex_name);
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>

</style>
