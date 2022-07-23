import http from "../utils/http.js"

export const positionsAdd = async (data) => {
	try {
		const { result } = await http({
			// api是后端接口，positions是分类，add是具体操作
			url: "/api/positions/add",
			type: "post",
			data,
		})
		return result
	} catch (err) {
		throw new Error(err)
	}
}
