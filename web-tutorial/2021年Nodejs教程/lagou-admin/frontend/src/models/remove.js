import http from "../utils/http.js"

export const remove = async ({ url, id }) => {
	try {
		const { result } = await http({
			url,
			type: "delete",
			data: { id },
		})
		return result
	} catch (err) {
		throw new Error(err)
	}
}
