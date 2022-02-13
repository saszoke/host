<template>
    <v-app>
      <v-main>

      <v-banner
        sticky
        color="blue-grey darken-2"
        dark
        elevation="16"
      >
        
      <div class="d-flex justify-space-between">

        <h1 class="py-6">Földes Ügyvédi Iroda</h1>
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">

            <v-app-bar-nav-icon
              v-bind="attrs"
              v-on="on"
              class="my-4"
            ></v-app-bar-nav-icon>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in menus"
              :key="i"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      
      </v-banner>


      <transition
        @before-enter="beforeBodyEnter"
        @enter="bodyEnter"
        appear
        >
        <div class="body">

          <Home />
          <About />
          <Associates />
          <Practices />
          <Contact />

        </div>
      </transition>
          </v-main>
    </v-app>
</template>

<script>
import gsap from 'gsap'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Practices from '@/views/Practices.vue'
import Associates from '@/views/Associates.vue'


export default {

  components: {
    Contact,
    About,
    Home,
    Practices,
    Associates
  },
  

  data: function () {
      return {
        navToggled: false,
        menus: [
          {name: 'Kezdőoldal', id: 0, url: '/'},
          {name: 'Rólunk', id: 1, url: '/about'},
          {name: 'Praktikák', id: 2, url: '/practices'},
          {name: 'Ügyvédeink', id: 3, url: '/associates'},
          {name: 'Kapcsolat', id: 4, url: '/contact'}
          ],

        beforeEnter: (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateX(100px)'
            },
        enter: (el, done) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.2,
            })
        },
        beforeLeave: (el) => {
            el.style.opacity = 1
            el.style.transform = 'translateX(0)'
            },
        leave: (el, done) => {
            gsap.to(el, {
                opacity: 0,
                x: 100,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.2
            })
        },
        beforeBodyEnter: (el) => {
                    el.style.opacity = 0
                    el.style.transform = 'translate(100px)'
                    },

        bodyEnter: (el, done) => {
            gsap.to(el, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              onComplete: done
            })
        }
      }
    },

  methods: {

    openNav(){
      this.navToggled = !this.navToggled
    },
    blurred(){
      return this.navToggled ? {
        'filter': 'filter:blur(3px)',
        '-webkit-filter': 'blur(3px)'
      } : {
        'filter': 'filter:blur(0)',
        '-webkit-filter': 'blur(0)'
      }
    },

    blurrClass(){
      return this.navToggled ? { 'blurred': true } : { 'blurred': false, 'unblurred': true }
    },

    scaleClass(){
      return this.navToggled ? { 'scaled': true } : { 'scaled': false, 'unscaled': true }
    },

    clickSensor(event){
      if (this.navToggled){
        if (!event.target.classList.contains("nav") || event.target.classList.contains("route")){
          this.navToggled = !this.navToggled
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#title{
  padding: 10%;
  margin: 5%;
  color: #5D4954;
}

#nav {

  a {
    color: white;
    text-decoration: none;
    font-size: 30px;

    &.router-link-exact-active {
      color: orange;
    }
  }
}

ul{
  z-index: 1;
}

li{
  list-style: none;
  
}
.burger{
  cursor: pointer;
  margin-top: 5%;
  margin-right: 5%;
  z-index: 2;
}
.burger-container{
  display: flex;
  justify-content: space-between;

}
.burger div{
  width: 25px;
  height: 5px;
  margin: 5px;
  background-color: #5D4954;
  transition: all 0.3s ease;
}

body{
  overflow-x: hidden;
  font-family: 'Libre Baskerville';                                     
                    
}

.nav-links{
  position: absolute;
  opacity: .75;
  padding: 30px;
  right: 0px;
  height: 100vh;
  top: 12vh;
  background-color: #5D4954;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

}

.nav-links li{
  opacity: 0;
  text-decoration: none;
  padding-top: 50px;

}

.toggle .line1{
  transform: rotate(-45deg) translate(-5px,9px);
  background-color: white;
}

.toggle .line2{
  opacity: 0;
}

.toggle .line3{
  transform: rotate(45deg) translate(-5px,-9px);
  background-color: white;
}

.route-enter {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0px);
}


.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active, .route-enter-active {
  transition: all .25s ease-in; 
}

.blurred{
  filter: blur(3px);
  -webkit-filter: blur(3px);
  transition: all 0.8s ease;
}
.unblurred{
  filter: blur(0px);
  -webkit-filter: blur(0px);
  transition: all 0.8s ease;
}

.scaled{
  transform: scale(1.075,1.075);
  transition: all 0.8s ease;
}
.unscaled{
  transform: scale(1.0,1.0);
  transition: all 0.8s ease;
}

.intro-thread{
  margin-top: 45%;
  font-size: 2rem;
  font-weight: 550;
}

</style>
