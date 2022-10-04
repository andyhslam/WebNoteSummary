/**
 * useState基础使用
 * 1.从react框架导入useState函数
 * 2.在函数组件中调用useState函数，并传入状态的初始值
 * 3.从useState函数的返回值中，拿到状态和修改状态的方法
 * 4.在JSX中展示状态
 * 5.调用修改状态的方法更新状态
 */

import { useState } from "react"

function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	)
}

export default App
