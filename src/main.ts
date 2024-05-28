import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import { router } from './routes'

const app = createApp(App).use(router)

app.mount('#app')
