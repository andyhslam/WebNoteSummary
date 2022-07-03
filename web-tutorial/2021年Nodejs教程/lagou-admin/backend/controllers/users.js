const usersModel = require("../models/users")
const { hash, compare } = require("../utils/tools")
const randomstring = require("randomstring")

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
		await usersModel.signup({
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

// 用户登录
const signin = async (req, res, next) => {
	const { username, password } = req.body
	const result = await usersModel.findUser(username)
	// 验证是否为合法用户
	if (result) {
		const { password: hash } = result
		// 此处的password指用户传过来的密码，hash指数据库存储的密码，两者进行比较
		const compareResult = await compare(password, hash)
		if (compareResult) {
			const sessionId = randomstring.generate()
			// Set-Cookie是http协议首部字段的名字，功能是可以从后端往前端种cookie
			// cookie的操作：有域名(Path)、有值(sessionId)、有协议(HttpOnly)
			res.set("Set-Cookie", `sessionId=${sessionId}; Path=/; HttpOnly`)
			res.render("success", {
				succData: JSON.stringify({
					username,
				}),
			})
		} else {
			res.render("fail", {
				failData: JSON.stringify({
					message: "密码错误。",
				}),
			})
		}
	} else {
		res.render("fail", {
			failData: JSON.stringify({
				message: "用户名错误。",
			}),
		})
	}
}

// 用户列表
const list = async (req, res, next) => {
	// 后续：可以在前端通过拦截器的方法去做set请求
	res.set("Content-Type", "application/json; charset=utf-8")
	const userList = await usersModel.findList()
	res.render("success", {
		succData: JSON.stringify(userList),
	})
}

// 删除用户
const remove = async (req, res, next) => {
	res.set("Content-Type", "application/json; charset=utf-8")
	// 使用delete方法(类似post方法)，从body里面拿到id
	const { id } = req.body
	// 没有await就不会运行
	const result = await usersModel.remove(id)
	if (result) {
		res.render("success", {
			succData: JSON.stringify({
				message: "用户删除成功！",
			}),
		})
	} else {
		res.render("fail", {
			failData: JSON.stringify({
				message: "用户删除失败。",
			}),
		})
	}
}

exports.signup = signup
exports.signin = signin
exports.list = list
exports.remove = remove
