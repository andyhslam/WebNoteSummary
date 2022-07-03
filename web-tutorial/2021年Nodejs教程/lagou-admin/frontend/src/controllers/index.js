// 前端webpack编译ES6的import语法
import indexTpl from "../views/index.art"
import signinTpl from "../views/signin.art"
import signupTpl from "../views/signup.art"
import usersTpl from "../views/users.art"
import usersListTpl from "../views/users-list.art"
import usersListPageTpl from "../views/users-page.art"
import router from "../routes"

const indexHtml = indexTpl({})
const signinHtml = signinTpl()
const signupHtml = signupTpl()
const usersHtml = usersTpl()

const pageSize = 2
let curPage = 1
let userList = []

// 函数柯里化
const _handleSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		const formData = $("#signin").serialize()
		$.ajax({
			url: "/api/users/signin",
			type: "post",
			dataType: "json",
			data: formData,
			success(res) {
				if (res.ret) {
					router.go("/index")
				}
			},
		})
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
		data: formData,
		success(res) {
			// 注册成功后的回调
			console.log(res)
			// 添加数据后渲染
			_loadData()
		},
	})

	// 单击关闭模态框
	const $btnClose = $("#users-close")
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
	_setPageActive(curPage)
}

// 加载用户数据
const _loadData = () => {
	// jquer的ajax返回defer(可以用promise获取数据：return)
	$.ajax({
		url: "/api/users/list",
		type: "get",
		// async: false,
		// async (默认:true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
		success(result) {
			userList = result.data
			// 分页
			_pagination(userList)
			// 用户列表渲染
			_list(curPage)
		},
	})
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

// 注册用户模块
// 函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const signup = (router) => {
	return (req, res, next) => {
		res.render(signupHtml)
		// 因为此处需要一个回调函数，所以_handleSubmit方法需要包装成一个柯里化函数
		$("#signup").on("submit", _handleSubmit(router))
	}
}

// 用户登录模块
const signin = (router) => {
	return (req, res, next) => {
		res.render(signinHtml)
		$("#signin").on("submit", _handleSubmit(router))
	}
}

// 设置页码高亮
const _setPageActive = (index) => {
	$("#users-page #users-page-list li:not(:first-child, :last-child)")
		.eq(index - 1)
		.addClass("active")
		.siblings()
		.removeClass("active")
}

const index = () => {
	return (req, res, next) => {
		res.render(indexHtml)

		// window resize，让页面撑满整个屏幕
		// $(window, ".wrapper").resize()

		// 填充用户列表
		$("#users").html(usersHtml)

		// 绑定删除事件，绑定代理
		$("#users-list").on("click", ".remove", function () {
			// 坑：箭头函数的this，其作用域指向会变；普通函数能保证this的作用域指向正确
			$.ajax({
				url: "/api/users/remove",
				type: "delete",
				data: {
					id: $(this).data("id"),
				},
				async success() {
					await _loadData()
					const uls = userList.length
					const isLastPage = Math.ceil(uls / pageSize) === curPage
					const isLastOne = uls % pageSize === 1
					if (uls === 1) {
						curPage = 1
					} else if (isLastPage && isLastOne && curPage > 0) {
						curPage--
					}
				},
			})
		})

		// 绑定分页事件
		$("#users-page").on(
			"click",
			"#users-page-list li:not(:first-child, :last-child)",
			function () {
				// this指向代理的那个元素(li)
				curPage = $(this).index()
				_list(curPage)
				_setPageActive(curPage)
			}
		)

		// 向前翻页
		$("#users-page").on(
			"click",
			"#users-page-list li:first-child",
			function () {
				if (curPage > 1) {
					curPage--
					_list(curPage)
					_setPageActive(curPage)
				}
			}
		)

		// 向后翻页
		$("#users-page").on(
			"click",
			"#users-page-list li:last-child",
			function () {
				if (curPage < Math.ceil(userList.length / pageSize)) {
					curPage++
					_list(curPage)
					_setPageActive(curPage)
				}
			}
		)

		// 绑定登出事件
		$("#users-signout").on("click", (e) => {
			e.preventDefault()
			router.go("/signup")
		})

		// 初次渲染数据
		_loadData()

		// 点击保存，提交表单
		$("#users-save").on("click", _signup)
	}
}

export { index, signup, signin }
