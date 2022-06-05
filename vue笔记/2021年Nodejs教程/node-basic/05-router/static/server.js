// 引入相关模块
const http = require("http")
const path = require("path")
const readStaticFile = require("./readStaticFile.js")

// 搭建 HTTP 服务器
const server = http.createServer(async (req, res) => {
	const urlString = req.url
	const filePathName = path.join(__dirname, "./public", urlString)
	// const filePathName = path.resolve(__dirname, "./public", `.${urlString}`)

	// 读取静态文件
	const { data, mimeType } = await readStaticFile(filePathName)
	res.writeHead(200, { "content-type": `${mimeType};charset=utf-8` })
	res.write(data)
	res.end()
})

// 在 8080 端口监听请求
server.listen(8080, () => {
	console.log("localhost:8080")
})
