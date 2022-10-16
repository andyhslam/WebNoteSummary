import { makeAutoObservable } from "mobx"
import { http, setToken, getToken } from "@/utils"

class LoginStore {
	// 定义数据，先从本地取出token，从而刷新页面不丢失
	token = getToken() || ""
	constructor() {
		// 初始化时，响应式处理数据
		makeAutoObservable(this)
	}
	// 定义操作token的方法
	getToken = async ({ mobile, code }) => {
		// 调用登录接口
		const { data } = await http.post(
			"http://geek.itheima.net/v1_0/authorizations",
			{ mobile, code }
		)
		// 存入token到内存
		this.token = data.token
		// 存入token到本地
		setToken(this.token)
	}
}

export default LoginStore
