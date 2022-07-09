const fs = require("fs")
const path = require("path")
const jwt = require("jsonwebtoken")
const template = require("art-template")
const listModel = require("../model/list.js")

// 应用中间件
const list = (req, res, next) => {
	// 服务端渲染
	// let data = "<ul>"
	// for (let i = 0; i < 100; i++) {
	// 	data += `<li>line ${i}</li>`
	// }
	// data += "</ul>"

	// 客户端渲染
	// let dataObj = {
	// 	ret: true,
	// 	data: [],
	// }
	// for (let i = 0; i < 100; i++) {
	// 	dataObj.data.push("line" + i)
	// }
	// res.send(dataObj)

	// let dataArray = []
	// for (let i = 0; i < 10; i++) {
	// 	dataArray.push("line " + i)
	// }

	// res.set("Content-Type", "application/json;charset=utf-8")

	// res.render("list", { //客户端渲染
	// 	data: JSON.stringify(dataArray),
	// })

	// res.render("list-html", { //服务端渲染
	// 	target: dataArray,
	// })

	const html = template(path.join(__dirname, "../view/list-html.art"), {
		target: listModel,
	})
	fs.writeFileSync(path.join(__dirname, "../public/list.html"), html)
	res.send("pages has been compiled.")
}

const token = (req, res, next) => {
	// HS256对称加密算法：加密和验证的密钥是同一个
	// 验证对称加密的token
	// const tk = jwt.sign({ username: "admin" }, "liruotong")
	// const decoded = jwt.verify(tk, "liruotong")
	// res.send(decoded)

	// RS256非对称加密算法：公钥和私钥不对称，通过私钥加密，再通过公钥验证。
	const privateKey = fs.readFileSync(
		path.join(__dirname, "../keys/rsa_private_key.pem")
	)
	// 私钥加密，通过私钥生成token
	const tk = jwt.sign({ username: "admin" }, privateKey, {
		algorithm: "RS256",
	})

	const publicKey = fs.readFileSync(
		path.join(__dirname, "../keys/rsa_public_key.pem")
	)
	// 公钥解密验证，是模仿客户端
	const result = jwt.verify(tk, publicKey)
	res.send(result)
}

exports.list = list
exports.token = token
