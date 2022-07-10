// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import SMERouter from "sme-router"
// 导入中间件
import signin from "../controllers/signin.js"
import { index } from "../controllers/users/index.js"
import { auth as authModel } from "../models/auth.js"

const router = new SMERouter("root")

// 路由守卫：路由切换之前的拦截，防止直接输入路由跳转。
router.use(async () => {
	// 此处只管业务逻辑，不管数据的处理
	const result = await authModel()
	if (result.ret) {
		router.go("/index")
	} else {
		router.go("/signin")
	}
})

// 路由定义
router.route("/", () => {})

router.route("/index", index(router))

router.route("/signin", signin(router))

export default router
