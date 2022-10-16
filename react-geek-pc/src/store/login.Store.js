import { makeAutoObservable } from "mobx"
import { http } from "@/utils"

class LoginStore {
	// 定义数据
	token = ""
	constructor() {
		// 初始化时，响应式处理数据
		makeAutoObservable(this)
	}
	// 定义操作token的方法
	getToken = async ({ mobile, code }) => {
		// 调用登录接口，获得数据之后，存入token
		const { data } = await http.post(
			"http://geek.itheima.net/v1_0/authorizations",
			{ mobile, code }
		)
		this.token = data.token
	}
}

export default LoginStore
