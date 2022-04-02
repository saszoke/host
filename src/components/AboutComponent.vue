<template>
  <v-container class="px-md-5" id="about" fluid :style="`max-width: ${dynamicWidth}px`">
    <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 px-xl-15 text-justify  mb-10" style="color: #BEAF67"> <span class="bottomLine1">Rólunk</span></h3>

      <v-row class="ma-0 pa-0">
          <v-col cols="12" md="12" class="ma-0 pa-0" >
            <v-img src="random1Snip.jpg" :max-height="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 ? 350 : 500"> </v-img>
          </v-col>
          <v-col cols="12" md="12" class="ma-0 pa-0" >
            <div class="body-2 text-lg-body-1 my-3 text-justify" style="color: #0A4770;">Ügyvédi irodánk 26 éve Debrecenben működő immár két generációs vállalkozás. Ügyfeleink nemcsak Debrecenből és környékéről, hanem szinte az ország egész területéről keresnek bennünket az ügyeik vitele és azok megoldása érdekében. 
              Büszkék vagyunk rá, hogy ügyfeleink rendszerint visszatérnek hozzánk és tartósan ránk bízzák ügyeik vitelét. Nem csak az irodánk, hanem az ügyfélkörünk is kétgenerációssá vált az idők során.   
              Forduljon bizalommal hozzánk, mert a következőket nyújtjuk Önnek: figyelmet, precízitást, diszkréciót, koncentrációt, megoldást találva a jogi problémájára, szakmai felkészültséget és <span style="color: #BEAF67" class="font-weight-bold">több mint két évtizednyi tapasztalatot</span> a jogi problémák kezelésében. Ügyvédi munkadíjainkat rugalmasan az ügy jellegéhez igazítjuk.
            </div>
          </v-col>
        </v-row>

  </v-container>
</template>

<script>
// import _ from 'lodash';

  export default {
    name: 'About',
    props: ['dynamicWidth'],

    data: () => ({
      // dinWidth: 300
    }),

    mounted(){
      console.log(this.dynamicWidth)
    }
    // methods: {


    //   onScroll: _.throttle(function(){
    //     console.log('scroll...');
    //   }, 1000)
    // },
    // mounted() {
    //   // this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    //   document.addEventListener('scroll', this.onScroll);
    //   console.log('added listener');
    //   // console.log(this.handleDebouncedScroll)
    // },

    // beforeDestroy() {
    //   // I switched the example from `destroyed` to `beforeDestroy`
    //   // to exercise your mind a bit. This lifecycle method works too.
    //   document.removeEventListener('scroll', this.onScroll);
    //   console.log('removed listener');

    // }
  }
</script>

<style>
/* .bottomBorder{
  border-bottom: 2px solid #ffe0b2;
}; */

.borderY{
  border-bottom: 2px solid #0A4770;
  background-color: #fff;
};



.parallax {
  /* Set a specific height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    /* width: 90px;
  height: 90px;
  background-size: cover;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px; */
}
</style>
