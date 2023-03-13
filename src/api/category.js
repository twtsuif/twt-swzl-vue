import request from "@/request"

// 获得全部种类
export function listCategories(categoryId) {
    return request({
        method: 'get',
        url: `/categories/${categoryId}`
    })
}