const { Users } = require("../utils/db")

// 查找用户
const findUser = (username) => {
	return Users.findOne({ username })
}
// 注册用户
const signup = ({ username, password }) => {
	const users = new Users({
		username,
		password,
	})
	// 返回promise，是个异步函数
	return users.save()
}

exports.signup = signup
exports.findUser = findUser
