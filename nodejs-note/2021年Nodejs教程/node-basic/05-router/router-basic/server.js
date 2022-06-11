const fs = require("fs")
const path = require("path")
const http = require("http")
const mime = require("mime")

const app = http.createServer((req, res) => {
	const urlString = req.url
	/**
	 * 1、返回数据的格式取决于请求文件的类型
	 * 2、请求文件时，在url里面就已经告知文件类型
	 */
	// const type = mime.getType(urlString.split(".")[1])
	const type = mime.getType(path.extname(urlString))
	res.writeHead(200, { "content-type": type })
	// 尽量不要使用readFileSync同步方法，浏览器可能会拒绝请求(报错)
	const file = fs.readFileSync(`.${urlString}`)
	res.end(file)

	// switch (urlString) {
	// 	case "/":
	// 		res.end("hello")
	// 		break
	// 	case "/home":
	// 		fs.readFile("./home.html", (err, content) => {
	// 			res.end(content)
	// 		})
	// 		break
	// 	case "/app.js":
	// 		fs.readFile("./app.js", (err, content) => {
	// 			res.end(content)
	// 		})
	// 		break
	// 	case "/eidolon.png":
	// 		fs.readFile("./eidolon.png", (err, content) => {
	// 			res.end(content)
	// 		})
	// 		break
	// 	default:
	// 		res.end("page 404")
	// }
})

app.listen(8080, () => {
	console.log("localhost:8080")
})
