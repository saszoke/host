<template>
    <v-app>
      <v-main id="home">

      <v-banner
        sticky
        dark
        color="orange lighten-4"
        v-scroll-to="'#home'"
        elevation="4"
      >
          <h1 class="text-h3 font-weight-bold brown--text text--lighten-1">Földes Ügyvédi Iroda</h1>

        <div class="d-flex justify-center mt-5">
          <v-chip
            class="mt-4 px-2 brown lighten-1"
            outlined
            label
            >
            <div class="py-2 mr-2 tailored-chip-content brown--text text--lighten-1 font-weight-bold"> +52 554 442 </div>

            <div>
                <v-btn icon class="brown--text text--lighten-1">
                    <v-icon> mdi-phone-outline </v-icon>
                </v-btn>
                <v-btn icon class="brown--text text--lighten-1">
                    <v-icon > mdi-content-copy </v-icon>
                </v-btn>
            </div>
          </v-chip>

          <div class="d-flex justify-end ml-5">
            <v-switch
              inset
              color="brown lighten-1"
              
            ></v-switch>

            <v-app-bar-nav-icon class="mt-3 pt-1"  color="brown lighten-1" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
        </div>

        <div
          class="d-flex justify-center orange lighten-4 brown--text text--lighten-1"
          >
          <div class="py-2 mr-2 tailored-chip-content brown--text text--lighten-1 font-weight-bold">foldespeter@foldeslegal.hu</div>

          <div>
              <v-btn icon class="brown--text text--lighten-1">
                  <v-icon> mdi-email-multiple-outline </v-icon>
              </v-btn>
              <v-btn icon class="brown--text text--lighten-1">
                  <v-icon> mdi-content-copy </v-icon>
              </v-btn>
          </div>
      </div>

        <!-- <div class="d-flex justify-space-between mt-10">
          <v-btn
            outlined
            color="grey darken-2"
            width="35%"
            v-scroll-to="'#contact'"
            class="rounded-sm"
          >
            Kapcsolat
          </v-btn>

          <v-btn
            class="rounded-sm"
            outlined
            color="grey darken-2"
            width="35%"
          >
            Email
          </v-btn>
        </div> -->
      </v-banner>
      
        <!-- NAV DRAWER STUFF -->
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          sticky
          style="position:fixed; top:0; left:0; overflow-y:scroll;"
          color="grey darken-2"
        >

          <div class="astrodivider mt-10 mb-5"><div class="astrodividermask"></div><span><i>&#9822;</i></span></div>

          <v-list nav >
            <v-list-item-group>
              <v-list-item v-for="(item, i) in menus" :key="i" @click.stop="drawer = !drawer">
                <v-list-item-title v-scroll-to="item.goto" class="orange--text text--lighten-4">{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <h1 class="mt-15 text-h4 font-weight-bold orange--text text--lighten-4">Földes Ügyvédi Iroda</h1>
          <v-sheet
              class="mt-15"
              color="orange lighten-4"
              height="476"
            >
              <div
                class="pt-15 orange lighten-4 brown--text text--lighten-1"
                >
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 tailored-chip-content brown--text text--lighten-1 font-weight-bold">4024 Debrecen 5 Piac street</div>

                  <div>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-map-marker-outline </v-icon>
                      </v-btn>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-content-copy </v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
              <div
                class="orange lighten-4 brown--text text--lighten-1"
                >
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 tailored-chip-content brown--text text--lighten-1 font-weight-bold">foldespeter@foldeslegal.hu</div>

                  <div>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-email-multiple-outline </v-icon>
                      </v-btn>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-content-copy </v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
              <div
                class="orange lighten-4 brown--text text--lighten-1"
                >
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 tailored-chip-content brown--text text--lighten-1 font-weight-bold">+52 554 442</div>

                  <div>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-phone-outline </v-icon>
                      </v-btn>
                      <v-btn icon class="brown--text text--lighten-1">
                          <v-icon> mdi-content-copy </v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
          </v-sheet>
        </v-navigation-drawer>


        <div class="body">
          <Home />
          <About />
          <Practices />
          <Associates id="lawyers"/>
          <Contact />

        </div>
      </v-main>
    </v-app>
</template>

<script>
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
        myString: "#contact",
        navToggled: false,
        menus: [
          {name: 'Kezdőoldal', id: 0, url: '/', goto:"#home" },
          {name: 'Rólunk', id: 1, url: '/about', goto:"#about"},
          {name: 'Ügyvédeink', id: 3, url: '/associates', goto:"#lawyers"},
          {name: 'Szakterületeink', id: 2, url: '/practices', goto:"#practices"},
          {name: 'Kapcsolat', id: 4, url: '/contact', goto:"#contact"}
          ],
        drawer: false,
        group: null,
        
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
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
  height: 100vh;
}

