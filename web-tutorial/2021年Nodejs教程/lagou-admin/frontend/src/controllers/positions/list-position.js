import { auth as authModel } from "../../models/auth.js"

export default (router) => {
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			next()
			res.render("position")
		} else {
			router.go("/signin")
		}
	}
}
