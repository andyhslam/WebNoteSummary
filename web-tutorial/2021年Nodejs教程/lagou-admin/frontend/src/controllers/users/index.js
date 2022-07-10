// 前端webpack编译ES6的import语法
import indexTpl from "../../views/index.art"
import usersTpl from "../../views/users.art"
import usersListTpl from "../../views/users-list.art"

import { pagination } from "../../components/pagination.js"
import page from "../../bus/page.js"
import { addUser } from "./add-user.js"
import { auth as authModel } from "../../models/auth.js"
import { usersList as usersListModel } from "../../models/users-list.js"

const indexHtml = indexTpl({})
const usersHtml = usersTpl()

const pageSize = page.pageSize
let userList = []

// 装填list数据
const _list = (pageNo) => {
	let start = (pageNo - 1) * pageSize
	$("#users-list").html(
		usersListTpl({
			data: userList.slice(start, start + pageSize),
		})
	)
}

// 加载用户数据
const _loadData = async () => {
	const result = await usersListModel()
	userList = result.data
	// 分页
	pagination(userList)
	// 用户列表渲染
	_list(page.curPage)
}

// 绑定事件的方法
const _methods = () => {
	// 绑定删除事件，绑定代理
	$("#users-list").on("click", ".remove", function () {
		// 坑：箭头函数的this，其作用域指向会变；普通函数能保证this的作用域指向正确
		$.ajax({
			url: "/api/users/remove",
			type: "delete",
			headers: {
				"X-Access-Token": localStorage.getItem("lg-token") || "",
			},
			data: {
				id: $(this).data("id"),
			},
			async success() {
				await _loadData()
				const uls = userList.length
				const isLastPage = Math.ceil(uls / pageSize) === page.curPage
				const isLastOne = uls % pageSize === 1
				if (uls === 1) {
					page.setCurPage(1)
				} else if (isLastPage && isLastOne && page.curPage > 0) {
					page.setCurPage(page.curPage - 1)
				}
			},
		})
	})

	// 绑定登出事件
	$("#users-signout").on("click", (e) => {
		e.preventDefault()
		// token登出方案
		localStorage.setItem("lg-token", "")
		location.reload()

		// cookie-session登出方案
		// $.ajax({
		// 	url: "/api/users/signout",
		// 	type: "get",
		// 	dataType: "json",
		// 	success(result) {
		// 		if (result.ret) {
		// 			location.reload()
		// 		}
		// 	},
		// })
	})
}

const _subscribe = () => {
	$("body").on("changeCurPage", (e, pageIndex) => {
		_list(pageIndex)
	})
	$("body").on("addUser", () => {
		_loadData()
	})
}

const index = (router) => {
	const loadIndex = (res) => {
		// 渲染首页
		res.render(indexHtml)

		// window resize，让页面撑满整个屏幕
		// $(window, ".wrapper").resize()

		// 填充用户列表
		$("#users").html(usersHtml)
		$("#add-user-btn").on("click", addUser)
		// 初次渲染数据
		_loadData()

		// 绑定页面事件
		_methods()

		// 订阅事件
		_subscribe()
	}

	// 返回的中间件是给路由准备的
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			console.log("_loadData")
			loadIndex(res)
		} else {
			router.go("/signin")
		}
	}
}

export { index }
