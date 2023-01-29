// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {
	// 首页
	const index = (params = {}) => vm.$u.get('/api/index', params);
	
	// 认证相关的
	// 登录
	const authLogin = (params) => vm.$u.post('/api/auth/login', params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		index,
		authLogin,
	};
}

export default {
	install
}