const express = require("express")
const router = express.Router()

const {
	add,
	list,
	remove,
	update,
	listone,
} = require("../controllers/positions.js")
const uploadMiddleware = require("../middlewares/upload.js")

// uploadMiddleware.single('companyLogo')中的参数companyLogo，就是前端传过来的表单域的name
router.post("/add", uploadMiddleware, add)
router.get("/list", list)
router.delete("/remove", remove)
router.patch("/update", uploadMiddleware, update)
router.post("/listone", listone)

module.exports = router
