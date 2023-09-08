import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios"
const url: string = ''

interface Result {
    code: number,
    msg: string
}

interface ResultData extends Result {
    data?: any,
    result?: any,
    categories?: any,
    sub?: any,
    tags?: any,
    // result?: any,
    // result?: any,
}

class RequestHttp {
    service: AxiosInstance

    public constructor() {
        //实例创建
        this.service = axios.create({
            baseURL: 'http://www.oceanrainbow.top',
            timeout: 5000,
            withCredentials: true
        })
        //请求拦截
        this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem('token') || ''
            if (token) {
                config.headers.Authorization = token
            }
            return config
        }, (err: AxiosError) => {
            return Promise.reject(err)
        })
        //响应拦截
        this.service.interceptors.response.use((response: AxiosResponse) => {
            const { data } = response
            return data
        }, (err: AxiosError) => {
            return Promise.reject(err)
        })
    }
    //请求方式
    get(url: string, params?: object): Promise<ResultData> {
        return this.service.get(url, { params })
    }
    post(url: string, params?: object): Promise<ResultData> {
        return this.service.post(url, { params })
    }
}

export default new RequestHttp()

