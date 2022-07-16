// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import GP21Router from "gp21-router"
// 导入中间件
import signin from "../controllers/signin.js"
import index from "../controllers/index.js"
import listUser from "../controllers/users/list-user.js"
import listPosition from "../controllers/positions/list-position.js"
import { auth as authModel } from "../models/auth.js"

const router = new GP21Router("root")

// 路由守卫：路由切换之前的拦截，防止直接输入路由跳转。
router.use(async (req) => {
	// 此处只管业务逻辑，不管数据的处理
	const result = await authModel()
	if (result.ret) {
		router.go(req.url)
	} else {
		router.go("/signin")
	}
})

// 路由定义
router.route("/signin", signin(router))

router.route("/index", index(router))
router.route("/index/users", listUser(router))
router.route("/index/positions", listPosition(router))

router.route("*", (req, res, next) => {
	res.redirect("/index/users")
})

export default router
