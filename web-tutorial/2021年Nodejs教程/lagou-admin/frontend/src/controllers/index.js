// 前端webpack编译ES6的import语法
import indexTpl from "../views/index.art"
import signupTpl from "../views/signup.art"
import usersTpl from "../views/users.art"
import usersListTpl from "../views/users-list.art"
import { pagination } from "../components/pagination.js"
import page from "../bus/page.js"
// import router from "../routes"

const indexHtml = indexTpl({})
const signupHtml = signupTpl()
const usersHtml = usersTpl()

const pageSize = page.pageSize
let userList = []

// 函数柯里化；提交注册
const _signupSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		router.go("/index")
	}
}

// 注册用户模块
// 函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const signup = (router) => {
	return (req, res, next) => {
		res.render(signupHtml)
		// 因为此处需要一个回调函数，所以_signupSubmit方法需要包装成一个柯里化函数
		$("#signup").on("submit", _signupSubmit(router))
	}
}

// 注册用户-请求接口
const _signup = () => {
	// 提交表单；serialize：序列化表格内容为字符串，用于Ajax请求。
	const formData = $("#users-form").serialize()
	$.ajax({
		// api是后端接口，users是分类，signup是具体操作
		url: "/api/users/signup",
		type: "post",
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		data: formData,
		success() {
			// 注册成功后的回调
			page.setCurPage(1)
			// 添加数据后渲染
			_loadData()
		},
	})

	// 单击关闭模态框
	const $btnClose = $("#users-close")
	$btnClose.click()
}

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
const _loadData = () => {
	// jquer的ajax返回defer(可以用promise获取数据：return)
	$.ajax({
		url: "/api/users/list",
		type: "get",
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		// async: false,
		// async (默认:true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
		success(result) {
			userList = result.data
			// 分页
			pagination(userList)
			// 用户列表渲染
			_list(page.curPage)
		},
	})
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

	// 点击保存，提交表单
	$("#users-save").on("click", _signup)
}

const _subscribe = () => {
	$("body").on("changeCurPage", (e, pageIndex) => {
		_list(pageIndex)
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
		// 初次渲染数据
		_loadData()

		// 绑定页面事件
		_methods()

		// 订阅事件
		_subscribe()
	}

	// 返回的中间件是给路由准备的
	return (req, res, next) => {
		$.ajax({
			url: "/api/users/isAuth",
			dataType: "json",
			headers: {
				"X-Access-Token": localStorage.getItem("lg-token") || "",
			},
			success(result) {
				if (result.ret) {
					loadIndex(res)
				} else {
					router.go("/signin")
				}
			},
		})
	}
}

export { index, signup }
