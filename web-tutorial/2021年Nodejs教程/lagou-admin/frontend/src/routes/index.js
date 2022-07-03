// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import SMERouter from "sme-router"
import { index, signup, signin } from "../controllers"

const router = new SMERouter("root")

router.use((req) => {
	$.ajax({
		url: "/api/users/isAuth",
		type: "get", // get请求可省略不写
		dataType: "json", // 因为后端没有给响应首部设置Content-Type，所有在前端使用这个补救方法
		success(result) {
			if (result.ret) {
				router.go("/index")
			} else {
				router.go("/signin")
			}
		},
	})
})

router.route("/", () => {})

router.route("/index", index(router))

router.route("/signup", signup(router)) // 注册

router.route("/signin", signin(router)) // 登录

export default router
