import { Link } from "react-router-dom"
import {
	Card,
	Breadcrumb,
	Form,
	Button,
	Radio,
	DatePicker,
	Select,
	Table,
	Tag,
	Space,
} from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import "moment/locale/zh-cn"
import locale from "antd/es/date-picker/locale/zh_CN"
import "./index.scss"

import img404 from "@/assets/error.png"
import { useEffect, useState } from "react"
import { http } from "@/utils"

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
	// 频道列表管理
	const [channelList, setChannelList] = useState([])
	const loadChannelList = async () => {
		const { data } = await http.get("/channels")
		setChannelList(data.channels)
	}
	// useEffect的依赖非常必要，否则容易出现循环执行
	// 在里面写了引起组件重新渲染的逻辑，重新渲染又会导致useEffect执行
	useEffect(() => {
		loadChannelList()
	}, [])
	// 文章列表管理：统一管理数据，setArticle({})
	const [article, setArticle] = useState({
		list: [], // 文章列表
		count: 0, // 文章数量
	})
	// 文章参数管理
	const [params, setParams] = useState({
		page: 1,
		per_page: 10,
	})
	/**
	 * 1.如果异步请求函数需要依赖一些数据的变化而重新执行，就把它写到内部。
	 * 2.或者说，只要涉及到异步请求函数，都放到useEffect内部。
	 * 本质区别：
	 * 1.写到useEffect外面，每次组件更新，函数都会重新初始化，造成性能消耗；
	 * 2.写到useEffect里面，只会在依赖项发生变化的时候，函数才会重新初始化，避免性能消耗。
	 * 面试题：
	 * useCallback可以缓存函数，useMemo可以缓存变量；重复渲染的时候，当依赖项不变化，就不会重新声明。
	 */
	useEffect(() => {
		const loadArticleList = async () => {
			const { data } = await http.get("/mp/articles", { params })
			console.log("loadArticleList", data)
		}
		loadArticleList()
	}, [params])
	const onFinish = (values) => {
		console.log("onFinish", values)
	}
	const columns = [
		{
			title: "封面",
			dataIndex: "cover",
			width: 120,
			render: (cover) => {
				return (
					<img src={cover || img404} width={80} height={60} alt="" />
				)
			},
		},
		{
			title: "标题",
			dataIndex: "title",
			width: 220,
		},
		{
			title: "状态",
			dataIndex: "status",
			render: (status) => <Tag color="green">审核通过</Tag>,
		},
		{
			title: "发布时间",
			dataIndex: "pubdate",
		},
		{
			title: "阅读数",
			dataIndex: "read_count",
		},
		{
			title: "评论数",
			dataIndex: "comment_count",
		},
		{
			title: "点赞数",
			dataIndex: "like_count",
		},
		{
			title: "操作",
			/**
			 * render函数参数说明：
			 * 1.如果明确写明dataIndex，此参数就表示该dataIndex所在列的数据；
			 * 2.如果没有写明dataIndex，此参数就表示整个dataSource的数据；
			 */
			render: (data) => {
				return (
					<Space size="middle">
						<Button
							type="primary"
							shape="circle"
							icon={<EditOutlined />}
						/>
						<Button
							type="primary"
							danger
							shape="circle"
							icon={<DeleteOutlined />}
						/>
					</Space>
				)
			},
		},
	]
	const data = [
		{
			id: "8218",
			comment_count: 0,
			cover: {
				images: ["http://geek.itheima.net/resources/images/15.jpg"],
			},
			like_count: 0,
			pubdate: "2019-03-11 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案",
		},
	]
	return (
		<div>
			{/* 筛选区域 */}
			<Card
				title={
					<Breadcrumb separator=">">
						<Breadcrumb.Item>
							<Link to="/home">首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>内容管理</Breadcrumb.Item>
					</Breadcrumb>
				}
				style={{ marginBottom: 20 }}
			>
				<Form onFinish={onFinish} initialValues={{ status: -1 }}>
					<Form.Item label="状态" name="status">
						<Radio.Group>
							<Radio value={-1}>全部</Radio>
							<Radio value={0}>草稿</Radio>
							<Radio value={1}>待审核</Radio>
							<Radio value={2}>审核通过</Radio>
							<Radio value={3}>审核失败</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item label="频道" name="channel_id">
						<Select
							placeholder="请选择文章频道"
							style={{ width: 120 }}
						>
							{channelList.map((channel) => (
								<Option key={channel.id} value={channel.id}>
									{channel.name}
								</Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item label="日期" name="date">
						{/* 传入locale属性 控制中文显示*/}
						<RangePicker locale={locale}></RangePicker>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							style={{ marginLeft: 80 }}
						>
							筛选
						</Button>
					</Form.Item>
				</Form>
			</Card>
			{/* 文章列表区域 */}
			<Card title={`根据筛选条件共查询到 count 条结果：`}>
				<Table rowKey="id" columns={columns} dataSource={data} />
			</Card>
		</div>
	)
}

export default Article
