/**
 * useEffect函数
 * 作用：为react函数组件提供副作用处理
 * 使用步骤：
 * 1.导入useEffect函数
 * 2.在函数组件中调用useEffect函数，并传入回调函数
 * 3.在回调函数中编写副作用处理（dom操作）
 * 4.修改数据状态更新组件时，副作用也会不断执行
 */

import { useState, useEffect } from "react"

function App() {
	// useState只能在函数组件的最外层执行
	const [count, setCount] = useState(0)
	useEffect(() => {
		// 编写副作用处理
		document.title = count
	})

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	)
}

export default App
