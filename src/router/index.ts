import { createRouter } from 'uni-mini-router'
import type { App } from 'vue'
import { createRouterHook } from '@/router/hook'

const router = createRouter({
  routes: [...ROUTES], // 路由表信息
})

export function setupRouter(app: App<Element>) {
  createRouterHook(router)
  app.use(router)
}

export { router }
