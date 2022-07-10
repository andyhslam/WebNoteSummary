export const signin = (formData) => {
	return new Promise((resolve) => {
		// jquery的ajax返回defer(可以用promise获取数据)
		$.ajax({
			url: "/api/users/signin",
			type: "post",
			dataType: "json",
			data: formData,
			success(res, textStatus, jqXHR) {
				resolve({ res, jqXHR })
			},
		})
	})
}
