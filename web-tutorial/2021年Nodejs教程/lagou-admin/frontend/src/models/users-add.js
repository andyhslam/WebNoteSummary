import http from "../utils/http.js"

export const usersAdd = async (data) => {
	try {
		const { result } = await http({
			// api是后端接口，users是分类，signup是具体操作
			url: "/api/users/signup",
			type: "post",
			data,
		})
		return result
	} catch (err) {
		throw new Error(err)
	}
}
