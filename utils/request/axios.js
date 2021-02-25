import Axios from 'axios'
import { message } from 'ant-design-vue'
import { getErrMsg, getErrStatus } from './status'
import { PROXY } from '@/constants'

const instance = Axios.create({
  baseURL: process.server ? PROXY : '',
  headers: {
    Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjE0MjM2OTA0LCJleHAiOjE2MTQ4NDE3MDR9.bCZ_DDOSBn0nF5EG8JKu6zL-U3YTyPgrxdsY2efemmM'
  }
})

export default async (
  options = {
    method: 'get',
    data: {},
    params: {},
  },
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await instance(options)
      const { data = {} } = response
      resolve(data)
    } catch (e) {
      const status = getErrStatus(e)
      const info = getErrMsg(e)
      if (status === 401) {
        if (process.client) {

        }
      }
      if (process.server) console.error(info)
      else message.error(info)
      reject(info)
    }
  })
}