import signinTpl from "../views/signin.art"
const signinHtml = signinTpl()

// 提交登录；函数柯里化
const _signinSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		const formData = $("#signin").serialize()
		$.ajax({
			url: "/api/users/signin",
			type: "post",
			dataType: "json",
			data: formData,
			success(res, textStatus, jqXHR) {
				// 后端通过响应首部字段把token返回给前端
				const token = jqXHR.getResponseHeader("X-Access-Token")
				localStorage.setItem("lg-token", token)
				if (res.ret) {
					router.go("/index")
				}
			},
		})
	}
}

// 用户登录模块；函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const signin = (router) => {
	return (req, res, next) => {
		res.render(signinHtml)
		// 因为此处需要一个回调函数，所以_signupSubmit方法需要包装成一个柯里化函数
		$("#signin").on("submit", _signinSubmit(router))
	}
}

export default signin
