import './assets/main.css' // Pastikan baris ini ada di paling atas
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')