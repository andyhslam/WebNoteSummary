import http from "../utils/http.js"

export const usersRemove = async (id) => {
	try {
		const { result } = await http({
			url: "/api/users/remove",
			type: "delete",
			data: { id },
		})
		return result
	} catch (err) {
		throw new Error(err)
	}
}
