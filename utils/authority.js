const isBrowser = process.client;
const Cookie = isBrowser ? require("js-cookie") : undefined;

export const tokenKey = "blog_app_token"

export default {
  key: "blog_app",
  get() {
    if (!isBrowser) return {}
    const key = this.key;
    try {
      const dataStr = localStorage.getItem(key);
      if (!dataStr) return {};
      const { value, maxAge, timestamp } = JSON.parse(dataStr)
      const data = maxAge + timestamp > Date.now() ? value : {};
      if (!data) localStorage.removeItem(key); // 超时删除缓存
      return data
    } catch (e) {
      localStorage.removeItem(key)
      return {}
    }
  },
  set(value = {}, maxAge = 60 * 24 * 10) {
    if (!isBrowser) return;
    const key = this.key;
    if (value.token) this.setToken(value.token);
    const data = {
      value: {
        ...this.get(),
        ...value
      },
      maxAge: maxAge * 60000,
      timestamp: Date.now()
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  getToken(token = '') {
    if (Cookie) {
      Cookie.set(tokenKey, token)
    }
  },
  removeToken() {
    if (Cookie) {
      Cookie.remove(tokenKey)
    }
  },
  clear() {
    if (!isBrowser) return;
    const key = this.key;
    const { time = 0 } = this.get();
    localStorage.removeItem(key);
    this.removeToken()
    this.set({ time })
  }
}