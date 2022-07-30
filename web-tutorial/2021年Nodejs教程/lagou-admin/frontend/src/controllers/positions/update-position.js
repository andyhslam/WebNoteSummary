import positionsUpdateTpl from "../../views/positions-update.art"
import page from "../../bus/page.js"
import { positionsAdd as positionsAddModel } from "../../models/positions-add.js"

// 添加职位
export const updatePosition = () => {
	const positionsUpdateHtml = positionsUpdateTpl()
	// 在id为positions-list-box的元素后面，添加模板
	$("#positions-list-box").after(positionsUpdateHtml)
	const _save = async () => {
		try {
			// const result = await positionsAddModel()
			// if (result.ret) {
			// 	// 添加数据后渲染
			// 	page.setCurPage(1)
			// 	// 告知list页面要重新渲染
			// 	$("body").trigger("addPosition")
			// }
			// 单击关闭模态框
			$("#positions-update-close").click()
		} catch (err) {
			throw error(err.message)
		}
	}

	// 点击保存，提交表单
	$("#positions-update-save").off("click").on("click", _save)
}
