import { makeAutoObservable } from "mobx"

class ListStore {
	list = ["react", "vue"]
	constructor() {
		// 初始化时，实现数据响应式处理
		makeAutoObservable(this)
	}
	addList = () => {
		this.list.push("angular")
	}
}

export { ListStore }
