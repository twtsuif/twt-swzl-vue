import axios from 'axios'
import store from '@/store'
import message from "element-ui/packages/message";

// 配置请求路径
const service = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 10000
})

// 请求拦截
service.interceptors.request.use(function (config) {
    // 有token就要携带Authentication
    if (store.state.token) {
        config.headers['Authorization'] = localStorage.token
    }
    return config
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(function (response) {
    const res = response.data;

    if (res.state !== 200) {
        message.error(res.msg)
    }
    return res;
}, function (error) {
    return Promise.reject(error);
});

export default service