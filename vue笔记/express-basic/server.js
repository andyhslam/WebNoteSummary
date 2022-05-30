const express = require("express")
const bodyParser = require("body-parser")
const router = require("./router/index.js")

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.json())

app.use("/", router)
app.listen(8080, () => {
	console.log("localhost:8080")
})
