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

			$("#sidebar-menu li:not(:first-child)").on("click", function () {})
		} else {
			router.go("/signin")
		}
	}
}

export default index
