import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UserStore from './store/UserStore'

const app = createApp(App)

app.use(router)
app.use(UserStore)

app.mount('#app')
