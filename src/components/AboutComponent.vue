<template>
  <v-container id="about" fluid ma-0 pa-0 class="borderY">
    <div class="parallax pic2"></div>
    <!-- <div class="parallaxxx pic3"></div> -->
    <h3 class="text-h5 text-md-h4 text-xl-h3 borderY pa-2 px-md-10 px-xl-15 text-justify" style="color: #BEAF67">Rólunk</h3>

    <v-container>
      <!-- <v-img
        style="-webkit-filter: grayscale(80%); filter: grayscale(80%);"
        :src="images.building"
      >
      </v-img> -->
      <!-- <div class="body-2 text-xl-body-1 my-1 font-weight-bold text-uppercase text-justify " style="color: #0A4770;" >similique sunt in culpa qui officia</div> -->
      <div class="body-2 text-xl-body-1 my-3 text-justify" style="color: #0A4770;">

Ügyvédi irodánk 26 éve Debrecenben működő immár két generációs vállalkozás. Ügyfeleink nemcsak Debrecenből és környékéről, hanem szinte az ország egész területéről keresnek bennünket az ügyeik vitele és azok megoldása érdekében. 
</div>

    </v-container>
    <div class="parallax pic1 mt-md-5"></div>
    <v-container>
      <div class="body-2 text-xl-body-1 my-3 text-justify  my-md-5" style="color: #0A4770;">

        Büszkék vagyunk rá, hogy ügyfeleink rendszerint visszatérnek hozzánk és tartósan ránk bízzák ügyeik vitelét. Nem csak az irodánk, hanem az ügyfélkörünk is kétgenerációssá vált az idők során.   

Forduljon bizalommal hozzánk, mert a következőket nyújtjuk Önnek: figyelmet, precízitást, diszkréciót, koncentrációt, megoldást találva a jogi problémájára, szakmai felkészültséget és  több mint két évtizednyi tapasztalatot a jogi problémák kezelésében. Ügyvédi munkadíjainkat rugalmasan az ügy jellegéhez igazítjuk.
</div>

    </v-container>

  </v-container>
</template>

<script>
// import _ from 'lodash';

  export default {
    name: 'About',
    props: ['images'],

    data: () => ({
      image: "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png",
      cssProps: {
          backgroundImage: `url(${require('@/assets/officeInside.jpg')})`
        }
    }),
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
