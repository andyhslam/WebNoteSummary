const https = require("https")

https.get("https://www.zhibo8.cc/", (res) => {
	let str = ""
	res.on("data", (chunk) => {
		str += chunk
	})
	res.on("end", () => {
		console.log(str)
	})
})
