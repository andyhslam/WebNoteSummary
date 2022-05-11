const http = require("http")
const https = require("https")
const querystring = require("querystring")
const log4js = require("log4js")
log4js.configure({
	appenders: { cheese: { type: "file", filename: "cheese.log" } },
	categories: { default: { appenders: ["cheese"], level: "error" } },
})

const logger = log4js.getLogger("cheese")
logger.level = "debug"

// 在函数式编程里面，createServer是一个高阶函数，能够接收回调函数作为参数
const server = http.createServer((request, response) => {
	// const url = request.url
	// logger.debug(url)

	https.get(
		"https://xiaomiyoupin.com/mtop/mf/resource/data/list",
		(result) => {
			let data = ""
			result.on("data", (chunk) => {
				data += chunk
			})
			result.on("end", () => {
				response.writeHead(200, {
					"content-type": "application/json;charset=utf-8",
				})
				response.write(data)
				response.end()
			})
		}
	)
})

server.listen(8080, () => {
	console.log("localhost:8080")
})
