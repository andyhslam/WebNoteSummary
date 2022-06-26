var express = require("express")
var router = express.Router()

const { signup, list, remove } = require("../controllers/users")

// router.post("/signup", signup)
// router.get("/list", list)
router.post("/", signup)
router.get("/", list)
router.delete("/", remove)

module.exports = router
