const Router = require("@koa/router")

const router = new Router()

// koa2的中间件全部都是异步函数
router
	.get("/", async (ctx, next) => {
		ctx.body = "home"
	})
	.get(
		"/:id",
		async (ctx, next) => {
			ctx.body = ctx.params.id
			/**
			 * koa2的异步中间件(洋葱模型)：
			 * 1.既可以把上个中间件的信息传给下个中间件
			 * 2.又可以把下个中间件的结果返回给上个中间件
			 */
			const result = await next()
			console.log(result)
		},
		(ctx, next) => {
			console.log("000")
			return 101
		}
	)

module.exports = router
