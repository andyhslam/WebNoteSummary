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

const findList = () => {
	return Users.find().sort({ _id: -1 })
}

exports.signup = signup
exports.findUser = findUser
exports.findList = findList
