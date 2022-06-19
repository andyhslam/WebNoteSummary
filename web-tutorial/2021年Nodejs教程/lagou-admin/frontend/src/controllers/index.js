import indexTpl from "../views/index.art"
import loginTpl from "../views/login.art"
import usersTpl from "../views/users.art"

const indexHtml = indexTpl({})
const loginHtml = loginTpl({})
const usersHtml = usersTpl()

const _handleSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		router.go("/index")
	}
}

const _signup = () => {
	const $btnClose = $("#users-close")
	// 提交表单；serialize：序列化表格内容为字符串，用于 Ajax 请求。
	const formData = $("#users-form").serialize()
	$.ajax({
		// api是后端接口，users是分类，signup是具体操作
		url: "/api/users/signup",
		type: "post",
		data: formData,
		success(res) {
			console.log(res)
		},
	})
	$btnClose.click()
}

// 函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const login = (router) => {
	return (req, res, next) => {
		res.render(loginHtml)
		// 因为此处需要一个回调函数，所以_handleSubmit方法需要包装成一个柯里化函数
		$("#login").on("submit", _handleSubmit(router))
	}
}

const index = (router) => {
	return (req, res, next) => {
		res.render(indexHtml)

		// window resize，让页面撑满整个屏幕
		// $(window, ".wrapper").resize()

		// 填充用户列表
		$("#users").html(usersHtml)

		// 点击保存，提交表单
		$("#users-save").on("click", _signup)
	}
}

export { login, index }
