const Router = require("@koa/router")

const router = new Router()

router.get("/list", async (ctx, next) => {
	ctx.body = ["shirt", "jeans"]
})

router.post("/add", async (ctx, next) => {
	const data = ctx.request.body
	ctx.body = data
})

module.exports = router
