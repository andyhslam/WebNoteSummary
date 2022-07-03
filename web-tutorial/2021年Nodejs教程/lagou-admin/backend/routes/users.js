var express = require("express")
var router = express.Router()

const {
	signup,
	signin,
	signout,
	list,
	remove,
	isAuth,
} = require("../controllers/users")
const { auth } = require("../middlewares/auth")

// 只有登录接口不需要鉴权
router.post("/signup", auth, signup)
router.post("/signin", signin)
router.get("/signout", auth, signout)
router.get("/list", auth, list)
router.delete("/remove", auth, remove)
router.get("/isAuth", isAuth)

module.exports = router
