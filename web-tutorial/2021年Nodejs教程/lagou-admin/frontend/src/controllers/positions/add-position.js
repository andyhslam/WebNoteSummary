import positionsAddTpl from "../../views/positions-add.art"
import page from "../../bus/page.js"
import { positionsAdd as positionsAddModel } from "../../models/positions-add.js"

// 添加职位
export const addPosition = () => {
	const positionsAddHtml = positionsAddTpl()
	// 在id为positions-list-box的元素后面，添加模板
	$("#positions-list-box").after(positionsAddHtml)
	const _save = async () => {
		// 提交表单；serialize：序列化表格内容为字符串，用于Ajax请求。
		const formData = $("#positions-form").serialize()
		const result = await positionsAddModel(formData)
		if (result.ret) {
			page.setCurPage(1)
			// 告知list页面要重新渲染
			$("body").trigger("addPosition")
			// 单击关闭模态框
			$("#positions-close").click()
		}
	}

	// 点击保存，提交表单
	$("#positions-save").off("click").on("click", _save)
}
