import type { Router } from 'uni-mini-router/lib/interfaces'

export function createRouterHook(router: Router) {
  createBeforeEachHook(router)
  createAfterEachHook(router)
}

function createBeforeEachHook(router: Router) {
  router.beforeEach((to, from, next) => {
    // 登录拦截
    next()
  })
}

function createAfterEachHook(router: Router) {
  router.afterEach((to) => {
    // 用于进行页面统计等操作。
  })
}
