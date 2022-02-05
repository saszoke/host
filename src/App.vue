<template>

  <div id="app" @click="clickSensor" >
    <div class="main-thread">
      <h1 id="title" :class="scaleClass()">Földes Ügyvédi Iroda</h1>
      <div class="burger-container">
        <div></div>

        <div class="burger nav" @click="openNav" v-bind:class="{ toggle: navToggled}">
          <div class="line1 nav"></div>
          <div class="line2 nav"></div>
          <div class="line3 nav"></div>
        </div>
      </div>

      <div id="nav" class="nav" >

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
          >
            <transition-group 
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  appear
                  tag="ul"
                  class="nav nav-links"
                  v-bind:class="{ navActive: navToggled}" v-if="navToggled"
                >
              <li class="nav" v-for="(menu, index) in menus" :key="menu.id" :data-index="index">
                <router-link 
                  :to="menu.url" 
                  class="nav route"
                  
                  >
                {{ menu.name }}
                </router-link>
              </li>
            </transition-group>
        </transition>
      </div>

      <transition name="route" mode="out-in">
        <router-view :class="blurrClass()"/>
      </transition>
    </div>

    <div class="intro-thread">

    </div>
    
  </div>
</template>

<script>
import gsap from 'gsap'
export default {

  data: function () {
      return {
        navToggled: false,
        menus: [
          {name: 'Home', id: 0, url: '/'},
          {name: 'About', id: 1, url: '/about'},
          {name: 'Practices', id: 2, url: '/practices'},
          {name: 'Attorneys', id: 3, url: '/associates'},
          {name: 'Contact', id: 4, url: '/contact'}],

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
  font-family: 'WindSong', cursive;                                     
                    
}

.nav-links{
  position: absolute;
  opacity: .75;
  padding: 30px;
  right: 0px;
  height: 100vh;
  top: 24vh;
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

@keyframes blurAnimate {
    // 0% { -webkit-filter: blur(0px); filter: blur(0px);}
    // 25% { -webkit-filter: blur(1px); filter: blur(1px);}
    // 50% { -webkit-filter: blur(2px); filter: blur(2px);}
    // 100% { -webkit-filter: blur(3px); filter: blur(3px);}
    from { filter: blur(0px)}
    to { filter: blur(5px)}
}

</style>
