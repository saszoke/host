import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueScrollTo from 'vue-scrollto';
import * as VueGoogleMaps from "vue2-google-maps" 


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
  render: h => h(App)
}).$mount('#app')
