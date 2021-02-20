import axios from 'axios'
import { baseURL } from '@/constants'

// 博客列表
export function list(params) {
  return axios({
    baseURL: baseURL,
    url: '/blog/query',
    params
  })
}

