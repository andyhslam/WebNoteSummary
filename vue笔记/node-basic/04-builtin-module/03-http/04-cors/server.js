const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
	const urlStr = req.url
	const urlObj = url.parse(urlStr, true)
	switch (urlObj.pathname) {
		case "/api/data":
			res.writeHead(200, {
				"content-type": "application/json;charset=utf-8",
				"Access-Control-Allow-Origin": "*",
			})
			res.write('{"msg": true, "data": "hello"}')
			break
		default:
			res.write("page not found.")
	}
	res.end()
})

server.listen(8080, () => {
	console.log("localhost:8080")
})
