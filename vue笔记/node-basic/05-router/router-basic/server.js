const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
	const urlString = req.url
	/**
	 * 1、返回数据的格式取决于请求文件的类型
	 * 2、请求文件时，在url里面就已经告知文件类型
	 */
	switch (urlString) {
		case "/":
			res.end("hello")
			break
		case "/home":
			fs.readFile("./home.html", (err, content) => {
				res.end(content)
			})
			break
		case "/app.js":
			fs.readFile("./app.js", (err, content) => {
				res.end(content)
			})
			break
		case "/eidolon.png":
			fs.readFile("./eidolon.png", (err, content) => {
				res.end(content)
			})
			break
		default:
			res.end("page 404")
	}
})

app.listen(8080, () => {
	console.log("localhost:8080")
})
