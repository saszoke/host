<template>
  <v-app v-resize="onResize">
    <v-main>
      <v-container fluid class="ma-0 pa-0" id="home">
        <v-carousel cycle hide-delimiters :height="dynamicCarouselHeight()" :show-arrows="false" id="homeScrollTarget">
          <v-carousel-item v-for="(item,i) in items" :key="i" eager>
            <v-img :src="item.src" height="100%" eager/>
          </v-carousel-item>
        </v-carousel>

        <Banner @langSwitch='langSwitch' @childAlert="flashAlert($event)" :contactMethods="contactMethods" @openNavInChild="openNavInChild" :menus="menus" :title="title" :englishOn="englishOn" :dynamicSubtitle="dynamicSubtitle" :langSwitch="langSwitch" :copyIcon="copyIcon" ref="banner" />
        <Nav @childAlert="flashAlert($event)" :contactMethods="contactMethods" :title="title" :menus="menus" :englishOn="englishOn" :dynamicSubtitle="dynamicSubtitle" :dynamicAddress="dynamicAddress" :copyIcon="copyIcon" ref="nav"/>

        <v-snackbar v-model="snackbar" :timeout="timeout" color="#115874">
          <div class="text-center button font-weight-bold" style="color: #F4E8D2; letter-spacing: 0.05em;">
            {{ dynamicSnackText }}
          </div>
        </v-snackbar>


        <div>
          <Home :dynamicWidth="dynamicWidth" />
          <About :dynamicWidth="dynamicWidth" />
          <PracticesBeta :dynamicWidth="dynamicWidth" />
          <Associates :dynamicWidth="dynamicWidth" />
          <Contact :contactMethods="contactMethods" :dynamicWidth="dynamicWidth" :copyIcon="copyIcon" @childAlert="flashAlert($event)"/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
// import Practices from '@/views/Practices.vue'
import PracticesBeta from '@/views/PracticesBeta.vue'
import Associates from '@/views/Associates.vue'
import debounce from 'lodash/debounce'
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'



