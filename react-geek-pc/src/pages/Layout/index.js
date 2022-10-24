import { Layout, Menu, Popconfirm } from "antd"
import {
	HomeOutlined,
	DiffOutlined,
	EditOutlined,
	LogoutOutlined,
} from "@ant-design/icons"
import "./index.scss"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useStore } from "@/store/index.js"

const { Header, Sider } = Layout

const GeekLayout = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { userStore, loginStore, channelStore } = useStore()
	/**
	 * 此处的依赖项userStore不是响应式，不会变化；
	 * 所以这个副作用函数只在组件首次渲染的时候执行一次。
	 */
	useEffect(() => {
		userStore.getUserInfo()
		channelStore.loadChannelList()
	}, [userStore, channelStore])
	// 确定退出
	const onConfirm = () => {
		loginStore.logout()
		navigate("/login")
	}
	// 菜单项
	const menuItems = [
		{
			label: "数据概览",
			key: "/",
			icon: <HomeOutlined />,
		},
		{
			label: "内容管理",
			key: "/article",
			icon: <DiffOutlined />,
		},
		{
			label: "发布文章",
			key: "/publish",
			icon: <EditOutlined />,
		},
	]
	return (
		<Layout>
			<Header className="header">
				<div className="logo" />
				<div className="user-info">
					<span className="user-name">{userStore.userInfo.name}</span>
					<span className="user-logout">
						<Popconfirm
							onConfirm={onConfirm}
							title="是否确认退出？"
							okText="退出"
							cancelText="取消"
						>
							<LogoutOutlined /> 退出
						</Popconfirm>
					</span>
				</div>
			</Header>
			<Layout>
				<Sider width={200} className="site-layout-background">
					<Menu
						selectedKeys={[pathname]}
						mode="inline"
						theme="dark"
						items={menuItems}
						onClick={(e) => navigate(e.key)}
						style={{ height: "100%", borderRight: 0 }}
					/>
				</Sider>
				{/* 二级路由对应显示 */}
				<Layout className="layout-content" style={{ padding: 20 }}>
					{/* 二级路由出口 */}
					<Outlet />
				</Layout>
			</Layout>
		</Layout>
	)
}

export default observer(GeekLayout)
