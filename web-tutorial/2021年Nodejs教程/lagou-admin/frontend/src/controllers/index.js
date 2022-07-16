import indexTpl from "../views/index.art"
import { auth as authModel } from "../models/auth.js"
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
		} else {
			router.go("/signin")
		}
	}
}

export default index
