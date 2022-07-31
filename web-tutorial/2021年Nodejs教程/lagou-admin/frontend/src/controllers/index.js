import indexTpl from "../views/index.art"
import { auth as authModel } from "../models/auth.js"
import pageHeader from "../components/page-header.js"
import page from "../bus/page.js"
// import { io } from "socket.io-client"

import userImage1 from "../assets/img/user1.jpg"
import userImage2 from "../assets/img/user2.jpg"
import userImage3 from "../assets/img/user3.jpg"
import userImage4 from "../assets/img/user4.jpg"
import logoImage from "../assets/img/logo.png"

const index = (router) => {
	// 返回的中间件是给路由准备的
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			// 渲染首页
			const indexHtml = indexTpl({
				subRouter: res.subRoute(),
				userImage1,
				userImage2,
				userImage3,
				userImage4,
				logoImage,
			})
			next(indexHtml)

			// window resize，让页面撑满整个屏幕
			// $(window, ".wrapper").resize()

			// 加载页面导航
			pageHeader()

			// const $lias = $("#sidebar-menu li a")
			// const hash = location.hash
			// // 根据当前的hash值去改变路由高亮
			// $lias
			// 	.filter(`[href="${hash}"]`)
			// 	.parent()
			// 	.addClass("active")
			// 	.siblings()
			// 	.removeClass("active")

			const $lis = $("#sidebar-menu li")
			const hash = location.hash
			// 根据当前的hash值去改变路由高亮
			$lis.find(`[href="${hash}"]`)
				.addClass("active")
				.siblings()
				.removeClass("active")

			// 如果不等就重置page对象
			if (hash !== page.curRoute) {
				page.reset()
			}
			// 保存当前路由
			page.setCurRoute(hash)

			// 绑定登出事件
			$("#users-signout")
				.off("click")
				.on("click", (e) => {
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

			// socket
			const socket = io.connect("http://localhost:3000")
			socket.on("message", function (msg) {
				let num = ~~$("#icon-email").text() // 位运算符
				$("#icon-email").text(++num)
			})
		} else {
			router.go("/signin")
		}
	}
}

export default index
