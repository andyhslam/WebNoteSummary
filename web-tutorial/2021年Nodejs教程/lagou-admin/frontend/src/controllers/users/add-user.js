import usersAddTpl from "../../views/users-add.art"
import page from "../../bus/page.js"
import { usersAdd as usersAddModel } from "../../models/users-add.js"

// 添加用户
export const addUser = () => {
	const usersAddHtml = usersAddTpl()
	$("#users-list-box").after(usersAddHtml)
	const _save = async () => {
		// 提交表单；serialize：序列化表格内容为字符串，用于Ajax请求。
		const formData = $("#users-form").serialize()
		const result = await usersAddModel(formData)
		if (result.ret) {
			page.setCurPage(1)
			// 告知list页面要重新渲染
			$("body").trigger("addUser")
			// 单击关闭模态框
			$("#users-close").click()
		}
	}

	// 点击保存，提交表单
	$("#users-save").on("click", _save)
}
