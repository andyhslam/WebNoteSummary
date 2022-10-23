import {
	Card,
	Breadcrumb,
	Form,
	Button,
	Radio,
	Input,
	Upload,
	Space,
	Select,
	message,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { observer } from "mobx-react-lite"
import "./index.scss"
import { useState, useRef, useEffect } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useStore } from "@/store/index.js"
import { http } from "@/utils"

const { Option } = Select

const Publish = () => {
	const [value, setValue] = useState("")
	const { channelStore } = useStore()
	// 存放上传图片的列表
	const [fileList, setFileList] = useState([])
	// 1. 通过useRef创建一个暂存仓库
	const fileListRef = useRef([])
	// 上传成功回调
	const onUploadChange = ({ fileList }) => {
		// 格式化图片数据
		const formatList = fileList.map((file) => {
			// 上传完毕，做数据处理
			if (file.response) {
				return {
					url: file.response.data.url,
				}
			}
			// 正在上传中，不做数据处理
			return file
		})
		// 采取受控的方式，获得后端返回的图片url地址
		setFileList(formatList)
		// 2. 在上传图片完毕时，把图片列表存储到ref仓库
		fileListRef.current = formatList
	}
	// 切换图片
	const [imgCount, setImgCount] = useState(1)
	const radioChange = (e) => {
		/**
		 * useState不是实时更新的，而是异步更新；
		 * 所以不能用imgCount，而是要用原始数据e.target.value作为判断条件。
		 */
		const rawCount = e.target.value
		setImgCount(rawCount)
		// 3.从ref仓库取出对应的图片数量，以数组的形式存入fileList
		if (!fileListRef.current.length) {
			return false
		}
		if (rawCount === 1) {
			const firstImg = fileListRef.current[0]
			setFileList(firstImg ? [firstImg] : [])
		} else if (rawCount === 3) {
			setFileList(fileListRef.current)
		}
	}
	// 提交表单
	const navigate = useNavigate()
	const onFinish = async (values) => {
		// 数据的二次处理 重点是处理cover字段
		const { channel_id, content, title, type } = values
		const params = {
			channel_id,
			content,
			title,
			cover: {
				type,
				images: fileList.map((file) => file.url),
			},
		}
		if (articleId) {
			// 编辑更新
			await http.put(`/mp/articles/${articleId}?draft=false`, params)
		} else {
			// 新增
			await http.post("/mp/articles?draft=false", params)
		}
		// 跳转到文章列表，提示用户
		navigate("/article")
		message.success(`${articleId ? "更新成功" : "发布成功"}`)
	}
	/**
	 * 编辑功能：
	 * 1.通过路由参数拿到文章id
	 * 2.根据文章id是否存在判断是否为编辑状态
	 */
	const [searchParams] = useSearchParams()
	const articleId = searchParams.get("id")
	const formRef = useRef(null)
	// 回显基础数据
	useEffect(() => {
		const loadDetail = async () => {
			const { data } = await http.get(`/mp/articles/${articleId}`)
			const { cover, ...formValue } = data
			// 动态设置表单数据
			formRef.current.setFieldsValue({ ...formValue, type: cover.type })
			// 格式化封面图片数据
			const imgList = cover.images.map((url) => ({ url }))
			// 调用setFileList方法回填upload组件
			setFileList(imgList)
			// 删除图片时，仍要保持最大图片数量
			setImgCount(cover.type)
			// 把封面图片数据存入暂存列表
			// 回显列表fileList和暂存列表fileListRef的数据格式保持一致，就可以完成回填
			fileListRef.current = imgList
		}
		// 编辑状态才发送请求
		if (articleId) {
			loadDetail()
		}
	}, [articleId])
	return (
		<div className="publish">
			<Card
				title={
					<Breadcrumb separator=">">
						<Breadcrumb.Item>
							<Link to="/">首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							{articleId ? "编辑" : "发布"}文章
						</Breadcrumb.Item>
					</Breadcrumb>
				}
			>
				<Form
					ref={formRef}
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ type: 1, content: "this is content" }}
					onFinish={onFinish}
				>
					<Form.Item
						label="标题"
						name="title"
						rules={[{ required: true, message: "请输入文章标题" }]}
					>
						<Input
							placeholder="请输入文章标题"
							style={{ width: 400 }}
						/>
					</Form.Item>
					<Form.Item
						label="频道"
						name="channel_id"
						rules={[{ required: true, message: "请选择文章频道" }]}
					>
						<Select
							placeholder="请选择文章频道"
							style={{ width: 400 }}
						>
							{channelStore.channelList.map((channel) => (
								<Option key={channel.id} value={channel.id}>
									{channel.name}
								</Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item label="封面">
						<Form.Item name="type">
							<Radio.Group onChange={radioChange}>
								<Radio value={1}>单图</Radio>
								<Radio value={3}>三图</Radio>
								<Radio value={0}>无图</Radio>
							</Radio.Group>
						</Form.Item>
						{imgCount > 0 && (
							<Upload
								name="image"
								listType="picture-card"
								className="avatar-uploader"
								showUploadList
								action="http://geek.itheima.net/v1_0/upload"
								fileList={fileList}
								onChange={onUploadChange}
								multiple={imgCount > 1}
								maxCount={imgCount}
							>
								<div style={{ marginTop: 8 }}>
									<PlusOutlined />
								</div>
							</Upload>
						)}
					</Form.Item>
					<Form.Item
						label="内容"
						name="content"
						rules={[{ required: true, message: "请输入文章内容" }]}
					>
						{/* 富文本编辑器已经被Form组件控制，其输入内容会在onFinish回调中收集起来 */}
						<ReactQuill
							className="publish-quill"
							theme="snow"
							placeholder="请输入文章内容"
							value={value}
							onChange={setValue}
						/>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 4 }}>
						<Space>
							<Button
								size="large"
								type="primary"
								htmlType="submit"
							>
								{articleId ? "更新" : "发布"}文章
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default observer(Publish)
