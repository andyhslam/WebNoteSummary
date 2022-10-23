import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route,
} from "react-router-dom"
import { lazy, Suspense } from "react"
import { history } from "@/utils"
import AuthRoute from "@/components/AuthRoute.js"

// 按需导入路由组件
const Login = lazy(() => import("@/pages/Login"))
const Layout = lazy(() => import("@/pages/Layout"))
const Home = lazy(() => import("@/pages/Home"))
const Article = lazy(() => import("@/pages/Article"))
const Publish = lazy(() => import("@/pages/Publish"))

function App() {
	return (
		// 路由配置
		<HistoryRouter history={history}>
			<div className="App">
				<Suspense
					fallback={
						<div
							style={{
								textAlign: "center",
								marginTop: 200,
							}}
						>
							loading...
						</div>
					}
				>
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
				</Suspense>
			</div>
		</HistoryRouter>
	)
}

export default App
