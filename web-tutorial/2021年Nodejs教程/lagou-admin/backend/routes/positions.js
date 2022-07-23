const express = require("express")
const router = express.Router()

const { add, list } = require("../controllers/positions.js")

router.post("/add", add)
router.get("/list", list)

module.exports = router
