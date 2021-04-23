import router from '@/router'
import { getToken } from '@/utils/auth.js'

let routerlist = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    if (to.path == '/login') {
      // console.log(111)
      next({ path: '/' })
    }
    next()
  } else {
    if (routerlist.indexOf(to.path) == -1) {
      next('/login')
    }
    next()
  }
})