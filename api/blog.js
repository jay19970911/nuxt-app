// import axios from 'axios'
// import { baseURL } from '@/constants'
import request from '@/utils/request'

// 博客列表
export function list(params) {
  return request({
    url: '/api/blog/query',
    params
  })
}

// 博客详情
export function detail(id) {
  return request({
    url: `/api/blog/detail/${id}`,
    method: 'get'
  })
}

