const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api.shop.eduwork.cn',
		dataType:"json",
		showLoading:true,
		loadingText: '努力加载中~',
		loadingTime: 800,
		originalData:true,
		loadingMask:true,
	});

	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		config.header.Authorization = "Bearer " + vm.vuex_token;
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		const {
			statusCode,
			data} = res
		if (statusCode < 400) {
			// res为服务端返回值，可能有code，result等字段
			return data;
		} else if(statusCode == 400) {
			// 错误请求
			vm.$u.toast(data.message);
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/page/auth/login')
			}, 1500)
			return false
		} else if (statusCode == 401) {
			// 认证通过
			if(data.message == "Unauthorized") {
				vm.$u.toast('账号或密码错误')
			} else {
				// 触发登录相关API,跳转登录
				vm.$u.utils.isLogin()
			}
			return false;
		} else if(statusCode == 422) {
			// 表单验证未通过
			const {errors} = data
			vm.$u.toast(Object.values(errors)[0][0]);
			return false
		} else if(!statusCode) {
			return res;
		} else {
			// 如果返回false，则会调用Promise的reject回调，
			return false;
		}
	}
	
	// patch 请求处理
	vm.$u.patch=(url,params={},header={})=>{
		const _params = {
			...params,
			_method:"PATCH",
			
		}
		return vm.$u.post(url,_params,header)
	 }
}

export default {
	install
}
