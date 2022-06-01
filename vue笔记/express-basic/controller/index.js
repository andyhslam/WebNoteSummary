const list = (req, res, next) => {
	// 服务端渲染
	// let data = "<ul>"
	// for (let i = 0; i < 100; i++) {
	// 	data += `<li>line ${i}</li>`
	// }
	// data += "</ul>"

	// 客户端渲染
	let dataObj = {
		ret: true,
		data: [],
	}
	for (let i = 0; i < 100; i++) {
		dataObj.data.push("line" + i)
	}
	res.send(dataObj)
}

exports.list = list
