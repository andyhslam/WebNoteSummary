const Koa = require("koa")
const views = require("koa-views")
const static = require("koa-static")
const bodyParser = require("koa-bodyparser")
const session = require("koa-session-minimal")
const MysqlSession = require("koa-mysql-session")
const router = require("./routes/koa-router/index.js")
// const logger = require("./middlewares/logger-async.js")

const render = views(__dirname + "/views", {
	// ejs是默认的解析引擎，在这里加上扩展名，等到真正渲染时就不用加了
	extension: "ejs",
	map: {
		htm: "ejs", // 扩展名为htm的文件，使用ejs模板引擎去解析
		html: "ejs", // 扩展名为html的文件，使用ejs模板引擎去解析
	},
})
// 配置存储session信息的mysql
const store = new MysqlSession({
	user: "root",
	password: "123456",
	database: "gp21",
	host: "127.0.0.1",
})
// 存放sessionId的cookie配置
const cookie = {
	maxAge: "", // cookie有效时长
	expires: "", // cookie失效时间
	path: "", // 写cookie所在的路径
	domain: "", // 写cookie所在的域名
	httpOnly: "", // 是否只用于http请求中获取
	overwrite: "", // 是否允许重写
	secure: "",
	sameSite: "",
	signed: "",
}

const app = new Koa()

app.use(bodyParser())
app.use(
	static("./public", {
		index: "index.html",
	})
)
// 使用session中间件
app.use(
	session({
		key: "SESSION_ID",
		store: store,
		cookie: cookie,
	})
)
app.use(render)
// app.use(logger)

// // 任何路由都能访问到中间件；app.use()返回的不是server
// app.use((context, next) => {
// 	// context有node原生的req、res对象，也有封装好的req、res对象。
// 	context.body = "hello koa"
// })

// routes()返回的才是中间件，才能在前端访问接口
app.use(router.routes()).use(router.allowedMethods())

app.listen(3333, "localhost")
