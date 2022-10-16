import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/pages/Layout"
import Login from "@/pages/Login"
import AuthRoute from "@/components/AuthRoute.js"

function App() {
	return (
		// 路由配置
		<BrowserRouter>
			<div className="App">
				{/* 创建路由path和组件的对应关系 */}
				<Routes>
					{/* 需要鉴权的路由 */}
					<Route
						path="/"
						element={
							<AuthRoute>
								<Layout />
							</AuthRoute>
						}
					></Route>
					{/* 不需要鉴权的路由 */}
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
