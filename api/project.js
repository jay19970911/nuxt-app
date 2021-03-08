import request from '@/utils/request'

// 项目列表
export function list(params) {
  return request({
    url: '/api/project/query',
    method: 'get',
    params
  })
}

// 详情接口
export function detail(id) {
  return request({
    url: `/api/project/detail/${id}`,
    method: 'get'
  })
}