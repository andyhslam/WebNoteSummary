import indexTpl from "../views/index.art"
import { auth as authModel } from "../models/auth.js"

const index = (router) => {
	// 返回的中间件是给路由准备的
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			// 渲染首页
			const indexHtml = indexTpl({
				subRouter: res.subRoute(),
			})
			next(indexHtml)

			// window resize，让页面撑满整个屏幕
			// $(window, ".wrapper").resize()

			const $lis = $("#sidebar-menu li")
			$lis.on("click", function () {
				const url = $(this).attr("to")
				router.go(url)
			})
			const hash = location.hash.slice(1)
			$lis.filter(`[to="${hash}"]`)
				.addClass("active")
				.siblings()
				.removeClass("active")
		} else {
			router.go("/signin")
		}
	}
}

export default index
