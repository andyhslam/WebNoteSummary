import axios from 'axios'

axios.defaults.baseURL = `http://127.0.0.1:3333/`

//请求拦截器(在发送请求前做的处理)
axios.interceptors.request.use(config => {
    return config;
})

//响应拦截器(在响应数据后做的处理)
axios.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.reject(err)
})

export default axios