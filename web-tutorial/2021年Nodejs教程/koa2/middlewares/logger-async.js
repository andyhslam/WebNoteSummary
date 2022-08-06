function log(ctx) {
	console.log(ctx.method, ctx.header.host, ctx.url)
}

async function logger(ctx, next) {
	log(ctx)
	// 等待下一个中间件返回的结果
	await next()
}

module.exports = logger
