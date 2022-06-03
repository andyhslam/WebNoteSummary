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

	let dataArray = []
	for (let i = 0; i < 10; i++) {
		dataArray.push("line " + i)
	}
	res.set("Content-Type", "application/json;charset=utf-8")
	res.render("list", {
		data: JSON.stringify(dataArray),
	})
}

exports.list = list
