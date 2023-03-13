import request from "@/request"


// 获取种类下的标签
export function listTags(categoryId) {
    return request({
        method: 'get',
        url: `/tags/${categoryId}`
    })
}