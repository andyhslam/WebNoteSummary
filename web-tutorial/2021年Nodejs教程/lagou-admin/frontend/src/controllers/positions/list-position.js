import positionsTpl from "../../views/positions.art"
import positionsListTpl from "../../views/positions-list.art"

import page from "../../bus/page.js"
import { pagination } from "../../components/pagination.js"
import { auth as authModel } from "../../models/auth.js"
import { positionsList as positionsListModel } from "../../models/positions-list.js"
import { addPosition } from "./add-position.js"

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
	$("body")
		.off("addPosition")
		.on("addPosition", () => {
			_loadData()
		})
}

const listPositions = (router) => {
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			next()
			res.render(positionsTpl())

			// 初次渲染数据
			_loadData()

			// 订阅事件
			_subscribe()

			// 通过模态框添加职位，不是通过点击添加的
			addPosition()
		} else {
			router.go("/signin")
		}
	}
}

export default listPositions
