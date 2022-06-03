const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const router = require("./router/index.js")

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.json())

// 静态资源服务中间件(内置中间件)：将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问
app.use(express.static("./public"))

// view engine setup
app.engine("art", require("express-art-template"))
app.set("view options", {
	// 注意此处和官网不一样
	escape: false, // 是个坑，转化HTML5代码
	debug: process.env.NODE_ENV !== "production",
})
app.set("views", path.join(__dirname, "view"))
app.set("view engine", "art")

app.use("/", router)
app.listen(8080, () => {
	console.log("localhost:8080")
})
