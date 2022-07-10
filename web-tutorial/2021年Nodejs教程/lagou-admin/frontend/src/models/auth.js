import http from "../utils/http.js"

export const auth = async () => {
	try {
		const { result } = await http({ url: "/api/users/isAuth" })
		return result
	} catch (err) {
		throw new Error(err)
	}
}
