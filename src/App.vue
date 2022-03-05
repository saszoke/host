<template>
  <v-app style="width: 100%;overflow-x:hidden">
    <v-main  style="position: relative">
      <v-img :src="picRef" style="-webkit-filter: grayscale(80%); filter: grayscale(80%);" class="ma-0 pa-0"   id="home"></v-img>

      <v-banner sticky color="#0A4770" elevation="4">
        <div class="d-flex flex-column flex-md-row justify-space-around">

        <!-- FIRST CHILD BANNER -->
        <div class="d-flex justify-space-between justify-sm-space-around mb-2 mb-md-0">
          <div class="mr-7 mx-md-15">
            <v-app-bar-nav-icon class="mt-3 pt-1"  color="#F4E8D2" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>

          <div class=" mx-md-15">
            <div class="align-center order-lg-first text-h4 text-md-h3 text-xl-h2 font-weight-bold  my-auto"
                v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title">
            </div>
            <div class="subtitle-1" style="cursor: pointer; color: #F4E8D2;">Ügyvédi Iroda</div>
          </div>

          <div class=" mx-md-15">
            <v-switch color="#F4E8D2" inset class="ml-3 mx-lg-10 button font-weight-bold" :value="englishOn" style="color: #F4E8D2;" @click="langSwitch">
            </v-switch>
          </div>
        </div>


          <!-- SECOND CHILD BANNER -->
          <div class="order-lg-last d-flex justify-center mt-md-0 mx-md-10">

              <div class="d-flex justify-space-between mr-3 px-0 my-auto button font-weight-bold custom-border fixedNavButtonWidth">
                <div class="py-2 pl-2" style="color: #BEAF67;"> PHONE </div>

                <div class="ma-0 pa-0">
                    <v-btn icon color="#BEAF67" class="mr-0">
                        <v-icon> mdi-phone-outline </v-icon>
                    </v-btn>
                    <v-btn icon color="#BEAF67" class="mr-0" @click="flashAlert()">
                        <v-icon > mdi-content-copy </v-icon>
                    </v-btn>
                </div>
              </div>

            <div class="d-flex justify-space-between mx-0 px-0 my-auto button font-weight-bold custom-border fixedNavButtonWidth">
              <div class="py-2 pl-2" style="color: #BEAF67;">EMAIL</div>

              <div class="ma-0 pa-0">
                  <v-btn icon color="#BEAF67" class="mr-0">
                      <v-icon> mdi-email-outline </v-icon>
                  </v-btn>
                  <v-btn icon color="#BEAF67" class="mr-0" @click="flashAlert()">
                      <v-icon > mdi-content-copy </v-icon>
                  </v-btn>
              </div>
            </div>

          </div>
 
        </div>
      </v-banner>
      <div id="anchor" class="d-flex justify-center">
        <v-alert
          :value="alert"
          type="success"
          text
          color="black"
          transition="scale-transition"
          style="position: fixed; z-index: 100"
          class="mt-15 mt-lg-5"
        > Copied to clipboard </v-alert>
      </div>
      <!-- NAV DRAWER STUFF -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        sticky
        style="position:fixed; top:0; left:0; overflow-y:hidden;"
        color="#115874"
      >
        <div class="d-flex flex-column justify-center" style="height: 100vh;">
          <div class="nav-element d-flex flex-column justify-center" style="height: 60%">
            <v-list nav class="button">
              <v-list-item-group>
                <v-list-item v-for="(item, i) in menus" :key="i" @click.stop="drawer = !drawer">
                  <v-list-item-title class="font-weight-bold body-2" v-scroll-to="item.goto" style="color: #F4E8D2;">{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div class="hidden-xs-only">
              <h1 class="mt-sm-15 text-h5 font-weight-bold" v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title"></h1>
              <div class="subtitle-1" style="cursor: pointer; color: #F4E8D2;">Ügyvédi Iroda</div>
            </div>
          
          </div>
          <div class="nav-element lighten-4 pb-sm-5 pt-sm-15" style="height: 40%; background-color: #F4E8D2">
            <div style="background-color: background-color: #F4E8D2">
              <div class="d-flex flex-column justify-space-between">
                <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">4024 Debrecen 5 Piac street</div>
                <div>
                    <v-btn icon style="color: #115874; font-weight: bold;">
                        <v-icon> mdi-map-marker-outline </v-icon>
                    </v-btn>
                    <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert()">
                        <v-icon> mdi-content-copy </v-icon>
                    </v-btn>
                </div>
              </div>
            </div>
            <div style="background-color: background-color: #F4E8D2">
              <div class="d-flex flex-column justify-space-between">
                <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">foldespeter@foldeslegal.hu</div>
                <div>
                    <v-btn icon style="color: #115874; font-weight: bold;">
                        <v-icon> mdi-email-multiple-outline </v-icon>
                    </v-btn>
                    <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert()">
                        <v-icon> mdi-content-copy </v-icon>
                    </v-btn>
                </div>
              </div>
            </div>
            <div style="background-color: background-color: #F4E8D2">
              <div class="d-flex flex-column justify-space-between">
                <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">+52 554 442</div>
                <div>
                    <v-btn icon style="color: #115874; font-weight: bold;">
                        <v-icon> mdi-phone-outline </v-icon>
                    </v-btn>
                    <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert()">
                        <v-icon> mdi-content-copy </v-icon>
                    </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-navigation-drawer>


      <div>
        <Home  />
        <About />
        <Practices />
        <Associates/>
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
import debounce from 'lodash/debounce';

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
        copyIcon: 'mdi-content-copy',
        englishOn: false,
        title: 'Földes',
        myString: "#contact",
        picRef: "./lawyerGroup.jpg",
        alert: false,
        styleObject: {
          position: 'fixed',
          bottom: 0,
          left: Math.floor(this.width*0.45) + 'px',
          zIndex:100

        },
        menus: [
          {name: 'Kezdőoldal', id: 0, url: '/', goto: { el: '#home', offset: 0, onDone: this.doneScroll, duration: 1500 } },
          {name: 'Rólunk', id: 1, url: '/about', goto: { el: '#about', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {name: 'Szakterületeink', id: 2, url: '/practices', goto: { el: '#practices', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {name: 'Ügyvédeink', id: 3, url: '/associates', goto: { el: '#associates', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {name: 'Kapcsolat', id: 4, url: '/contact', goto: { el: '#contact', offset: 0, onDone: this.doneScroll, duration: 1500 }}
          ],
        drawer: false,
        group: null,
        menuTranslations: ['Home','About','Practices','Associates','Contact']
      }
    },

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods: {
    doneScroll(elem){
      try{
        this.$router.push(`/${elem.id}`);
      } catch(err){
        console.log('Rerouting avoided. Already on route.')
      }
    },
    handleScroll() {
      this.isUserScrolling = (document.scrollY > 0);
      // console.log('calling handleScroll', window);
      // console.log(window.visualViewport.height / window.visualViewport.pageTop)
    },
    flashAlert(){
      this.copyIcon = 'mdi-check-outline'
      // this.alert = true
      setTimeout(() => {
        this.alert = false
        this.copyIcon = 'mdi-content-copy'
      }, 1250);
    },
    langSwitch(){
      this.englishOn = !this.englishOn;
      if (this.englishOn){
        this.title = 'Földes Legal Law Office';
        this.menus.forEach((menu, index) => {
          menu.name = this.menuTranslations[index];
        })
      } else {
        this.title = 'Földes Ügyvédi Iroda';
      }
    }
  },
  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    document.addEventListener('scroll', this.handleDebouncedScroll);
    document.addEventListener('wheel', this.handleDebouncedScroll);
  },

  beforeDestroy() {
    document.removeEventListener('scroll', this.handleDebouncedScroll);

  }
}
</script>

<style lang="scss">

@font-face {
  font-family: "RobotoSlab";
  src: local("RobotoSlab"),
  url(./fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/RobotoSlab/static/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Galliard-Std-Roman";
  src: local("Galliard-Std-Roman"),
  url(./fonts/Galliard-Std-Roman/ITC-Galliard-Std-Roman_24635.ttf) format("truetype");
}

@font-face {
  font-family: "Times";
  src: local("Times"),
  url(./fonts/Times/TIMESR.ttf) format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--is-mobile.v-banner--sticky.orange.lighten-4 > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--light{
  color: #F4E8D2;
}
#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--sticky.orange.lighten-4 > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--light{
  color: #F4E8D2;
}
.theme--light.v-label {
    color: #F4E8D2;
}
.theme--light.v-input--switch .v-input--switch__thumb {
    color: #F4E8D2;
}
#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--is-mobile.v-banner--sticky > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--light{
  color: #F4E8D2;
}
#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--is-mobile.v-banner--sticky > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > label{
  color: #F4E8D2;

}

#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--sticky > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > label{
  color: #F4E8D2;

}
#app > div > main > div > div.v-banner.v-sheet.theme--light.elevation-4.v-banner--sticky > div > div > div > div > div.order-lg-last.d-flex.justify-center.mt-5.mt-md-0.mx-md-10.my-md-auto > div.d-flex.justify-end > div > div > div.v-input__slot > div > div.v-input--switch__thumb.theme--light{
  color: #F4E8D2;
}

.custom-border{
  border: 2px solid #BEAF67; color: #BEAF67; font-weight: bold; font-size: 14px;
}

.fixedNavButtonWidth{
  width: 140px;
}
</style>
