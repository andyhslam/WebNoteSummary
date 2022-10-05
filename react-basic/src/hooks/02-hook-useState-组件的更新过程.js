/**
 * 组件的更新过程：
 * 1.组件首次渲染
 * a.从头开始执行该组件中的代码逻辑
 * b.调用useState(0)将传入的参数作为状态初始值，即：0
 * c.渲染组件，此时获取到的状态count值为：0
 * 2.组件更新渲染
 * a. 点击按钮，调用setCount(count+1)修改状态，因为状态发生改变，所以该组件会重新渲染
 * b. 组件重新渲染时，会再次执行该组件中的代码逻辑
 * c. 再次调用useState，此时React内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为1
 * d. 再次渲染组件，此时获取到的状态count值为：1
 * 注意：useState的初始值(参数)只在组件首次渲染时生效，以后的每次渲染，useState获取到的都是最新的状态值，React组件会记住每次最新的状态值
 */

import { useState } from "react"

function App() {
	const [count, setCount] = useState(0)
	console.log("count", count)
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	)
}

export default App
