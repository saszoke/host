import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import VueScrollTo from 'vue-scrollto';
import * as VueGoogleMaps from "vue2-google-maps" // Import package




Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD8ZOmQbAGNOoDVDaoMk4hRrXSZH7G-8aY",
    libraries: "places"
  }
});
Vue.use(VueScrollTo, {
  easing: 'ease-in-out'
});

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
