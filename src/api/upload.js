import request from "@/request"

// 上传图片
export function upload(data) {
    return request({
        method: 'post',
        url: '/upload',
        data
    })
}