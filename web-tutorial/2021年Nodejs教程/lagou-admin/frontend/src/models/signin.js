import http from "../utils/http.js"

export const signin = async (data) => {
	try {
		const { result: res, jqXHR } = await http({
			url: "/api/users/signin",
			type: "post",
			data,
		})
		return { res, jqXHR }
	} catch (err) {
		throw new Error(err)
	}
}
