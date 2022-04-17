const express = require("express")
const os = require("os")
const app = express()
app.get("/index", (req, res) => {
	res.json({
		code: 200,
		message: "虞美人123",
		list: os.cpus(),
	})
})
app.listen(9999, () => {
	console.log("index.js======>", "http://localhost:9999/index")
})
