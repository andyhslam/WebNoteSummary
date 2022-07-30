import positionsTpl from "../../views/positions.art"
import positionsListTpl from "../../views/positions-list.art"

import page from "../../bus/page.js"
import { pagination } from "../../components/pagination.js"
import { auth as authModel } from "../../models/auth.js"
import { positionsList as positionsListModel } from "../../models/positions-list.js"
import { addPosition } from "./add-position.js"
import { updatePosition, fillPositionsUpdateTpl } from "./update-position.js"
import { remove } from "../common/index.js"

const pageSize = page.pageSize
let state = {
	list: [],
}

// 渲染list
const _list = (pageNo) => {
	let start = (pageNo - 1) * pageSize
	$("#positions-list").html(
		positionsListTpl({
			data: state.list.slice(start, start + pageSize),
		})
	)
}

// 加载用户数据
const _loadData = async () => {
	state.list = await positionsListModel()
	// 分页
	pagination(state.list)
	// 职位列表渲染
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
	$("body")
		.off("updatePosition")
		.on("updatePosition", () => {
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

			// 删除职位
			remove({
				$box: $("#positions-list"),
				state, // 传递一个引用类型的值state，在删除组件能实时获取数据条数
				url: "/api/positions/remove",
				loadData: _loadData,
			})

			// 编辑职位，只渲染模板
			updatePosition()

			// 编辑职位，加载数据
			$("#positions-list")
				.off("click", ".update")
				.on("click", ".update", function () {
					fillPositionsUpdateTpl($(this).data("id"))
				})
		} else {
			router.go("/signin")
		}
	}
}

export default listPositions
