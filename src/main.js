import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'
import './style.css'
import router from './router'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
