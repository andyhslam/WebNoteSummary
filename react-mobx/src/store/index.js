/**
 * 模块化机制的实现步骤：
 * 1.拆分模块文件，每个模块中定义自己独立的state/action
 * 2.在store/index.js中导入拆分之后的模块，进行模块组合
 * 3.利用React的useContext机制导出统一的useStore方法，供业务组件使用
 */

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

// 实例化RootStore

// 使用react的context机制，完成统一方法封装。
