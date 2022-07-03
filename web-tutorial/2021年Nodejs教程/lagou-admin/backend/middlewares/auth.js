const auth = (req, res, next) => {
	if (req.session.username) {
		// 如果存在说明session没过期，该用户还保存登录的状态
		next() // 交给下一个中间件
	} else {
		res.render("fail", {
			failData: JSON.stringify({
				message: "请登录。",
			}),
		})
	}
}

exports.auth = auth
