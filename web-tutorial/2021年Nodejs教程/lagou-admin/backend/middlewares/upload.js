const fs = require("fs")
const path = require("path")
const multer = require("multer")
const mime = require("mime")

let filename = ""

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/uploads"))
	},
	filename: function (req, file, cb) {
		const ext = mime.getExtension(file.mimetype)
		filename = file.fieldname + "-" + Date.now() + "." + ext
		cb(null, filename)
	},
})

const limits = {
	fileSize: 300 * 1024,
	files: 1,
}

function fileFilter(req, file, cb) {
	/**
	 * 这个函数应该调用 `cb` 用boolean值来指示是否接受该文件
	 * 拒绝这个文件，使用`false`， cb(null, false)
	 * 接受这个文件，使用`true`， cb(null, true)
	 */

	const acceptType = ["png", "jpg", "jpeg", "gif"]
	const fileExt = mime.getExtension(file.mimetype)
	if (!acceptType.includes(fileExt)) {
		// 如果有问题，发送一个错误:
		cb(new Error("不支持该文件类型!"))
	} else {
		cb(null, true)
	}
}

const upload = multer({ storage, limits, fileFilter }).single("companyLogo")

const uploadMiddleware = (req, res, next) => {
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			res.render("fail", {
				failData: JSON.stringify({
					message: "文件过大。",
				}),
			})
		} else if (err) {
			res.render("fail", {
				failData: JSON.stringify({
					message: err.message,
				}),
			})
		} else {
			/**
			 * 前端上传新的图片，就在后端把旧的图片删掉
			 * 新加的字段companyLogo_old不是在model定义的，所以没有显示在数据库
			 */
			const { companyLogo_old } = req.body
			if (filename !== "" && companyLogo_old) {
				try {
					fs.unlinkSync(
						path.join(
							__dirname,
							`../public/uploads/${companyLogo_old}`
						)
					)
				} catch (err) {
					console.log(err)
				}
			}
			req.companyLogo = filename
			next()
		}
	})
}

module.exports = uploadMiddleware