export default {

  components: { Contact, About, Home, PracticesBeta, Associates, Nav, Banner },

  data: function () {
      return {
        contactMethods: [
          {name: "address", href: '', target: '', meta: "4025 Debrecen 43 Piac street", icon: "map-marker-outline", customClass: '', color: '#F4E8D2', class4Banner: '', align: '', contactStyle: 'd-md-flex mr-md-15'},
          {name: "phone", href: 'tel:+52342821', target: '_blank', meta: "+52 342 821", icon: 'phone-outline', customClass: 'custom-border button', color: '#BEAF67', class4Banner: 'mr-3 mr-md-10 mr-lg-15 px-0', align: 'custom-border button mx-md-15', contactStyle: 'd-flex custom-border button mr-md-15'},
          {name: "email", href: 'mailto:foldest@t-online.hu', target: '_blank', meta: "foldest@t-online.hu", icon: "email-outline", customClass: '', color: '#F4E8D2', class4Banner: 'mx-0 px-0', align: '', contactStyle: 'd-md-flex mr-md-15'},
        ],
        dynamicSubtitle : ['Law Office','Ügyvédi Iroda'],
        dynamicAddress : ['5 Piac street 4024 Debrecen', '4024 Debrecen Piac utca 5'],
        dynamicSnackText: '',
        timeout: 1500,
        snackbar : false,
        copyIcon: 'far fa-copy',
        englishOn: false,
        title: 'Földes',
        picRef: "./csapatSnip2.jpg",
        iconActive: false,
        offset: -123,

        menus: [
          {dynamicName: ['Home','Kezdőoldal'], hasSubMenu: false, id: 0, url: '/home', goto: { el: '#home', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 } },
          {dynamicName: ['About','Rólunk'], hasSubMenu: false, id: 1, url: '/about', goto: { el: '#about', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }},
          {
            dynamicName: ['Practies','Szakterületeink'], 
            hasSubMenu: true, 
            subMenus: [
              {name: 'Cégjog', goto: { el: '#cegjog', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }}, 
              {name: 'Gazdasági ügyek', goto: { el: '#gazdjog', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }}, 
              {name: 'Ingatlan ügyek', goto: { el: '#ingatlanjog', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }}, 
              {name: 'Civil szervezetek', goto: { el: '#civiljog', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }}, 
              {name: 'Védjegy ügyek', goto: { el: '#vedjog', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }} 
            ],
            id: 2, 
            url: '/practices', 
            goto: { el: '#practices', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }
          },
          {dynamicName: ['Lawyers','Munkatársaink'], hasSubMenu: false, id: 3, url: '/associates', goto: { el: '#associates', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }},
          {dynamicName: ['Contact','Kapcsolat'], hasSubMenu: false, id: 4, url: '/contact', goto: { el: '#contact', offset: this.getOffset, onDone: this.doneScroll, duration: 1500 }}
          ],
        drawer: false,
        group: null,
        menuTranslations: ['Home','About','Practices','Associates','Contact'],
        items: [
          {
            src: './csapatSnip2.jpg',
          },
          {
            src: './random3Snip.jpg',
          },
          {
            src: './csapatSnip3.jpg',
          },
          {
            src: './random2Snip.jpg',
          }
        ],
      }
    },
    computed:{
      dynamicWidth(){
        return 1000
      }
    },

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods: {
    getOffset(){
      return this.$vuetify.breakpoint.width > 959 ? -83 : -123;
    },
    onResize () {
      this.offset = this.$vuetify.breakpoint.width > 959 ? -123 : -83;
      console.log(this.offset)
      },
    openNavInChild(){
          this.$refs.nav.openNav()
        },
    dynamicCarouselHeight(){
      var dHeight = "0"
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          dHeight = 200;
          break;
        case "sm":
          dHeight = 400;
          break;
        case "md":
          dHeight = 600;
          break;
        case "lg":
          dHeight = 680;
          break;
        case "xl":
          dHeight = 850;
          break;
      }
      // console.log('<<<<<<   You can ignore this, this is for development purposes only. >>>>>>')
      // console.log(`<<<<<<   Viewport width:  ${this.$vuetify.breakpoint.width} >>>>>>`)
      // console.log(`<<<<<<   Viewport height:  ${this.$vuetify.breakpoint.height} >>>>>>`)
      // console.log('<<<<<<   You can ignore this, this is for development purposes only. >>>>>>')
      if(this.$vuetify.breakpoint.name == "lg" && this.$vuetify.breakpoint.height > 950 && this.$vuetify.breakpoint.width > 1800){
        dHeight = 850;
      }

      return dHeight
    },
    doneScroll(elem){
      try{
        console.log(elem)
        // this.$router.push(`/${elem.id}`);
        // console.log('skipping router push',elem)
      } catch(err){
        // console.log('Rerouting avoided. Already on route.')
      }
    },
    handleScroll() {
      this.isUserScrolling = (document.scrollY > 0);
      // console.log('handling scroll...............', window);
      // this.$router.push('/contact')  <----- ez így nem lesz jó... 
      // this.$router.replace({path: '/contact'})
    },

    flashAlert(content){
      if (content == 'email'){
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
        document.querySelectorAll('.copy').forEach(copyElement => {
          copyElement.classList.remove('fas')
        })
      }, this.timeout);
    },
    langSwitch(){
      this.englishOn = !this.englishOn
    }
  },
  mounted() {
    this.onResize()
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    document.addEventListener('scroll', this.handleDebouncedScroll);
    document.addEventListener('wheel', this.handleDebouncedScroll);

    // setTimeout(() => {
    //   var scrollTarget = null
    //   try{
    //     scrollTarget = '#' + this.$route.name.toLowerCase();
    //     // console.log('Initiating scroll to ', scrollTarget);
    //     this.$vuetify.goTo(scrollTarget, {
    //           duration: 2500,
    //           offset: 0,
    //           easing: 'easeInOutCubic'
    //         })
    //   } catch(err){
    //     // FOR DEVELOPMENT DEBUGGING
    //     // console.log('Failed to scroll to ', scrollTarget)
    //     // console.log(err)
    //   }
    // }, 1500);

  },
  updated(){
    // console.log(this.$route)
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

// @font-face {
//   font-family: "RobotoSlab";
//   src: local("RobotoSlab"),
//   url(./fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf) format("truetype");
// }
// @font-face {
//   font-family: "Roboto";
//   src: local("Roboto"),
//   url(./fonts/RobotoSlab/static/Roboto-Regular.ttf) format("truetype");
// }
// @font-face {
//   font-family: "Galliard-Std-Roman";
//   src: local("Galliard-Std-Roman"),
//   url(./fonts/Galliard-Std-Roman/ITC-Galliard-Std-Roman_24635.ttf) format("truetype");
// }
// @font-face {
//   font-family: "Times";
//   src: local("Times"),
//   url(./fonts/Times/TIMESR.ttf) format("truetype");
// }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

.contained{
  object-fit: contain;
}

.bottomLine{
  padding-bottom: .5%;
  border-bottom: 1px solid #115874;
}

</style>
