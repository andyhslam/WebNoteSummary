// 这里的Vue为Vue对象(非创建出来的实例)，vm为一个Vue的实例，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api.shop.eduwork.cn', // 请求的本域名
		// method: 'POST',
		// 设置为json，返回后会对数据进行一次JSON.parse()
		dataType: 'json',
		showLoading: true, // 是否显示请求中的loading
		loadingText: '请求中...', // 请求loading中的文字提示
		loadingTime: 200, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 配置请求头信息
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
	});
	
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;
		config.header.Authorization = 'Bearer ' + vm.vuex_token;
		
		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;
		
		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;
		
		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		
		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		if(config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}
	
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		const {statusCode, data} = res
		if(statusCode < 400) {
			// res为服务端返回值，可能有statusCode, data等字段
			// 这里对data进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res得到
			// 如果配置了originalData为true，请留意这里的返回值
			return data;
		} else if(statusCode == 400) {
			//（错误请求）服务器不理解请求的语法。
			vm.$u.toast(data.message);
			return false;
		} else if(statusCode == 401) {
			//（未授权）请求要求身份验证。
			// 401的情况有两种：一种是认证未通过；一种是没有token或者token过期
			if (data.message === 'Unauthorized') {
				vm.$u.toast('账号或密码错误');
			} else {
				// 如果请求需要登录的API，就跳转到登录页
				vm.$u.utils.isLogin()
			}
			return false;
		} else if(statusCode == 422) {
			//（验证错误）请求参数未通过验证
			vm.$u.toast(Object.values(data.errors).flat().shift());
			return false;
		}  else {
			// 如果返回false(即出现异常的情况)，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			return false;
		}
	}
	
	// 增加patch请求
	vm.$u.patch = (url, params = {}, header = {}) => {
		// 模拟patch请求
		const _params = {
			...params,
			_method: 'PATCH',
		}
		return vm.$u.post(url, _params, header)
	}
}

export default {
	install
}