/**
 * koa异步中间件的实现原理(洋葱模型)
 * 请求的时候，由外到内去执行代码
 * 响应的时候，通过await next()由内到外去执行代码
 * await next()之前的代码都是在请求的时候执行
 * await next()之后的代码都是在响应的时候执行
 */
const middleware1 = (req, res, next) => {
	console.log("middleware1 start")
	// 所有的中间件都应返回一个Promise对象
	// Promise.resolve()方法接收中间件返回的Promise对象，供下层中间件异步控制
	return next().then(() => {
		console.log("middleware1 end")
	})
}

// 得益于async函数的自动异步流程控制，async函数自动返回Promise对象
const middleware2 = async (req, res, next) => {
	console.log("middleware2 start")
	// await new Promise((resolve) => {
	// 	setTimeout(() => resolve(), 1000)
	// })
	await next()
	console.log("middleware2 end")
}

const middleware3 = async (req, res, next) => {
	console.log("middleware3 start")
	await next()
	console.log("middleware3 end")
}

function run(req, res) {
	// 中间件数组
	const middlewares = [middleware1, middleware2, middleware3]
	const next = () => {
		const middleware = middlewares.shift()
		if (middleware) {
			// 将middleware(req, res, next)包装为Promise对象
			return Promise.resolve(middleware(req, res, next))
		}
	}
	next()
}
run() // 模拟一次请求发起
