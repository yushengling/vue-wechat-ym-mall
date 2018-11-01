import axios from 'axios'

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 6000
})

// 请求拦截器
Axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
Axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default Axios
