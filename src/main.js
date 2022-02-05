import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     // toggle nav
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('navActive');

//         // animate links
//         navLinks.forEach((link,index) => {
//           if (link.style.animation){
//             link.style.animation = '';
//           } else {
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +.25}s`;
//           }
//         })

//         // burger animation
//         burger.classList.toggle('toggle');
//     });
// }

// navSlide();

// const closeBurger = () => {
//   const burger = document.querySelector('.burger');
//   const navLinks = document.querySelectorAll('.nav-links li');
//   burger.classList.toggle('toggle');
//   navLinks.forEach((link) => {
//     link.style.animation = '';
//   })
// }
// closeBurger()