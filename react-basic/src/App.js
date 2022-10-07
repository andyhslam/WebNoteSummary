import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./views/Layout.js"
import Login from "./views/Login.js"
import Article from "./views/Article.js"
import Board from "./views/Board.js"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* 一级路由出口 */}
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* 定义二级路由嵌套，通过结构定义嵌套关系 */}
						<Route path="board" element={<Board />}></Route>
						<Route path="article" element={<Article />}></Route>
					</Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
