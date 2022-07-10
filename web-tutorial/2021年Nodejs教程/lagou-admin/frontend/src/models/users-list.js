import http from "../utils/http.js"

export const usersList = async () => {
	try {
		const { result } = await http({ url: "/api/users/list" })
		return result
	} catch (err) {
		throw new Error(err)
	}
}
