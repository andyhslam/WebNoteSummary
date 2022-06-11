const http = require("http")
const options = { hostname: "www.lezijie.com", port: 80, method: "post" }

const req = http.request(options, function (res) {
	res.on("data", function (chunk) {
		console.log(chunk.toString())
	})
})

req.on("error", function (err) {
	console.log("出错了", err.message)
})

req.end()
