export const usersAdd = (formData) => {
	return $.ajax({
		// api是后端接口，users是分类，signup是具体操作
		url: "/api/users/signup",
		type: "post",
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		data: formData,
		success(res) {
			return res
		},
	})
}
