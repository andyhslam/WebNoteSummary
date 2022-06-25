var express = require("express")
var router = express.Router()

const { signup, list } = require("../controllers/users")

router.post("/signup", signup)
router.get("/list", list)

module.exports = router
