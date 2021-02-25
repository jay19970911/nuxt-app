import Vue from "vue"
import request from "@/utils/request"

export default ({ app, store }) => {
  Vue.prototype.$http = app.$http = (options = {}, ...rest) => {
    const { token } = store.stats.user || {}
    if (token) {
      const { headers = {} } = options;
      headers.Authorization = `Bearer ${token}`
      options.headers = headers
    }
    return request(options, ...rest)
  }
}