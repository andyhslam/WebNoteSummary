// express同步中间件的实现原理
const middleware1 = (req, res, next) => {
	console.log("middleware1 start")
	next()
}
// const middleware2 = (req, res, next) => {
// 	console.log("middleware2 start")
// 	next()
// }
const middleware2 = (req, res, next) => {
	console.log("middleware2 start")
	new Promise((resolve) => {
		setTimeout(() => resolve(), 1000)
	}).then(() => {
		next()
	})
}
const middleware3 = (req, res, next) => {
	console.log("middleware3 start")
	next()
}

// 通过递归的形式，将后续中间件的执行方法传递给当前中间件，在当前中间件执行结束，通过调用 next() 方法执行后续中间件的调用。

function run(req, res) {
	// 中间件数组
	const middlewares = [middleware1, middleware2, middleware3]
	const next = () => {
		const middleware = middlewares.shift()
		if (middleware) {
			middleware(req, res, next)
		}
	}
	next()
}
run() // 模拟一次请求发起
