/**
 * 模块化机制的实现步骤：
 * 1.拆分模块文件，每个模块中定义自己独立的state/action
 * 2.在store/index.js中导入拆分之后的模块，进行模块组合
 * 3.利用React的useContext机制导出统一的useStore方法，供业务组件使用
 */

import React from "react"
import { CounterStore } from "./counter.js"
import { ListStore } from "./list.js"

// 1. 声明一个RootStore
class RootStore {
	constructor() {
		/**
		 * 在初始化的位置，对子模块进行实例化操作。
		 * 将来实例化RootStore的时候，得到的实例对象就有counterStore和listStore属性。
		 * 这两个属性对应的值，就是导入的子模块实例对象
		 */
		this.counterStore = new CounterStore()
		this.listStore = new ListStore()
	}
}

// 实例化RootStore，得到的根实例对象有counterStore和listStore属性
const rootStore = new RootStore()

/**
 * 使用react的context机制，完成统一方法封装。
 * context机制的数据查找链：
 * 优先从最近的Provider的value属性开始找，如果找不到(因为在这里没有用到Provider做包裹，所以找不到)，
 * 就会继续往下找createContext方法执行时传入的参数。
 */
const context = React.createContext(rootStore)

/**
 * 通过useContext取到rootStore实例对象，然后返回，
 * 只要在业务组件中，调用useStore方法，将获得这个根实例对象。
 * useStore以use开头，符合hook的特性。
 */
const useStore = () => React.useContext(context)
export { useStore }
