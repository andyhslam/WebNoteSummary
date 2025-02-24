// const net = require("net")

// const server = net.createServer((socket) => {
// 	// 新加入一个用户，就会产生一个新的socket
// 	// socket.write()是客户端对象的方法，往客户端发送数据
// 	socket.write("hello")

// 	socket.on("data", (chunk) => {
// 		// 服务端接收客户端发送过来的数据
// 		console.log(chunk.toString())
// 	})
// })

// server.on("error", (err) => {
// 	// Handle errors here.
// 	throw err
// })

// // Grab an arbitrary unused port.
// server.listen("9527", () => {
// 	console.log("opened server on", server.address())
// })

const net = require("net")

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on("connection", (client) => {
	client.name = ++clientName
	clients[client.name] = client

	client.on("data", (msg) => {
		// console.log('客户端传来：' + msg);
		broadcast(client, msg.toString())
	})

	client.on("error", (e) => {
		console.log("client error" + e)
		client.end()
	})

	client.on("close", () => {
		delete clients[client.name]
		console.log(client.name + " 下线了")
	})
})

function broadcast(client, msg) {
	for (let key in clients) {
		clients[key].write(client.name + " 说：" + msg)
	}
}

server.listen(9527, "localhost")
