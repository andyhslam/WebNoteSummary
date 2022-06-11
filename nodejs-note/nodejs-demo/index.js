const http = require("http")
const hostname = "127.0.0.1"
const port = 3001 // 服务器必须有端口，端口用来标识唯一的应用程序进程

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader("Content-Type", "text/plain;charset=utf-8") // 设置编码格式
	res.write("诗词大会")
	res.end()
})

server.listen(port, hostname, () => {
	console.log("服务器已启动")
})
