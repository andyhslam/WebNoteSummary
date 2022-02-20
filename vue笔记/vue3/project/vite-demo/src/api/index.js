// import axios from "@/utils/request";
import axios from "../utils/request.js";

export function Login(data) {
    return axios({
        method: 'post',
        url: 'get_login',
        data
    })
}