var express = require("express")
var router = express.Router()

const { signup, signin, list, remove } = require("../controllers/users")
const { auth } = require("../middlewares/auth")

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/list", auth, list)
router.delete("/remove", remove)

module.exports = router
