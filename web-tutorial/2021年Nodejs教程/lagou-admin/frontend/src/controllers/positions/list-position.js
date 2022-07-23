import positionsTpl from "../../views/positions.art"
import positionsAddTpl from "../../views/positions-add.art"
import positionsListTpl from "../../views/positions-list.art"

import page from "../../bus/page.js"
import { pagination } from "../../components/pagination.js"
import { auth as authModel } from "../../models/auth.js"
import { positionsList as positionsListModel } from "../../models/positions-list.js"
import { positionsAdd } from "../../models/positions-add.js"

const pageSize = page.pageSize
let positionsList = []

// 渲染list
const _list = (pageNo) => {
	let start = (pageNo - 1) * pageSize
	$("#positions-list").html(
		positionsListTpl({
			data: positionsList.slice(start, start + pageSize),
		})
	)
}

// 加载用户数据
const _loadData = async () => {
	positionsList = await positionsListModel()
	// 分页
	pagination(positionsList)
	// 用户列表渲染
	_list(page.curPage)
}

const _subscribe = () => {
	$("body")
		.off("changeCurPage")
		.on("changeCurPage", (e, pageIndex) => {
			_list(pageIndex)
		})
	// $("body").on("addUser", () => {
	// 	_loadData()
	// })
}

export default (router) => {
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			next()
			res.render(positionsTpl())

			// 初次渲染数据
			_loadData()

			// 订阅事件
			_subscribe()

			// 职位添加
			$("#positions-list-box").after(positionsAddTpl())
			$("#positions-save")
				.off("click")
				.on("click", async () => {
					const formData = $("#positions-form").serialize()
					const result = await positionsAdd(formData)
					$("#positions-close").click()
				})
		} else {
			router.go("/signin")
		}
	}
}
