const { Positions } = require("../utils/db")

exports.add = (data) => {
	// 使用new操作符来添加model，里面的数据是对象
	const position = new Positions(data)
	// 把数据保存到集合里；返回promise，是个异步函数
	return position.save()
}
