const usersModel = require("../models/users")

// 注册用户：数据装填到模板里，渲染到请求页面上
const signup = (req, res, next) => {
	const { username, password } = req.body

	usersModel.signup({
		username,
		password,
	})

	res.render("success", {
		dataObj: JSON.stringify({
			username,
			password,
		}),
	})
}

exports.signup = signup
