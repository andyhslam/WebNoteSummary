const net = require("net")

const server = net.createServer((socket) => {
	// 新加入一个用户，就会产生一个新的socket
	// 往客户端发送数据
	socket.write("hello")

	socket.on("data", (chunk) => {
		// 服务端接收客户端发送过来的数据
		console.log(chunk.toString())
	})
})

server.on("error", (err) => {
	// Handle errors here.
	throw err
})

// Grab an arbitrary unused port.
server.listen("9527", () => {
	console.log("opened server on", server.address())
})
