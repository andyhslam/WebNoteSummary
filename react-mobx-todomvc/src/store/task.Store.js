import { makeAutoObservable } from "mobx"
class TaskStore {
	list = [
		{
			id: 1,
			name: "学习react",
			isDone: true,
		},
		{
			id: 2,
			name: "搞定mobx",
			isDone: false,
		},
	]
	constructor() {
		makeAutoObservable(this)
	}
	// 单选操作
	singleCheck(id, isDone) {
		const item = this.list.find((v) => v.id === id)
		item.isDone = isDone
	}
}
export default TaskStore
