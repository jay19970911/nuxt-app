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

