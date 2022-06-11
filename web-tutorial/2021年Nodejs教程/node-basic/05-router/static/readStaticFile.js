const path = require("path")
const mime = require("mime")
const fs = require("fs")

function myReadFile(file) {
	// 在回调函数里面封装异步方法
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) {
				resolve("访问文件夹")
			} else {
				resolve(data)
			}
		})
	})
}

async function readStaticFile(filePathName) {
	const ext = path.parse(filePathName).ext
	const mimeType = mime.getType(ext) ?? "text/html"
	let data
	// 判断文件是否存在
	if (fs.existsSync(filePathName)) {
		if (ext) {
			// myReadFile(filePathName)
			// 	.then((result) => (data = result))
			// 	.catch((err) => (data = err))
			data = await myReadFile(filePathName)
		} else {
			// myReadFile(path.join(filePathName, "/index.html"))
			// 	.then((result) => (data = result))
			// 	.catch((err) => (data = err))
			data = await myReadFile(path.join(filePathName, "/index.html"))
		}
	} else {
		data = "file or folder not found"
	}
	return { mimeType, data }
}

module.exports = readStaticFile
