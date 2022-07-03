// 载入css
import "./assets/common.css"

// 载入路由
import router from "./routes"

// 第一个打开的页面
$.ajax({
	url: "/api/users/isAuth",
	type: "get",
	dataType: "json", // 因为后端没有给响应首部设置Content-Type，所有在前端使用这个补救方法
	success(result) {
		if (result.ret) {
			router.go("/index")
		} else {
			router.go("/signin")
		}
	},
})
