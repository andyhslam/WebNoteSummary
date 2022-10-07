// 声明式【 Link to】  vs  编程式【调用路由方法进行路由跳转】

// 1.导入一个 useNavigate 钩子函数
import { useNavigate } from "react-router-dom"

function Login() {
	// 2.执行useNavigate函数，得到跳转函数
	const navigate = useNavigate()
	// 3.在事件中，执行跳转函数并传入目标路径，完成路由跳转
	// 注: 如果在跳转时不想添加历史记录，可以添加额外参数replace为true
	function goAbout() {
		// searchParams传参
		// navigate("/about?id=1001", { replace: true })
		// params传参
		navigate("/about/1001/cp", { replace: true })
	}
	return (
		<div>
			<span>login</span>
			<button onClick={goAbout}>跳到关于</button>
		</div>
	)
}

export default Login
