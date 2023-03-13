import request from "@/request"

// 获取所有的帖子
export function getPosts(params) {
    return request({
        method: 'get',
        url: '/posts',
        params
    })
}

// 获取该帖子详情
export function getPostDetail(id) {
    return request({
        method: 'get',
        url: `/posts/detail/${id}`
    })
}

// 根据校区获取帖子
export function getPostByCampus(id, currentPage) {
    return request({
        method: 'get',
        url: `/posts/campus/${id}`,
        params: {
            currentPage: currentPage
        }
    })
}

// 根据种类获取帖子
export function getPostByCategory(id, currentPage) {
    return request({
        method: 'get',
        url: `/posts/category/${id}`,
        params: {
            currentPage: currentPage
        }
    })
}

// 根据日期获取帖子
export function getPostByDate(date, currentPage) {
    return request({
        method: 'get',
        url: `/posts/date/${date}`,
        params: {
            currentPage: currentPage
        }
    })
}

// 获取该用户的帖子
export function getPostByUser(id) {
    return request({
        method: 'get',
        url: `/posts/user`
    })
}

// 发布帖子
export function publish(data) {
    return request({
        method: 'post',
        url: '/posts',
        data
    })
}

// 删除帖子
export function deletePost(id) {
    return request({
        method: 'delete',
        url: `/posts/${id}`
    })
}