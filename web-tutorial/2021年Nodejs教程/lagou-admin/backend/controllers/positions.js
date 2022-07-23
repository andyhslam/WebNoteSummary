const moment = require("moment")
const positionsModel = require("../models/positions")

exports.add = async (req, res, next) => {
	res.set("Content-Type", "application/json; charset=utf-8")
	const result = await positionsModel.add({
		...req.body,
		createTime: moment().format("YYYY年MM月DD日, HH:mm:ss a"),
	})
	if (result) {
		res.render("success", {
			succData: JSON.stringify({
				message: "职位添加成功！",
			}),
		})
	} else {
		res.render("fail", {
			failData: JSON.stringify({
				message: "职位添加失败。",
			}),
		})
	}
}

exports.list = async (req, res, next) => {
	const result = await positionsModel.list()
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
