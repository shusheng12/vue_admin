import axios from 'axios'
// import { config } from 'vue/types/umd'
// import { MessageBox, Message } from 'element-ui'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// service.interceptors.request.use(
//   // config => {
//   //   return config
//   // }
// )

export default service
