import positionsUpdateTpl from "../../views/positions-update.art"
import positionsUpdateFormTpl from "../../views/positions-update-form.art"
import http from "../../utils/http.js"
import { positionsUpdate as positionsUpdateModel } from "../../models/positions-update.js"

// 编辑职位，只渲染模板
export const updatePosition = () => {
	const positionsUpdateHtml = positionsUpdateTpl()
	// 在id为positions-list-box的元素后面，添加模板
	$("#positions-list-box").after(positionsUpdateHtml)
	const _save = async () => {
		try {
			const result = await positionsUpdateModel()
			if (result.ret) {
				// 告知list页面要重新渲染
				$("body").trigger("updatePosition")
			}
			// 单击关闭模态框
			$("#positions-update-close").click()
		} catch (err) {
			throw Error(err.message)
		}
	}

	// 点击保存，提交表单
	$("#positions-update-save").off("click").on("click", _save)
}

// 编辑职位，加载数据
export const fillPositionsUpdateTpl = async (id) => {
	const { result } = await http({
		url: "/api/positions/listone",
		type: "post",
		data: { id },
	})
	$("#positions-update-form").html(
		positionsUpdateFormTpl({
			data: { ...result },
		})
	)
}
