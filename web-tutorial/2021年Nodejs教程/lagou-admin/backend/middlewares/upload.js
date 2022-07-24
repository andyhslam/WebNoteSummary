const path = require("path")
const multer = require("multer")
const mime = require("mime")

let filename = ""

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/uploads"))
	},
	filename: function (req, file, cb) {
		let ext = mime.getExtension(file.mimetype)
		filename = file.fieldname + "-" + Date.now() + "." + ext
		cb(null, filename)
	},
})

const limits = {
	fileSize: 200 * 1024,
	files: 2,
}

const upload = multer({ storage, limits })
module.exports = upload
