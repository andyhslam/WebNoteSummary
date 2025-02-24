import { Link, useNavigate } from "react-router-dom"
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
import { useStore } from "@/store/index.js"
import { observer } from "mobx-react-lite"

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
	const { channelStore } = useStore()

	// 文章列表管理：统一管理数据，setArticle({})
	const [articleData, setArticleData] = useState({
		list: [], // 文章列表
		count: 0, // 文章数量
	})
	// 文章参数管理
	// react遵循数据不可变的原则，setState会重新生成一个状态对象。
	const [params, setParams] = useState({
		page: 1,
		per_page: 2,
	})
	/**
	 * 1.如果异步请求函数需要依赖一些数据的变化而重新执行，就把它写到内部。
	 * 2.或者说，只要涉及到异步请求函数，都放到useEffect内部。
	 * 本质区别：
	 * 1.写到useEffect外面，每次组件更新，函数都会重新初始化，造成性能消耗；
	 * 2.写到useEffect里面，只会在依赖项发生变化的时候，函数才会重新初始化，避免性能消耗。
	 * 面试题：
	 * useCallback可以缓存函数，useMemo可以缓存变量；重复渲染的时候，当依赖项不变化，就不会重新声明。
	 * 要点：
	 * 1.useEffect的依赖非常必要，否则容易出现循环执行；
	 * 2.在里面写了引起组件重新渲染的逻辑，重新渲染又会导致useEffect执行。
	 */
	useEffect(() => {
		const loadArticleList = async () => {
			const { data } = await http.get("/mp/articles", { params })
			const { results, total_count } = data
			setArticleData({
				list: results,
				count: total_count,
			})
		}
		loadArticleList()
	}, [params])
	// 筛选功能
	const onSearch = (values) => {
		const { status, channel_id, date } = values
		// 格式化表单数据
		const _params = {}
		if (status !== -1) {
			_params.status = status
		}
		if (channel_id) {
			_params.channel_id = channel_id
		}
		if (date) {
			_params.begin_pubdate = date[0].format("YYYY-MM-DD")
			_params.end_pubdate = date[1].format("YYYY-MM-DD")
		}
		// 修改params参数，触发接口再次发起；整体覆盖原来的对象。
		setParams({
			...params,
			..._params,
		})
	}
	const pageChange = (page, per_page) => {
		// 拿到当前页码及每页条数，修改params，引起接口更新
		setParams({ page, per_page })
	}
	// 编辑文章
	const navigate = useNavigate()
	const goPublish = (data) => {
		navigate(`/publish?id=${data.id}`)
	}
	// 删除文章
	const delArticle = async (data) => {
		await http.delete(`/mp/articles/${data.id}`)
		// 刷新文章列表
		setParams({
			...params,
			page: 1,
		})
	}
	const columns = [
		{
			title: "封面",
			dataIndex: "cover",
			width: 120,
			render: (cover) => {
				return (
					<img
						src={cover.images[0] || img404}
						width={80}
						height={60}
						alt=""
					/>
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
			 * 2.如果没有写明dataIndex，此参数就表示dataSource某一行的数据；
			 */
			render: (data) => {
				return (
					<Space size="middle">
						<Button
							type="primary"
							shape="circle"
							icon={<EditOutlined />}
							onClick={() => goPublish(data)}
						/>
						<Button
							type="primary"
							danger
							shape="circle"
							icon={<DeleteOutlined />}
							onClick={() => delArticle(data)}
						/>
					</Space>
				)
			},
		},
	]
	return (
		<div>
			{/* 筛选区域 */}
			<Card
				title={
					<Breadcrumb separator=">">
						<Breadcrumb.Item>
							<Link to="/">首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>内容管理</Breadcrumb.Item>
					</Breadcrumb>
				}
				style={{ marginBottom: 20 }}
			>
				<Form onFinish={onSearch} initialValues={{ status: -1 }}>
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
							{channelStore.channelList.map((channel) => (
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
			<Card title={`根据筛选条件共查询到 ${articleData.count} 条结果：`}>
				<Table
					rowKey="id"
					columns={columns}
					dataSource={articleData.list}
					pagination={{
						current: params.page,
						pageSize: params.per_page,
						total: articleData.count,
						onChange: pageChange,
					}}
				/>
			</Card>
		</div>
	)
}

export default observer(Article)
