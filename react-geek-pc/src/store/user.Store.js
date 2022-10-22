import { makeAutoObservable } from "mobx"
import { http } from "@/utils"

class UserStore {
	userInfo = {}
	constructor() {
		// 响应式处理数据
		makeAutoObservable(this)
	}
	getUserInfo = async () => {
		// 调用接口获取数据
		const { data } = await http.get("/user/profile")
		this.userInfo = data
	}
}

export default UserStore
