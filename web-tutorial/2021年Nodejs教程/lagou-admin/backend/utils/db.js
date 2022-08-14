const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/lagou-admin", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	// useFindAndModify: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

// 构建users的model
const usersSchema = mongoose.Schema({
	username: String,
	password: String,
})
// users表示数据表名称或者集合名称
const Users = mongoose.model("users", usersSchema)

// 构建positions的model
const positionsSchema = mongoose.Schema({
	companyLogo: String,
	companyName: String,
	positionName: String,
	city: String,
	salary: String,
	createTime: String,
})
// positions表示数据表名称或者集合名称
const Positions = mongoose.model("positions", positionsSchema)

// 暴露model(Mongoose的model相当于MongoDB的集合)
module.exports = { Users, Positions }
