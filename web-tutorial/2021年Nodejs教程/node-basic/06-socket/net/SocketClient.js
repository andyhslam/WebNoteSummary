// const net = require("net")
// const client = net.createConnection({ port: 9527 }, () => {
// 	// 'connect' listener.
// 	console.log("connected to server!")
// 	// 往服务端发送数据
// 	client.write("world!\r\n")
// })

// // 客户端接收服务端发送过来的信息
// client.on("data", (data) => {
// 	console.log(data.toString())
// 	// client.end()
// })

// client.on("end", () => {
// 	console.log("disconnected from server")
// })

let net = require("net")
const readline = require("readline")

let port = 9527
let host = "127.0.0.1"

let socket = new net.Socket()

socket.setEncoding = "UTF-8"

socket.connect(port, host, () => {
	socket.write("hello.")
})

socket.on("data", (msg) => {
	console.log(msg.toString())
	say()
})

socket.on("error", function (err) {
	console.log("error" + err)
})

socket.on("close", function () {
	console.log("connection closeed")
})

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

function say() {
	r1.question("请输入：\n", (inputMsg) => {
		if (inputMsg !== "bye") {
			socket.write(inputMsg + "\n")
		} else {
			socket.destroy()
			r1.close()
		}
	})
}
