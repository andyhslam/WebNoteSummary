const mobileModel = require("../models/mobile")

exports.positions = async (req, res, next) => {
	// 因为调用get方法，所以通过req.query获取前端传过来的两个参数
	// 注意：从前端获取的start和pageSize是string类型，所以使用位运算符转换成number类型
	const { start, pageSize } = req.query
	const result = await mobileModel.positions(~~start, ~~pageSize)
	if (result && result.length) {
		// res.json不需要加上res.set()
		res.json(result)
	} else {
		res.render("fail", {
			failData: JSON.stringify({
				message: "获取数据失败。",
			}),
		})
	}
}
