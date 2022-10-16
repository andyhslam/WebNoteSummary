import { Card, Form, Input, Button, Checkbox } from "antd"
import logo from "@/assets/logo.png"
import "./index.scss"

function Login() {
	function onFinish(values) {
		// 函数参数values：表单值
		console.log("Success", values)
	}
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo)
	}
	return (
		<div className="login">
			<Card className="login-container">
				<img className="login-logo" src={logo} alt="" />
				{/* 登录表单：
          1. 为 Form 组件添加 validateTrigger 属性，指定校验触发时机的集合
          2. 为 Form.Item 组件添加 name 属性，这样表单校验才会生效 [容易忽略]
          3. 为 Form.Item 组件添加 rules 属性，用来添加表单校验
        */}
				<Form
					name="basic"
					validateTrigger={["onBlur", "onChange"]}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name="mobile"
						rules={[
							{
								required: true,
								message: "请输入手机号!",
							},
							{
								pattern: /^1[3-9]\d{9}$/,
								message: "手机号码格式不对",
								validateTrigger: "onBlur",
							},
						]}
					>
						<Input size="large" placeholder="请输入手机号" />
					</Form.Item>
					<Form.Item
						name="code"
						rules={[
							{
								required: true,
								message: "请输入验证码!",
							},
							{
								len: 6,
								message: "验证码6个字符",
								validateTrigger: "onBlur",
							},
						]}
					>
						<Input size="large" placeholder="请输入验证码" />
					</Form.Item>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox className="login-checkbox-label">
							我已阅读并同意「用户协议」和「隐私条款」
						</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							size="large"
							block
						>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login
