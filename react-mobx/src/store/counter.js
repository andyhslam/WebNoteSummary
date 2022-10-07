/**
 * 初始化mobx的步骤
 * 1.定义数据状态state
 * 2.在构造器中实现数据响应式处理 makeAutoObservble
 * 3.定义修改数据的函数action
 * 4.实例化store并导出
 */

import { makeAutoObservable } from "mobx"

class CounterStore {
	// 1.通过class field的语法来定义实例属性数据
	count = 0
	constructor() {
		// 2.响应式处理数据
		makeAutoObservable(this)
	}
	// 3.定义修改数据的方法
	addCount = () => {
		this.count++
	}
}

// 4.实例化，然后导出给react使用
const counterStore = new CounterStore()
export default counterStore
