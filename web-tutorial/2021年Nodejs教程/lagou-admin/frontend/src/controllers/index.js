// 前端webpack编译ES6的import语法
import indexTpl from "../views/index.art"
import loginTpl from "../views/login.art"
import usersTpl from "../views/users.art"
import usersListTpl from "../views/users-list.art"
import usersListPageTpl from "../views/users-page.art"

const indexHtml = indexTpl({})
const loginHtml = loginTpl({})
const usersHtml = usersTpl()

const pageSize = 10
let userList = []

// 函数柯里化
const _handleSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		router.go("/index")
	}
}

// 注册用户
const _signup = () => {
	const $btnClose = $("#users-close")
	// 提交表单；serialize：序列化表格内容为字符串，用于Ajax请求。
	const formData = $("#users-form").serialize()
	$.ajax({
		// api是后端接口，users是分类，signup是具体操作
		url: "/api/users/signup",
		type: "post",
		data: formData,
		success(res) {
			// 注册成功后的回调
			console.log(res)
			// 添加数据后渲染
			_loadData()
		},
	})

	// 单击关闭模态框
	$btnClose.click()
}

// 分页器
const _pagination = (data) => {
	const total = data.length
	const pageCount = Math.ceil(total / pageSize)
	const pageArray = new Array(pageCount)
	const htmlPage = usersListPageTpl({
		pageArray,
	})
	$("#users-page").html(htmlPage)
	$("#users-page-list li:nth-child(2)").addClass("active")
	$("#users-page-list li:not(:first-child, :last-child)").on(
		"click",
		function () {
			// 坑：箭头函数的this，其作用域指向会变；普通函数能保证this的作用域指向正确
			$(this).addClass("active").siblings().removeClass("active")
			_list($(this).index())
		}
	)
}

const _loadData = () => {
	// jquer的ajax返回defer(可以用promise获取数据)
	return $.ajax({
		url: "/api/users/list",
		type: "get",
		// async: false,
		// async (默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
		success(result) {
			userList = result.data
			// 分页
			_pagination(userList)
			// 用户列表渲染
			_list(1)
		},
	})
}

const _list = (pageNo) => {
	let start = (pageNo - 1) * pageSize
	$("#users-list").html(
		usersListTpl({
			data: userList.slice(start, start + pageSize),
		})
	)
}

// 登录；函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const login = (router) => {
	return (req, res, next) => {
		res.render(loginHtml)
		// 因为此处需要一个回调函数，所以_handleSubmit方法需要包装成一个柯里化函数
		$("#login").on("submit", _handleSubmit(router))
	}
}

const index = (router) => {
	return (req, res, next) => {
		res.render(indexHtml)

		// window resize，让页面撑满整个屏幕
		// $(window, ".wrapper").resize()

		// 填充用户列表
		$("#users").html(usersHtml)

		// 初次获取数据
		_loadData()

		// 点击保存，提交表单
		$("#users-save").on("click", _signup)
	}
}

export { login, index }
