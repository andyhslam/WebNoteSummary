const http = require("http")
const url = require("url")
const { createProxyMiddleware } = require("http-proxy-middleware")

const server = http.createServer((req, res) => {
	const urlStr = req.url
	if (/\/newsqa/.test(urlStr)) {
		const proxy = createProxyMiddleware("/newsqa", {
			target: "https://api.inews.qq.com",
			changeOrigin: true,
		})
		proxy(req, res)
	} else if (/^\/api/.test(urlStr)) {
		const apiProxy = createProxyMiddleware("/api", {
			target: "https://apiv2.pinduoduo.com",
			changeOrigin: true,
			// pathRewrite: {
			// 	// 不知道为啥，加这个请求不到数据
			// 	"^/api": "",
			// },
		})
		apiProxy(req, res)
	} else {
		console.log("error")
	}
})

server.listen(8080, () => {
	console.log("localhost:8080")
})
