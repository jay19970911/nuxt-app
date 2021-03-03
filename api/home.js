import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/api/home/list',
    method: 'get',
    params
  })
}