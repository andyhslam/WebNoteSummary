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
 * 4.清理副作用
 * 可以在副作用函数的第一个参数的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
 * 执行时机为：
 * a.组件卸载时自动执行
 * b.组件更新时，下一个useEffect副作用函数执行之前自动执行
 */

import { useState, useEffect } from "react"

function Test() {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("开启定时器")
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	})
	return <div>this is test</div>
}

function App() {
	const [flag, setFlag] = useState(true)
	return (
		<div>
			{flag ? <Test /> : null}
			<button onClick={() => setFlag(!flag)}>switch</button>
		</div>
	)
}

export default App
