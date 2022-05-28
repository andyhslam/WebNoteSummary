const express = require("express")
const app = express()

/**
 * 使用use方法去挂载路径，从上到下执行，只要有一个匹配，另外的就没机会匹配到
 * 在express里面，把回调函数称为中间件
 * 中间件栈：两个中间件之间形成一个栈；上一个中间件执行next()之后，才能执行下一个中间件
 * 中间件栈：实际执行是从上到下(先进先出)，执行顺序可以看作是队列
 */
const middlewares = [
	(req, res, next) => {
		console.log(0)
		next()
	},
	(req, res, next) => {
		console.log(1)
		next()
	},
	(req, res, next) => {
		console.log(2)
		next()
	},
]

app.use("/", middlewares)
app.use("/ajax", (req, res) => {
	console.log("ajax")
})
app.use("/api", (req, res) => {
	// send自带设置响应头
	res.send("world")
})

app.listen(8080, () => {
	console.log("localhos:8080")
})
