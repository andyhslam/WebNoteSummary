const usersModel = require("../models/users")
const { hash } = require("../utils/tools")

// 注册用户：数据装填到模板里，渲染到请求页面上
const signup = async (req, res, next) => {
	res.set("Content-Type", "application/json; charset=utf-8")
	const { username, password } = req.body
	// 密码加密
	const bcryptPassword = await hash(password)

	// 判断用户是否存在
	const findResult = await usersModel.findUser(username)
	if (findResult) {
		res.render("fail", {
			failData: JSON.stringify({
				message: "用户名已存在。",
			}),
		})
	} else {
		// 数据库里没有这个用户，开始添加用户
		const result = await usersModel.signup({
			username,
			password: bcryptPassword,
		})
		res.render("success", {
			succData: JSON.stringify({
				message: "注册成功！",
			}),
		})
	}
}

exports.signup = signup
