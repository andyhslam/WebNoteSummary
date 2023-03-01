import { Link, Outlet } from "react-router-dom"

function Layout() {
	return (
		<div>
			<h1>Layout</h1>
			{/* 二级路由的path等于 一级path + 二级path  */}
			<Link to="/board" style={{ marginRight: 10 }}>
				board
			</Link>
			{/* 默认二级路由不再具有自己的路径  */}
			<Link to="/">article</Link>
			{/* 二级路由出口 */}
			<Outlet />
		</div>
	)
}

export default Layout
