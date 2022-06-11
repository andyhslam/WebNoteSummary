import axios from "axios";

const service = axios.create({
    baseURL: "http://127.0.0.1:3333/",
    timeout: 1000
})

// 添加请求拦截器
service.interceptors.request.use(config => { 
    return config;
})

// 添加响应拦截器
service.interceptors.response.use(response => { 
    return response
}, err => { 
    return Promise.reject(err);
})
export default service;