import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { message } from 'antd'

const baseURL = 'http://127.0.0.1:3001/api'

type RequestFn = (url: string, data?: object) => Promise<any>

interface HttpRequest {
    get?: RequestFn
    post?: RequestFn
    delete?: RequestFn
    put?: RequestFn
}

type Method = 'get' | 'post' | 'delete' | 'put'

const methods: Method[] = ['get', 'post', 'delete', 'get']

const http: HttpRequest = {}

methods.forEach(v => {
    http[v] = (url: string, data: any) => {
        const config: AxiosRequestConfig = {
            url,
            method: v,
            baseURL
        }
        const instance = axios.create({
            baseURL
        })
        // 请求拦截
        instance.interceptors.request.use(
            cfg => {
                return cfg
            },
            error => {
                // 错误抛出
                return Promise.reject(error)
            }
        )
        // 结果拦截
        instance.interceptors.response.use(
            res => {
                if (res && res.data) {
                    return res.data
                }
                return res
            },
            error => {
                // 错误抛出
                return Promise.reject(error)
            }
        )

        if (v === 'get' || v === 'delete') {
            config.params = data
        } else {
            config.data = qs.stringify(data)
        }

        return instance.request(config).then(res => {
            return res
        }).catch(err => {
            // 错误集中处理
            message.destroy()
            if (err.response) {
                const errData = err.response.data
                message.error(errData.message)
            } else {
                const msg = err.message === 'Network Error' ? '网络错误' : '未知错误'
                message.error(msg)
            }
            return Promise.reject(err)
        })
    }
})

export default http
