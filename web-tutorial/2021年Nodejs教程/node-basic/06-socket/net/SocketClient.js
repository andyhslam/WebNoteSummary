const net = require("net")
const client = net.createConnection({ port: 9527 }, () => {
	// 'connect' listener.
	console.log("connected to server!")
	// 往服务端发送数据
	client.write("world!\r\n")
})

// 客户端接收服务端发送过来的信息
client.on("data", (data) => {
	console.log(data.toString())
	// client.end()
})

client.on("end", () => {
	console.log("disconnected from server")
})
