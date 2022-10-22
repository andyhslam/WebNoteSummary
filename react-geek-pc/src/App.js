import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route,
} from "react-router-dom"
import { history } from "@/utils"
import Login from "@/pages/Login"
import Layout from "@/pages/Layout"
import Home from "@/pages/Home"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import AuthRoute from "@/components/AuthRoute.js"

function App() {
	return (
		// 路由配置
		<HistoryRouter history={history}>
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
					>
						{/* 二级路由默认页面 */}
						<Route index element={<Home />}></Route>
						<Route path="article" element={<Article />}></Route>
						<Route path="publish" element={<Publish />}></Route>
					</Route>
					{/* 不需要鉴权的路由 */}
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
		</HistoryRouter>
	)
}

export default App