body{
  overflow-x: hidden;
}

#home > div > div.v-banner.v-sheet.theme--dark.elevation-6.v-banner--is-mobile.v-banner--sticky.orange.lighten-4 > div > div > div > div.d-flex.justify-space-between.mt-3 > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--dark{
  background: linear-gradient(to bottom, #CD2A3E calc(100% / 3), white calc(100% / 3), white calc(100% / 3 * 2), #436F4D calc(100% / 3 * 2));

}
#home > div > div.v-banner.v-sheet.theme--dark.elevation-6.v-banner--is-mobile.v-banner--sticky.orange.lighten-4 > div > div > div > div.d-flex.justify-space-between.mt-3 > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--dark.red--text{
  @mixin flag-eng() {
    @include ratio(3 / 5);
    $unit: $h30;
    $red: #c8102e;
    $white: #FFF;
    $cross-width: 6 * $unit;
    $cross-left: 22 * $unit;
    $cross-top: 12 * $unit;

    background-color: $white;
    background-image:
                      h-stripe($red, $cross-width, $cross-top),
                      v-stripe($red, $cross-width, $cross-left)
                    ;
  };
}


// Common properties
$flag-width: 9em;
$flag-height: $flag-width*10/16;

// Three thirds flag
@function thirds($first, $second, $last, $or: 90deg){
  @return linear-gradient($or, $first 33.3%, $second 33.3%, $second 66.6%, $last 66.6%);
}

// Two halfs flag
@function halfs($first, $second, $or: -180deg){
  @return linear-gradient($or, $first 50%, $second 50%);
}

// Crossed flag, with or without detail
@function cross($back, $main, $detail: $back){
  @return linear-gradient(90deg, transparent 28%, $main 28%, $main 34%, transparent 34%),
    linear-gradient(transparent 42%, $detail 42%, $detail 46%, $main 46%, $main 58%, $detail 58%, $detail 62%, transparent 62%),
    linear-gradient(90deg, $back 25%, $detail 25%, $detail 28%, $main 28%, $main 34%, $detail 34%, $detail 37%, $back 37%);
}




%flag{
  width: $flag-width;
  height: $flag-height;
  border: 1px solid #999;
  display: inline-block;
  margin: 2em;
  box-shadow: 1px 1px 1px #CCC;
  transition: all .5s;
  
  &::after{
    content: attr(class);
    line-height: $flag-height*2.5;
  }

}


.flag--hungary{
  @extend %flag;
  background: thirds(red, white, green, -180deg);
}
.astrodivider {
  width:400px; 
  max-width: 100%;
  position:relative;
}

.astrodividermask { 
    overflow:hidden; height:20px; 
}

.astrodividermask:after { 
      content:''; 
      display:block; margin:-25px auto 0;
      width:100%; height:25px;  
        border-radius:125px / 12px;
       box-shadow:0 0 8px #ffe0b2;
}
.astrodivider span {
    width:50px; height:50px; 
    position:absolute; 
    bottom:100%; margin-bottom:-25px;
    left:50%; margin-left:-25px;
    border-radius:100%;
   box-shadow:0 2px 4px #ffe0b2;
    background: #616161;
}
.astrodivider i {
    position:absolute;
    top:4px; bottom:4px;
    left:4px; right:4px;
    border-radius:100%;
    border:1px dashed #ffe0b2;
    text-align:center;
    line-height:40px;
    font-style:normal;
     color:#ffe0b2;
}
</style>
