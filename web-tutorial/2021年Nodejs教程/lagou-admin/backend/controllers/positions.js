const moment = require("moment")
const positionsModel = require("../models/positions")

exports.add = async (req, res, next) => {
	res.set("Content-Type", "application/json; charset=utf-8")
	const result = await positionsModel.add({
		...req.body,
		companyLogo: req.companyLogo,
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

// 删除职位
exports.remove = async (req, res, next) => {
	res.set("Content-Type", "application/json; charset=utf-8")
	// 使用delete方法(类似post方法)，从body里面拿到id
	const { id } = req.body
	// 没有await就不会运行
	const result = await positionsModel.remove(id)
	console.log("result", result)
	try {
		if (result.deletedCount > 0) {
			res.render("success", {
				succData: JSON.stringify({
					message: "职位删除成功！",
				}),
			})
		} else {
			res.render("fail", {
				failData: JSON.stringify({
					message: "ID错误，职位删除失败。",
				}),
			})
		}
	} catch (err) {
		res.render("fail", {
			failData: JSON.stringify({
				message: "数据库操作发生错误，职位删除失败。",
			}),
		})
	}
}
