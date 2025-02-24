const Router = require("@koa/router")
const { query } = require("../../utils/async-db.js")

const router = new Router({
	prefix: "/lyf",
})
// 还可以继续引入一个路由，再通过use()定义子路由，实现嵌套路由
// user：命名路由
router.get("user", "/login/:id", async (ctx, next) => {
	ctx.body = "login"
	ctx.status = 301
})

router.get("/list", async (ctx, next) => {
	// const query = ctx.request.query
	// const querystring = ctx.request.querystring
	// ctx.body = querystring
	ctx.session.username = "abc"
	const result = await query("select * from users where id=?", [2])
	ctx.body = result
})

router.post("/signup", async (ctx, next) => {
	const body = ctx.request.body
	// sql语句的？是为了防止sql注入
	const result = await query("insert into users set ?", body)
	ctx.session = body
	ctx.body = result
})

router.post("/signin", async (ctx, next) => {
	const result = await parsePostData(ctx)
	// 浏览器v8引擎的搜索环境有URLSearchParams方法，定义在window全局对象
	// nodejs环境也有URLSearchParams类，定义在global全局对象
	const param = new URLSearchParams(result)
	console.log(param.get("username"))
	ctx.body = result
})

// 解析上下文里node原生请求的POST参数
function parsePostData(ctx) {
	return new Promise((resolve, reject) => {
		try {
			let data = ""
			ctx.req.addListener("data", (chunk) => {
				data += chunk
			})
			ctx.req.addListener("end", () => {
				const parseData = parseQueryStr(data)
				resolve(parseData)
			})
		} catch (err) {
			reject(err)
		}
	})
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
	let queryData = {}
	const queryStrList = queryStr.split("&")
	console.log(queryStrList)
	for (let [index, queryStr] of queryStrList.entries()) {
		let itemList = queryStr.split("=")
		queryData[itemList[0]] = decodeURIComponent(itemList[1])
	}
	return queryData
}

module.exports = router
