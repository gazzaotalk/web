import { createApp } from 'vue'
import App from './pages/main.vue'
import router from './router'

import './assets/jonghun.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
