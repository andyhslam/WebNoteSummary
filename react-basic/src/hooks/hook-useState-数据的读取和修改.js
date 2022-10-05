/**
 * useState基础使用：
 * 1.从react框架导入useState函数
 * 2.在函数组件中调用useState函数，并传入状态的初始值
 * 3.从useState函数的返回值中，拿到状态和修改状态的方法
 * 4.在JSX中展示状态
 * 5.调用修改状态的方法更新状态
 */

import { useState } from "react"

function App() {
	/**
	 * 状态的读取和修改：
	 * 1.useState(0)传过来的参数，作为count的初始值，只在第一次执行时生效
	 * 2.useState(0)的返回值是一个数值，可以用解构赋值的方式获得[count, setCount]
	 * 3.[count, setCount]中两个变量的名字可以自定义，只要保持语义化
	 * 4.[count, setCount]中两个变量的顺序不可以调换
	 * 5.count表示数据状态，setCount表示修改数据的方法（专有函数）
	 * 6.注意：修改状态的时候，一定要使用新的状态替换旧的状态【即只能通过setCount(基于原值计算得到的新值)】，不能直接修改旧的状态，尤其是引用类型
	 * 7.count和setCount是绑定在一起的，setCount只能用来修改对应的count值
	 */
	const [count, setCount] = useState(0)
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	)
}

export default App
