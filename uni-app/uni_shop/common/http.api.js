// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {
	// 首页
	const index = (params = {}) => vm.$u.get('/api/index', params);
	
	// 认证相关的
	const authLogin = (params) => vm.$u.post('/api/auth/login', params); // 登录
	const authRegister = (params) => vm.$u.post('/api/auth/register', params); // 注册
	const authLogout = () => vm.$u.post('/api/auth/logout'); // 退出登录
	
	// 用户相关的
	const userInfo = () => vm.$u.get('/api/user'); // 用户详情
	const userInfoUpdate = (params) => vm.$u.put('/api/user', params); // 更新用户信息
	
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		index,
		authLogin,
		authRegister,
		authLogout,
		userInfo,
		userInfoUpdate,
	};
}

export default {
	install
}