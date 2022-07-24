const express = require("express")
const router = express.Router()

const { add, list, remove } = require("../controllers/positions.js")
const upload = require("../middlewares/upload.js")

// upload.single('companyLogo')中的参数companyLogo，就是前端传过来的表单域的name
router.post("/add", upload.single("companyLogo"), add)
router.get("/list", list)
router.delete("/remove", remove)

module.exports = router
