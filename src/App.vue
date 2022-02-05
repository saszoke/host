<template>

  <div id="app">
    <h1 id="title">Földes Ügyvédi Iroda</h1>
    <div class="burger-container">
      <div></div>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>

    <div id="nav">

      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="/about">About</router-link>
        </li>

        <li>
          <router-link to="/contact">Contact</router-link>
        </li>

        <li>
          <router-link to="/associates">Attorneys</router-link>
        </li>

        <li>
          <router-link to="/practices">Practices</router-link>
        </li>
      </ul>
    </div>

    
      <transition name="route" mode="out-in">
        <router-view/>
      </transition>
    
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  transform: translateX(100%);
  transition: transform 0.25s ease-in;
}

.nav-links li{
  opacity: 0;
  text-decoration: none;
  padding-top: 50px;

}

.nav-active{
  transform: translateX(0%);
}

@keyFrames navLinkFade{
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1{
  transform: rotate(-45deg) translate(-5px,9px);
}

.toggle .line2{
  opacity: 0;
}

.toggle .line3{
  transform: rotate(45deg) translate(-5px,-9px);
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



</style>
