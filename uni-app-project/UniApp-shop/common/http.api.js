// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	
	vm.$u.api={}
	// 首页
	vm.$u.api.index = (params = {}) => vm.$u.get('/api/index',params);
	
	// 用户登录
	vm.$u.api.authLogin = (params) => vm.$u.post('/api/auth/login',params);
	// 用户注册
	vm.$u.api.authRegister = (params) => vm.$u.post('/api/auth/register',params);
	// 用户退出登录
	vm.$u.api.authLoginOut = () => vm.$u.post('/api/auth/logout');
	// Oss上传
	vm.$u.api.authOssToken = () => vm.$u.get('/api/auth/oss/token');
	// 用户头像修改
	vm.$u.api.authAvatar = (params) => vm.$u.post('/api/user/avatar',params);
	
	// 用户详情
	vm.$u.api.user = () => vm.$u.get('/api/user');
	// 修改用户信息
	vm.$u.api.userInfoUpdata = (params) => vm.$u.put('/api/user',params);
	// 更换邮箱-验证码
	vm.$u.api.emailCode = (params) => vm.$u.post('/api/auth/email/code',params);
	// 更换邮箱
	vm.$u.api.email = (params) => vm.$u.patch('/api/auth/email/update',params);
	// 绑定手机-验证码
	vm.$u.api.phoneCode = (phone) => vm.$u.post('/api/auth/phone/code',phone);
	// 绑定手机
	vm.$u.api.phone = (params) => vm.$u.patch('/api/auth/phone/update',params);
	
	// 找回密码-邮箱验证码
	vm.$u.api.resetCode = (params) => vm.$u.post('/api/auth/reset/password/email/code',params);
	// 找回密码-通过邮箱验证
	vm.$u.api.reset = (params) => vm.$u.post('/api/auth/reset/password/email',params);
	
	// 商品详情
	vm.$u.api.goodsInfo = (id) => vm.$u.get(`/api/goods/${id}`);
	// 商品收藏
	vm.$u.api.goodsCollect = (id) => vm.$u.post(`/api/collects/goods/${id}`);
	// 商品列表
	vm.$u.api.goodsList = (params) => vm.$u.get("/api/goods",params);
	
	// 添加购物车
	vm.$u.api.goodsCarts = (params) => vm.$u.post("/api/carts",params);
	// 获取购物车列表
	vm.$u.api.goodsCartsList = () => vm.$u.get("/api/carts?include=goods");
	// 购物车数量改变
	vm.$u.api.CartsNum = (cart,params) => vm.$u.put(`/api/carts/${cart}`,params);
	// 删除购物车商品
	vm.$u.api.CartDelete = (cart) => vm.$u.delete(`/api/carts/${cart}`);
	// 购物车改变选中
	vm.$u.api.CartChecked = (params) => vm.$u.patch("/api/carts/checked",params);
	
	// 订单预览
	vm.$u.api.preview = () => vm.$u.get("/api/orders/preview");
	// 提交订单
	vm.$u.api.orders = (params) => vm.$u.post("/api/orders",params);
	// 订单列表
	vm.$u.api.ordersList = (status={},page) => vm.$u.get(`/api/orders?status=${status}&page=${page}`);
	// 订单详情
	vm.$u.api.ordersInfo = (order) => vm.$u.get(`/api/orders/${order}?include=orderDetails.goods,address`);
	// 获取支付二维码
	vm.$u.api.QRcode = (order) => vm.$u.get(`/api/orders/${order}/pay?type=aliyun`);
	// 查询支付状态
	vm.$u.api.status = (order) => vm.$u.get(`/api/orders/${order}/status?timeStamp=${String(Date.now())}`);
	// 查询物流
	vm.$u.api.status = (order) => vm.$u.get(`/api/orders/order${order}/express`);
	
	
	// 添加地址
	vm.$u.api.addAddress = (params) => vm.$u.post("/api/address",params);
	// 地址列表
	vm.$u.api.address = () => vm.$u.get(`/api/address/`);
	// 地址详情
	vm.$u.api.addressInfo = (address) => vm.$u.get(`/api/address/${address}`);
	// 地址信息修改
	vm.$u.api.addressModify = (address,params={}) => vm.$u.put(`/api/address/${address}`,params);
	// 删除地址
	vm.$u.api.addressDelete = (address) => vm.$u.delete(`/api/address/${address}`);
	
	
	// 我的收藏
	vm.$u.api.myCollects = () => vm.$u.get(`/api/collects`);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	// vm.$u.api = {
	// 	index,
	// 	authLogin
	// };
}

export default {
	install
}