const express = require("express")
const router = express.Router()

const { add } = require("../controllers/positions.js")

router.post("/add", add)

module.exports = router
