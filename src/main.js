import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'particles.vue3'

const app = createApp(App)

app.use(router)
app.use(VueParticles)

app.mount('#app')
