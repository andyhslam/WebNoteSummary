var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
// var cors = require("cors")
var cookieSession = require("cookie-session")
var app = express()

// const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users.js")
const positionsRouter = require("./routes/positions.js")
const mobileRouter = require("./routes/mobile.js")

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
// app.use(cors()) // 解决浏览器跨越问题

// 设置cookie-session
// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["key1", "key2"],
// 	})
// )

// app.use('/', indexRouter)
app.use("/api/users", usersRouter)
app.use("/api/positions", positionsRouter)
app.use("/mobile", mobileRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

module.exports = app
