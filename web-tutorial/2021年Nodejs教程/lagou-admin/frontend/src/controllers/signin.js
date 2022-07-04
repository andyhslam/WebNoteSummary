import signinTpl from "../views/signin.art"
const signinHtml = signinTpl()

// 提交登录
const _signinSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		const formData = $("#signin").serialize()
		$.ajax({
			url: "/api/users/signin",
			type: "post",
			dataType: "json",
			data: formData,
			success(res) {
				if (res.ret) {
					router.go("/index")
				}
			},
		})
	}
}

// 用户登录模块
const signin = (router) => {
	return (req, res, next) => {
		res.render(signinHtml)
		$("#signin").on("submit", _signinSubmit(router))
	}
}

export default signin
