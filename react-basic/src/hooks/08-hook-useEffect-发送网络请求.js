/**
 * useEffect - 发送网络请求
 * 语法要求：
 * 不可以直接在useEffect的回调函数外层包裹await，因为异步会导致副作用函数无法立即返回
 * 正确写法：
 * 在内部单独定义一个函数，然后把这个函数包装成同步
 */

import { useEffect } from "react"

function App() {
	// 方法一
	useEffect(() => {
		// json()方法返回一个将响应body解析成JSON的promise
		function fetchData() {
			fetch("http://geek.itheima.net/v1_0/channels")
				.then((response) => response.json())
				.then((data) => console.log(data))
		}
		fetchData()
	}, [])
	// 方法二
	useEffect(() => {
		async function loadData() {
			const res = await fetch("http://geek.itheima.net/v1_0/channels")
			console.log(res)
		}
		loadData()
	}, [])
	return (
		<div>
			<span>useEffect - 发送网络请求</span>
		</div>
	)
}

export default App
