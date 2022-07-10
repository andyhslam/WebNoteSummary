import page from "../../bus/page.js"
import usersAddTpl from "../../views/users-add.art"

// 添加用户
export const addUser = () => {
	const usersAddHtml = usersAddTpl()
	$("#users-list-box").after(usersAddHtml)
	const _save = () => {
		// 提交表单；serialize：序列化表格内容为字符串，用于Ajax请求。
		const formData = $("#users-form").serialize()
		$.ajax({
			// api是后端接口，users是分类，signup是具体操作
			url: "/api/users/signup",
			type: "post",
			headers: {
				"X-Access-Token": localStorage.getItem("lg-token") || "",
			},
			data: formData,
			success() {
				// 注册成功后的回调
				page.setCurPage(1)
				// 告知list页面要重新渲染
				$("body").trigger("addUser")
				// 单击关闭模态框
				$("#users-close").click()
			},
		})
	}

	// 点击保存，提交表单
	$("#users-save").on("click", _save)
}
