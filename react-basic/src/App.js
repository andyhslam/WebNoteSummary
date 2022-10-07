import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./views/Home.js"
import About from "./views/About.js"
import Login from "./views/Login.js"

function App() {
	return (
		<div className="App">
			{/* 包裹整个应用，一个React应用只需要使用一次；初始化路由 */}
			<BrowserRouter>
				{/* Link组件用于指定导航链接，完成声明式的路由跳转，类比router-link；to属性用于指定路由地址*/}
				<Link to="/">首页</Link>
				<Link to="/about">关于</Link>
				{/* 路由出口，路由对应的组件会在此进行渲染，类比router-view */}
				<Routes>
					{/* 用于定义路由路径和渲染组件的对应关系，path属性用来指定匹配的路径地址，element属性指定要渲染的组件 */}
					<Route path="/" element={<Home />}></Route>
					{/* 当url路径为‘/about’时，当前路由发生匹配，渲染对应的About组件 */}
					<Route path="/about/:id/:name" element={<About />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
