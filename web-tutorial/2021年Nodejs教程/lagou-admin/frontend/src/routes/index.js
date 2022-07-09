// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import SMERouter from "sme-router"
// 导入中间件
import { index, signup } from "../controllers/index"
import signin from "../controllers/signin"

const router = new SMERouter("root")

// 路由守卫：路由切换之前的拦截，防止直接输入路由跳转。
router.use((req) => {
	$.ajax({
		url: "/api/users/isAuth",
		type: "get", // get请求可省略不写
		dataType: "json", // 因为后端没有给响应首部设置Content-Type，所有在前端使用这个补救方法
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		success(result) {
			if (result.ret) {
				router.go("/index")
			} else {
				router.go("/signin")
			}
		},
	})
})

// 路由定义
router.route("/", () => {})

router.route("/index", index(router))

router.route("/signup", signup(router)) // 注册

router.route("/signin", signin(router)) // 登录

export default router
