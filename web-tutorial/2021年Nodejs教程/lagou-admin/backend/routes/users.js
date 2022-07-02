var express = require("express")
var router = express.Router()

const { signup, signin, list, remove } = require("../controllers/users")

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/list", list)
router.delete("/remove", remove)

module.exports = router
