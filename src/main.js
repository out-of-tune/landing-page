import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'
import 'vuetify/dist/vuetify.min.css' 

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
