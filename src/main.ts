import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { router } from './routes'

const app = createApp(App).use(router).use(ElementPlus)

app.mount('#app')
