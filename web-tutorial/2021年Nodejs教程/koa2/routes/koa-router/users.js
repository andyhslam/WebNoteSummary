const Router = require("@koa/router")

const router = new Router({
	prefix: "/usr",
})
// 还可以继续引入一个路由，再通过use定义子路由，实现嵌套路由

router.get("/signin", async (ctx, next) => {
	ctx.body = "signin"
})

module.exports = router
