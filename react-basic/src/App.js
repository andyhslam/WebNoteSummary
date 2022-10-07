import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./views/Home.js"
import About from "./views/About.js"

function App() {
	return (
		<div className="App">
			{/* 包裹整个应用，一个React应用只需要使用一次；基于h5的history.pushState API实现 */}
			<BrowserRouter>
				{/* Link组件用于指定导航链接，完成声明式的路由跳转，类比router-link；to属性用于指定路由地址*/}
				<Link to="/">首页</Link>
				<Link to="/about">关于</Link>
				{/* 路由出口，路由对应的组件会在此进行渲染，类比router-view */}
				<Routes>
					{/* 用于定义路由路径和渲染组件的对应关系，path属性用来指定匹配的路径地址，element属性指定要渲染的组件 */}
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
