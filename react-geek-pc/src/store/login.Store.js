import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, removeToken } from "@/utils"

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
		const { data } = await http.post("/authorizations", { mobile, code })
		// 存入token到内存
		this.token = data.token
		// 存入token到本地
		setToken(this.token)
	}
	// 退出登录
	logout = () => {
		// 清除实例的token
		this.token = ""
		// 清除本地的token
		removeToken()
	}
}

export default LoginStore
