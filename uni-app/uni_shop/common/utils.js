const install = (Vue, vm) => {
	/* 
		是否登录
	 */
	const isLogin = () => {
		// 如果没有token，就跳转到登录页面
		const token = vm.vuex_token
		if (!token) {
			// 来自哪个页面
			const currentPage = getCurrentPages().pop()
			// 缓存当前页，用于登录或者注册之后的跳转
			uni.setStorageSync('back_url', currentPage.route)
			vm.$u.toast('请登录')
			setTimeout(() => {
				vm.$u.route({
					type: 'redirect',
					url: 'pages/auth/login',
				})
			}, 1500)
			return false
		}
		return true
	}
	
	vm.$u.utils = {
		isLogin,
	};
}

export default {
	install
}