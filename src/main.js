import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import VueScrollTo from 'vue-scrollto';
// import _ from 'lodash';
// Vue.prototype._ = _


Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  easing: 'ease-in-out'
});

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
