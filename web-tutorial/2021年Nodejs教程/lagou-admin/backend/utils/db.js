const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/lagou-admin", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

// 构建users的schema
const usersSchema = mongoose.Schema({
	username: String,
	password: String,
})
const Users = mongoose.model("users", usersSchema)

// 暴露model(Mongoose的model相当于MongoDB的集合)
exports.Users = Users
