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
	// 全选操作
	allCheck(checked) {
		// 把所有项的isDone属性，按照传入的最新状态修改
		this.list.forEach((item) => {
			item.isDone = checked
		})
	}
	// 计算属性：只有所有子项都是选中的时候，才是选中的状态
	get isAll() {
		return this.list.every((item) => item.isDone)
	}
}
export default TaskStore
