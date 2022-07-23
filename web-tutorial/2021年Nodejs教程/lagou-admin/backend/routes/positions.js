const express = require("express")
const router = express.Router()

const { add, list, remove } = require("../controllers/positions.js")

router.post("/add", add)
router.get("/list", list)
router.delete("/remove", remove)

module.exports = router
