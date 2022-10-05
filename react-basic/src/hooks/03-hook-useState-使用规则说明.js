/**
 * useState的使用规则：
 * 1.useState函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态
 * 2.注意事项
 * a.只能出现在函数组件或者其他hook函数中
 * b.不能嵌套在if/for/其它(内部)函数中（react按照hooks的调用顺序识别每一个hook）
 * c.可以通过开发者工具查看hooks状态
 */

import { useState } from "react"

function App() {
	// useState只能在函数组件的最外层执行
	const [count, setCount] = useState(0)
	// 以布尔值为初始值
	const [flag, setFlag] = useState(true)
	// 以字符串为初始值
	const [name, setName] = useState("cp")
	// 以数组为初始值
	const [list, setList] = useState([])
	function test() {
		setCount(count + 1)
		setFlag(false)
		setName("wsp")
		setList([1, 2, 3])
	}
	return (
		<div>
			<button onClick={test}>{count}</button>
			<span>
				flag:{flag ? 1 : 0}; name:{name}; list:{list}
			</span>
		</div>
	)
}

export default App
