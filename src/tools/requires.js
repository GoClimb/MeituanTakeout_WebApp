import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

instance.defaults.withCredentials = true

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  alert(error)
})

export default instance
