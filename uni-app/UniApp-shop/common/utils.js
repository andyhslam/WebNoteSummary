const install = (Vue, vm) => {
	// 是否登录
	const isLogin =()=>{
		const token = vm.vuex_token
		if(!token) {
			const CurrentPages = getCurrentPages().pop()
			// 获取页面路径和请求参数
			const {options,route} = CurrentPages
			const optionsKeys = Object.keys(options)
			let params = ''
			if(optionsKeys.length !== 0) {
				params = optionsKeys.reduce((pre,current)=>{
					return `${pre}${current}=${options[current]}&`
				},'?').slice(0,-1)
			}
			
			
			uni.setStorageSync('back_url',route + params)
			
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
	
	// 更新用户信息并保存Vuex_user
	const UpdataUser = async ()=>{
		const userInfo = await vm.$u.api.user()
		console.log(userInfo);
		vm.$u.vuex('vuex_user',userInfo)
	}
	
	vm.$u.utils = {
		isLogin,
		UpdataUser
	}
}

export default {
	install
}