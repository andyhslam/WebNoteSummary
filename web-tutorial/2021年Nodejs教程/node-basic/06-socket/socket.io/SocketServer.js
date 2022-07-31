const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

// 后端直接使用前端的静态资源，就不需要前端再启动服务，只要后端启动服务即可。
app.use(express.static("./public"))

app.get("/index", (req, res) => {
	// 上下两处分别走两条路由：'/'和'/index'
	// res.send("index.html")
	res.sendFile(__dirname + "/public/index.html")
})

io.on("connection", (socket) => {
	socket.on("receive", (arg) => {
		socket.broadcast.emit("message", arg)
	})
})

server.listen(3001, "192.168.43.64", () => {
	console.log("listening on *:3001")
})
