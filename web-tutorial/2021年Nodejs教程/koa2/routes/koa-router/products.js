const Router = require("@koa/router")

const router = new Router()

router.get("/list", async (ctx, next) => {
	ctx.body = ["shirt", "jeans"]
})

router.post("/add", async (ctx, next) => {
	const data = ctx.request.body
	// ctx.body = data
	await ctx.render("success", {
		data: JSON.stringify(data),
	})
	// await ctx.render("fail.html", {
	// 	message: JSON.stringify("fail"), // 字符串(对象)也能序列化
	// })
	// await ctx.render("test.htm", {
	// 	title: "测试环境",
	// })
})

module.exports = router
