import { Button, Input, Table, Space, Popconfirm } from "antd"
import axios from "axios"
import React from "react"
import "./App.css"

const { Search } = Input

class App extends React.Component {
	state = {
		list: [],
		columns: [
			{
				title: "任务编号",
				dataIndex: "id",
				key: "id",
			},
			{
				title: "任务名称",
				dataIndex: "name",
				key: "name",
			},
			{
				title: "任务描述",
				dataIndex: "des",
				key: "des",
			},
			{
				title: "操作",
				render: (text, record) => (
					<Space size="middle">
						<Popconfirm
							title="确定要删除吗?"
							onConfirm={() => this.handleDelete(text, record)}
						>
							<Button type="link" danger>
								删除
							</Button>
						</Popconfirm>
					</Space>
				),
			},
		],
	}

	// 搜索
	onSearch = async (value) => {
		console.log("onSearch", value)
		const res = await axios.get(`http://localhost:3001/data/?q=${value}`)
		this.setState({
			list: res.data,
		})
	}
	// 删除
	handleDelete = async (text, record) => {
		console.log("text", text)
		console.log("record", record)
		await axios.delete(`http://localhost:3001/data/${record.id}`)
		this.loadList()
	}
	// 加载列表
	loadList = async () => {
		const res = await axios.get("http://localhost:3001/data")
		console.log("loadList", res)
		this.setState({
			list: res.data,
		})
	}
	componentDidMount() {
		// 发送接口请求
		this.loadList()
	}
	render() {
		return (
			<div className="container">
				<div className="search-box">
					<Search
						placeholder="请输入关键词"
						allowClear
						enterButton="搜索"
						size="large"
						onChange={this.inputChange}
						value={this.state.keyword}
						onSearch={this.onSearch}
					/>
				</div>
				<Table
					bordered
					dataSource={this.state.list}
					columns={this.state.columns}
					pagination={false}
				/>
			</div>
		)
	}
}

export default App
