<template>
  <v-container id="about" fluid ma-0 pa-0 style="background-color: #fff;">
    <div class="parallax pic2"></div>
    <!-- <div class="parallaxxx pic3"></div> -->
    <h3 class="text-h5 text-md-h4 text-xl-h3 borderY pa-2 px-md-10 px-xl-15 text-justify" style="color: #BEAF67">Rólunk</h3>

    <v-container>
      <!-- <v-img
        style="-webkit-filter: grayscale(80%); filter: grayscale(80%);"
        :src="images.building"
      >
      </v-img> -->
      <div class="body-2 text-xl-body-1 my-1 font-weight-bold text-uppercase text-justify " style="color: #0A4770;" >similique sunt in culpa qui officia</div>
      <div class="body-2 text-xl-body-1 my-1 text-justify" style="color: #0A4770;">
                Üzleti megoldás és innovatív hozzáállás, helyi piacismeret és globális tudás

        Irodánkat Dr. Köves Péter alapította 1991-ben. Két évvel később az öt londoni prémium ügyvédi irodából álló „Magic Circle”-be tartozó Clifford Chance budapesti irodája lettünk, ahonnan 2009-ben váltunk ki. Azóta Lakatos, Köves és Társai néven, Dr. Lakatos Péter vezetésével független ügyvédi irodaként, ám nemzetközi jellegünket megőrizve működünk.

        Szellemi műhelyünkben folyó munkánkra és szaktudásunkra a nemzetközi irodákban megszokott profizmus, bonyolult jogi kérdések gyakorlatorientált és főleg üzleti megközelítése jellemző. Az érvényes jogi keretek között nagyon sokszor innovatív és új javaslatokkal élünk. Nyitott és kreatív gondolkodásunknak köszönhetően számos kifinomult jogintézmény magyarországi meghonosításában vettünk részt.

              </div>

    </v-container>
    <div class="parallax pic1 mt-md-5"></div>
    <v-container>
      <div class="body-2 text-xl-body-1 my-1 text-justify  my-md-5" style="color: #0A4770;">

        Megbízóink Magyarországon aktív multinacionális közép- és nagyvállalatok, valamint a világ legnagyobb és leghíresebb ügyvédi irodái.

        Ezért egyformán otthon vagyunk, ha határon átnyúló tranzakciókon nemzetközi csapatban dolgozunk, és akkor is, ha helyi piacismeretünknek köszönhetően speciális magyar jogi problémákat kell megoldanunk.
      
        Nagy gyakorlattal rendelkezünk jogi és szabályozási munkák előkészítésében is. Ügyvédeink német, angol, francia, olasz, orosz, spanyol, kínai és japán nyelven is nyújtanak jogi tanácsadást.
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
