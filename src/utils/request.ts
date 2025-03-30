import axios from 'axios'

// 创建axios实例对象
const request = axios.create({
    baseURL:'/api', // 加上api表示与后端进行交互而不是前端的路径
    timeout:60000
})

// 添加请求拦截器
request.interceptors.request.use(
    (config) => {
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data   // 提取响应中的data（后端返回约定code、msg、data）
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default request
