import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

export function createApp() {
  const app = createSSRApp(App)
  // Configure router
  setupRouter(app)
  // Configure store
  setupStore(app)
  return {
    app,
  }
}
