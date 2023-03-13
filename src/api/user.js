import request from "@/request"

// 获取该用户信息
export function getUserById(id){
	return request({
		method: 'get',
		url: `/user/info/${id}`
	})
}

// 获取该用户匹配到的帖子
export function getUserPost(){
	return request({
		method: 'get',
		url: `/user/ask`
	})
}

// 删除该用户匹配到的帖子
export function deleteUserPost(id){
	return request({
		method: 'delete',
		url: `/user/${id}`
	})
}

// 获取用户信息
export function getUserInfo(data){
	return request({
		method: 'post',
		url: '/account',
		data
	})
}

// 更改用户头像
export function updateUserInfo(data){
	return request({
		method: 'put',
		url: '/user/update',
		data
	})
}