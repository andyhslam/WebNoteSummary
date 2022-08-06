const Koa = require("koa")
const app = new Koa()

// 任何路由都能访问到中间件；app.use()返回的不是server
app.use((context, next) => {
	// context有node原生的req、res对象，也有封装好的req、res对象。
	context.body = "hello koa"
	console.log("context", context.body)
})

app.listen(3333, "localhost")
