export const isDev = process.env.NODE_ENV === "development"

const apiMap = {
  development: "http://localhost:3010",
  testing: "",
  production: ""
}

export const PROXY = apiMap[process.env.NODE_ENV]
// export const baseURL = 'http://localhost:3010'