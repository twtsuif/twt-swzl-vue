import request from "@/request"

// 发布求助贴
export function publish(data){
	return request({
		method: 'post',
		url: '/asks',
		data
	})
}

// 获取该用户的求助贴
export function getAskByUser(){
	return request({
		method: 'get',
		url: `/asks`
	})
}

// 删除该用户的求助帖
export function deleteAsk(id){
	return request({
		method: 'delete',
		url:`/asks/${id}`
	})
}