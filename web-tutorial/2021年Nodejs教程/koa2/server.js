const Koa = require("koa")
const app = new Koa()
const router = require("./routes/koa-router/index.js")
// const logger = require("./middlewares/logger-async.js")

// app.use(logger)

// // 任何路由都能访问到中间件；app.use()返回的不是server
// app.use((context, next) => {
// 	// context有node原生的req、res对象，也有封装好的req、res对象。
// 	context.body = "hello koa"
// })

// require("./routes/index.js")

// routes()返回的才是中间件，才能在前端访问接口
app.use(router.routes()).use(router.allowedMethods())

app.listen(3333, "localhost")
