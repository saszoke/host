<template>
  <v-app>
    <v-main>
      <v-container fluid class="ma-0 pa-0">

        <v-img :src="picRef" style="-webkit-filter: grayscale(80%); filter: grayscale(80%);" id="home"></v-img>

        <v-banner sticky color="#0A4770" elevation="4">
          <div class="d-flex flex-column flex-md-row justify-space-around">

          <!-- FIRST CHILD BANNER -->
          <div class="d-flex justify-space-between justify-sm-space-around mb-2 mb-md-0">
            <div class="mr-5 mx-md-15 py-auto my-auto">
              <v-app-bar-nav-icon  color="#F4E8D2" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>

            <div class=" mx-md-15">
              <div class="align-center order-lg-first text-h4 text-md-h3 text-xl-h2 font-weight-bold  my-auto"
                  v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title">
              </div>
              <div class="subtitle-1" style="cursor: pointer; color: #F4E8D2;" v-text="englishOn ? dynamicSubtitle[0] : dynamicSubtitle[1]"></div>
            </div>
            

            <div class=" mx-md-15 py-auto my-auto">
              <label class="switch">
                <input type="checkbox"  @click="langSwitch">
                <span class="slider round">
                  <div class="switchText text-body-2 font-weight-bold">
                  EN
                  </div>
                </span>
              </label>
            </div>
          </div>


            <!-- SECOND CHILD BANNER -->
            <div class="order-lg-last d-flex justify-center justify-lg-space-between mt-md-0 mx-md-10">

                <div class="d-flex justify-space-between mr-3 mr-md-10 mr-lg-15 px-0 my-auto button font-weight-bold custom-border fixedNavButtonWidth" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: auto; letter-spacing: 0.1em; padding: 5px;' : 'width: 140px;'">
                  <div class="py-2 pl-2" style="color: #BEAF67;" v-text="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '+52 554 442' : 'PHONE'"></div>

                  <div class="ma-0 pa-0">
                      <v-btn icon color="#BEAF67" class="mr-0" @click="handleCall('tel:+52554442')">
                          <v-icon> mdi-phone-outline </v-icon>
                      </v-btn>
                      <v-btn icon color="#BEAF67" class="mr-0" @click="flashAlert('phone')">
                          <v-icon class="copy">{{copyIcon}}</v-icon>
                      </v-btn>
                  </div>
                </div>

              <div class="d-flex justify-space-between mx-0 px-0 my-auto button font-weight-bold custom-border fixedNavButtonWidth" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: auto; letter-spacing: 0.1em; padding: 5px;' : 'width: 140px;'">
                <div class="py-2 pl-2" style="color: #BEAF67;" v-text="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'foldespeter@foldeslegal.hu' : 'EMAIL'"></div>

                <div class="ma-0 pa-0">
                    <v-btn icon color="#BEAF67" class="mr-0" href="mailto:foldespeter@foldeslegal.hu">
                        <v-icon> mdi-email-outline </v-icon>
                    </v-btn>
                    <v-btn icon color="#BEAF67" class="mr-0" @click="flashAlert('mail')">
                        <v-icon class="copy">{{copyIcon}}</v-icon>
                    </v-btn>
                </div>
              </div>

            </div>
  
          </div>
        </v-banner>




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
                    <v-list-item-title class="font-weight-bold body-2" v-scroll-to="item.goto" style="color: #F4E8D2;">{{ englishOn ? item.dynamicName[0] : item.dynamicName[1] }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <div class="hidden-xs-only">
                <h1 class="mt-sm-15 text-h5 font-weight-bold" v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title"></h1>
                <div class="subtitle-1" style="cursor: pointer; color: #F4E8D2;" v-text="englishOn ? dynamicSubtitle[0] : dynamicSubtitle[1]"></div>
              </div>
            
            </div>
            <div class="nav-element lighten-4 pb-sm-5 pt-sm-15" style="height: 40%; background-color: #F4E8D2">
              <div style="background-color: background-color: #F4E8D2">
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">{{ englishOn ? dynamicAddress[0] : dynamicAddress[1] }}</div>
                  <font-awesome-icon icon="fad fa-copy" />
                  <div>
                      <v-btn icon style="color: #115874; font-weight: bold;">
                          <v-icon> mdi-map-marker-outline </v-icon>
                      </v-btn>
                      <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert('address')">
                          <v-icon class="copy">{{copyIcon}}</v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
              <div style="background-color: background-color: #F4E8D2">
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">foldespeter@foldeslegal.hu</div>
                  <div>
                      <v-btn icon style="color: #115874; font-weight: bold;" href="mailto:foldespeter@foldeslegal.hu">
                          <v-icon> mdi-email-multiple-outline </v-icon>
                      </v-btn>
                      <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert('mail')">
                          <v-icon class="copy">{{copyIcon}}</v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
              <div style="background-color: background-color: #F4E8D2">
                <div class="d-flex flex-column justify-space-between">
                  <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">+52 554 442</div>
                  <div>
                      <v-btn icon style="color: #115874; font-weight: bold;" @click="handleCall('tel:+52554442')">
                          <v-icon> mdi-phone-outline </v-icon>
                      </v-btn>
                      <v-btn icon style="color: #115874; font-weight: bold;" @click="flashAlert('phone')">
                          <v-icon class="copy">{{copyIcon}}</v-icon>
                      </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-navigation-drawer>

        <v-snackbar 
          v-model="snackbar" 
          :timeout="timeout" 
          color="#115874" 
          >
          <div class="text-center button font-weight-bold" style="color: #F4E8D2; letter-spacing: 0.05em;">
            {{ dynamicSnackText }}
          </div>
        </v-snackbar>


        <div>
          <Home />
          <About />
          <Practices />
          <Associates />
          <Contact :copyIcon="copyIcon" @childAlert="flashAlert($event)" @childCall="handleCall('tel:+52554442')"/>

        </div>
      </v-container>
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
        alma: 'narancs',
        dynamicSubtitle : ['Law Office','Ügyvédi Iroda'],
        dynamicAddress : ['5 Piac street 4024 Debrecen', '4024 Debrecen Piac utca 5'],
        dynamicSnackText: '',
        timeout: 1500,
        snackbar : false,
        copyIcon: 'far fa-copy',
        englishOn: false,
        title: 'Földes',
        myString: "#contact",
        picRef: "./lawyerGroup.jpg",
        iconActive: false,
        styleObject: {
          position: 'fixed',
          bottom: 0,
          left: Math.floor(this.width*0.45) + 'px',
          zIndex:100

        },
        menus: [
          {dynamicName: ['Home','Kezdőoldal'], id: 0, url: '/', goto: { el: '#home', offset: 0, onDone: this.doneScroll, duration: 1500 } },
          {dynamicName: ['About','Rólunk'], id: 1, url: '/about', goto: { el: '#about', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {dynamicName: ['Practies','Szakterületeink'], id: 2, url: '/practices', goto: { el: '#practices', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {dynamicName: ['Lawyers','Ügyvédeink'], id: 3, url: '/associates', goto: { el: '#associates', offset: 0, onDone: this.doneScroll, duration: 1500 }},
          {dynamicName: ['Contact','Kapcsolat'], id: 4, url: '/contact', goto: { el: '#contact', offset: 0, onDone: this.doneScroll, duration: 1500 }}
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

    handleCall(number){
      window.open(number)
    },
    flashAlert(content){
      if (content == 'mail'){
        this.dynamicSnackText = this.englishOn ? "EMAIL ADDRESS COPIED TO CLIPBOARD" : "EMAIL CÍM VÁGÓLAPRA MÁSOLVA"
        navigator.clipboard.writeText('foldespeter@foldeslegal.hu')
      } else if (content == 'phone'){
        this.dynamicSnackText = this.englishOn ? "PHONE NUMBER COPIED TO CLIPBOARD" : "TELEFONSZÁM VÁGÓLAPRA MÁSOLVA"
        navigator.clipboard.writeText('+52 554 442')
      } else {
        this.dynamicSnackText = this.englishOn ? "ADDRESS COPIED TO CLIPBOARD" : "CÍM VÁGÓLAPRA MÁSOLVA"
        if (this.englishOn){
          navigator.clipboard.writeText(this.dynamicAddress[0])
        } else {
          navigator.clipboard.writeText(this.dynamicAddress[1])
        }
      }
      event.target.classList.toggle('fas')
      this.snackbar = true


      setTimeout(() => {
        // this.copyIcon = 'far fa-copy'
        // event.target.classList.toggle('fas')
        document.querySelectorAll('.copy').forEach(copyElement => {
          copyElement.classList.remove('fas')
        })
      }, this.timeout);
    },
    langSwitch(){
      this.englishOn = !this.englishOn
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

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
html {
  height: -webkit-fill-available;
}

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
  border: 2px solid #BEAF67; color: #BEAF67; font-size: 14px;
}

.fixedNavButtonWidth{
  width: 140px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F4E8D2;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #115874;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #F4E8D2;
}

input:focus + .slider {
  box-shadow: 0 0 1px #115874;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switchText{
  text-align: end;
  padding: 12.5%;
  height: 100%;
  color:#115874;
}
</style>
