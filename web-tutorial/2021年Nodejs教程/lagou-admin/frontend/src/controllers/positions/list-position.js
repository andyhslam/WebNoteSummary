import positionsTpl from "../../views/positions.art"
import positionsAddTpl from "../../views/positions-add.art"
import positionsListTpl from "../../views/positions-list.art"

import { pagination } from "../../components/pagination.js"
import { auth as authModel } from "../../models/auth.js"
import { positionsList } from "../../models/positions-list.js"

export default (router) => {
	return async (req, res, next) => {
		const result = await authModel()
		if (result.ret) {
			next()
			res.render(positionsTpl())

			const list = await positionsList()
			console.log(list)

			// 渲染list
			$("#positions-list").html(
				positionsListTpl({
					data: list,
				})
			)

			// 分页
			pagination(list)

			// 职位添加
			$("#positions-list-box").after(positionsAddTpl())
			$("#positions-save")
				.off("click")
				.on("click", () => {
					const formData = $("#positions-form").serialize()
					console.log(formData)
					$("#positions-close").click()
				})
		} else {
			router.go("/signin")
		}
	}
}
