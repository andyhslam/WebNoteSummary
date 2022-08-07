const Router = require("@koa/router")

const router = new Router({
	prefix: "/admin",
})
// 还可以继续引入一个路由，再通过use()定义子路由，实现嵌套路由
// user：命名路由
router.get("user", "/signin/:id", async (ctx, next) => {
	ctx.body = "signin"
	ctx.status = 301
})

module.exports = router
