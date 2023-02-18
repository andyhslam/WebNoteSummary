// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {
	// 首页
	const index = (params = {}) => vm.$u.get('/api/index', params);
	
	// 认证相关的
	const authLogin = (params) => vm.$u.post('/api/auth/login', params); // 登录
	const authRegister = (params) => vm.$u.post('/api/auth/register', params); // 注册
	const authLogout = () => vm.$u.post('/api/auth/logout'); // 退出登录
	const authOssToken = () => vm.$u.get('/api/auth/oss/token'); // 获取阿里云OSS Token，用于前端直传文件使用
	
	// 用户相关的
	const userInfo = () => vm.$u.get('/api/user'); // 用户详情
	const userInfoUpdate = (params) => vm.$u.put('/api/user', params); // 更新用户信息
	const userAvatar = (params) => vm.$u.patch('/api/user/avatar', params); // 更新头像
	
	// 商品相关的
	const goodsInfo = (id) => vm.$u.get(`/api/goods/${id}`); // 商品详情
	const goodsCollect = (id) => vm.$u.post(`/api/collects/goods/${id}`); // 收藏和取消
	const goodsList = (params = {}) => vm.$u.get('/api/goods', params); // 商品列表
	
	// 购物车相关的
	const cartAdd = (params) => vm.$u.post('/api/carts', params); // 添加购物车
	const cartList = () => vm.$u.get('/api/carts'); // 购物车列表
	const cartGoodsList = () => vm.$u.get('/api/carts?include=goods'); // 购物车列表(包含额外的数据)
	const cartChecked = (params) => vm.$u.patch('/api/carts/checked', params); // 购物车改变选中
	const cartDelete = (id) => vm.$u.delete(`/api/carts/${id}`); // 移出购物车
	const cartNum = (id, params) => vm.$u.put(`/api/carts/${id}`, params); // 购物车数量改变
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		index,
		authLogin,
		authRegister,
		authLogout,
		authOssToken,
		userInfo,
		userInfoUpdate,
		userAvatar,
		goodsInfo,
		goodsCollect,
		goodsList,
		cartAdd,
		cartList,
		cartGoodsList,
		cartChecked,
		cartDelete,
		cartNum,
	};
}

export default {
	install
}