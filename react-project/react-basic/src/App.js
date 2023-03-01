import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./views/Layout.js"
import Login from "./views/Login.js"
import Article from "./views/Article.js"
import Board from "./views/Board.js"
import NotFound from "./views/NotFound.js"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* 一级路由出口 */}
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* 定义二级路由嵌套，通过结构定义嵌套关系 */}
						<Route path="board" element={<Board />}></Route>
						{/* 默认二级路由：标记index属性，把原本的路径path属性去掉 */}
						<Route index element={<Article />}></Route>
					</Route>
					<Route path="/login" element={<Login />}></Route>
					{/* 当所有路径都没有匹配时，渲染此路由 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
