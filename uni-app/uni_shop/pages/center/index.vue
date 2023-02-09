<template>
	<view>
		个人中心
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// 如果没有token，就跳转到登录页面
			const token = this.vuex_token
			if (!token) {
				this.$u.toast('请登录')
				setTimeout(() => {
					this.$u.route({
						type: 'redirect',
						url: 'pages/auth/login',
					})
				}, 1500)
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>