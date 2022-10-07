/**
 * 初始化mobx的步骤：
 * 1.定义数据状态state
 * 2.在构造器中实现数据响应式处理 makeAutoObservble
 * 3.定义修改数据的函数action
 * 4.实例化store并导出
 */

/**
 * 计算属性（衍生状态）的实现步骤：
 * 1.声明一个存在的数据
 * 2.通过get关键词，定义计算属性
 * 3.在makeAutoObservable方法中，标记计算属性
 */

import { makeAutoObservable, computed } from "mobx"

class CounterStore {
	// 1.通过class field的语法来定义实例属性数据
	count = 0
	list = [1, 2, 3, 4, 5, 6]
	constructor() {
		// 2.响应式处理数据
		makeAutoObservable(this, {
			filterList: computed,
		})
	}
	// 定义计算属性
	get filterList() {
		return this.list.filter((item) => item > 2)
	}
	// 3.定义修改数据的方法
	addCount = () => {
		this.count++
	}
	// 修改原数组
	changeList = () => {
		this.list.push(7, 8, 9)
	}
}

// 4.实例化，然后导出给react使用
const counterStore = new CounterStore()
export default counterStore
