import http from "../utils/http.js"

export const positionsList = async () => {
	try {
		const { result } = await http({ url: "/api/positions/list" })
		return result
	} catch (err) {
		throw new Error(err)
	}
}
