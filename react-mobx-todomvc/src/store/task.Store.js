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
	/**
	 * 使用普通函数和箭头函数的最大区别是this的指向问题，不过在这个类的构造器中，
	 * 已经对this做了响应式处理，所以在此处使用普通函数和箭头函数都可以。
	 */
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
	// 删除
	delTask = (id) => {
		this.list = this.list.filter((item) => item.id !== id)
	}
	// 新增
	addTask = (task) => {
		this.list.push(task)
	}
}
export default TaskStore
