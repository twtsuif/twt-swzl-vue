import request from "@/request"

// 发送邮件
export function sendMail(data) {
    return request({
        method: 'post',
        url: '/mail',
        params: {
            content: data
        }
    })
}