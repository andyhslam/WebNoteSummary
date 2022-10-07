import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

/**
 * 集中式路由配置
 * 场景: 当我们需要路由权限控制的时候, 对路由数组做一些权限的筛选过滤。
 * 所谓的集中式路由配置就是用一个数组统一把所有的路由对应关系写好，替换Routes组件。
 */
import { BrowserRouter, useRoutes } from "react-router-dom"
import Layout from "./pages/Layout"
import Board from "./pages/Board"
import Article from "./pages/Article"
import NotFound from "./pages/NotFound"

// 1. 准备一个路由数组，数组中定义所有的路由对应关系
const routesList = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <Board />,
				path: "board",
			},
			{
				element: <Article />,
				index: true, // index设置为true 变成默认的二级路由
			},
		],
	},
	// 增加n个路由对应关系
	{
		path: "*",
		element: <NotFound />,
	},
]

// 2. 调用useRoutes方法，并传入routesList，生成Routes组件
function WrapperRoutes() {
	const element = useRoutes(routesList)
	return element
}

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<BrowserRouter>
				{/* 3. 替换之前的Routes组件 */}
				<WrapperRoutes />
			</BrowserRouter>
		</div>
	)
}

export default App
