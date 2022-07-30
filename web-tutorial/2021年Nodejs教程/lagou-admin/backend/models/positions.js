const { Positions } = require("../utils/db")

exports.add = (data) => {
	// 使用new操作符来添加model，里面的数据是对象
	const position = new Positions(data)
	// 把数据保存到集合里；返回promise，是个异步函数
	return position.save()
}

exports.list = () => {
	return Positions.find({}).sort({ _id: -1 })
}

exports.remove = (id) => {
	// return Positions.findByIdAndRemove(id)
	return Positions.deleteOne({ _id: id })
}

exports.update = (data) => {
	return Positions.findByIdAndUpdate(data.id, data)
}
