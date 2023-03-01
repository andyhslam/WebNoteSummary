/**
 * useContext使用
 * 本节任务：掌握hooks语境下，实现跨组件的context机制
 * 实现步骤：
 * 1.调用createContext方法，创建Context对象
 * 2.在顶层组件通过Provider提供数据
 * 3.在底层组件通过useContext函数获取数据
 */

import { createContext, useState, useContext } from "react"

const Context = createContext()

// 底层组件
function ComA() {
	const count = useContext(Context)
	return (
		<div>
			<p>this is ComA</p>
			<p>顶层组件App传过来的数据：{count}</p>
			<ComC />
		</div>
	)
}

// 底层组件
function ComC() {
	const count = useContext(Context)
	return (
		<div>
			<p>this is ComC</p>
			<p>顶层组件App传过来的数据：{count}</p>
		</div>
	)
}

// 顶层组件
function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<Context.Provider value={count}>
				<ComA />
			</Context.Provider>
			{/* 响应式：提供方修改数据，使用方也能获得更新之后的数据 */}
			<button onClick={() => setCount(count + 10)}>{count}</button>
		</div>
	)
}

export default App
