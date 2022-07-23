// 前端webpack编译ES6的import语法
import usersTpl from "../../views/users.art"
import usersListTpl from "../../views/users-list.art"

import page from "../../bus/page.js"
import { addUser } from "./add-user.js"
import { pagination } from "../../components/pagination.js"
import { auth as authModel } from "../../models/auth.js"
import { usersList as usersListModel } from "../../models/users-list.js"
import { remove } from "../common/index.js"

const usersHtml = usersTpl()
const pageSize = page.pageSize
let state = {
	list: [],
}

// 装填list数据
const _list = (pageNo) => {
	let start = (pageNo - 1) * pageSize
	$("#users-list").html(
		usersListTpl({
			data: state.list.slice(start, start + pageSize),
		})
	)
}

// 加载用户数据
const _loadData = async () => {
	const result = await usersListModel()
	// 要用原来的引用
	state.list = result.data
	// 分页
	pagination(result.data)
	// 用户列表渲染
	_list(page.curPage)
}

const _subscribe = () => {
	$("body").on("changeCurPage", (e, pageIndex) => {
		_list(pageIndex)
	})
	$("body").on("addUser", () => {
		_loadData()
	})
}

const listUser = (router) => {
	const loadListUser = async (res, next) => {
		// 填充用户列表
		next()
		res.render(usersHtml)

		// 点击添加用户
		$("#add-user-btn").on("click", addUser)

		// 初次渲染数据
		await _loadData()

		// 删除用户
		remove({
			$box: $("#users-list"),
			state, // 传递一个引用类型的值state，在删除组件能实时获取数据条数
			url: "/api/users/remove",
			loadData: _loadData,
		})

		// 订阅事件
		_subscribe()
	}

	// 返回的中间件是给路由准备的
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			loadListUser(res, next)
		} else {
			router.go("/signin")
		}
	}
}

export default listUser
