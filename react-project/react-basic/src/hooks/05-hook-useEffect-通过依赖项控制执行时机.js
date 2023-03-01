/**
 * 通过依赖项控制副作用(useEffect)函数的执行时机
 * 1.默认状态(不添加依赖项)
 * a.组件初始化的时候先执行一次
 * b.等到每次数据修改、组件更新，再次执行
 * 2.添加空数组
 * 只在组件首次渲染时执行一次
 * 3.添加特定依赖项
 * 副作用函数在首次渲染时执行一次，在依赖项发生变化时重新执行
 * 注意：useEffect的回调函数中用到的数据（比如count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现
 * 某种意义上，函数组件中hook的出现，就是想不用类组件的生命周期概念也可以写业务代码。
 */

import { useState, useEffect } from "react"

function App() {
	// useState只能在函数组件的最外层执行
	const [count, setCount] = useState(0)
	const [name, setName] = useState("zs")
	useEffect(() => {
		// 定义副作用
		console.log("副作用执行了")
		document.title = name + count
	}, [name, count])
	// 这种情况下，组件首次渲染时，修改count或者name的值时，都会执行副作用函数

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<button onClick={() => setName("ls")}>{name}</button>
		</div>
	)
}

export default App
