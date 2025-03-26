import axios from 'axios'

// 创建axios实例对象
const request = axios.create({
    baseURL:'/api',
    timeout:60000
})

request.interceptors.request.use(
    (response) => {
        return response.data
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default request  