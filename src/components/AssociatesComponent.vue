<template>

  <v-container fluid ma-0 pa-0 @scroll.passive="passiveScroll" id="associates">
      <div class="parallaxxx pic3"></div>
      <v-container>
        <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Munkatársaink</h3>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 my-lg-7">
          <div style="color: #BEAF67;" v-for="lawyer in lawyers" :key="lawyer.name" class="mx-md-5">
            <div class="pa-1 text-h6 text-md-h5 text-xl-h4 text-justify rounded-tl-xl">{{ lawyer.name }}</div>
            <div 
              class="custom-border customFrame mx-auto" 
              :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: 515px' : 'width: 300px'">
              <v-img 
                class="align-end" 
                :src="lawyer.pic" 
                :min-height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 645 : 445" 
                :max-width="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 542 : 342"></v-img>
              <!-- <v-img class="white--text align-end" style="-webkit-filter: grayscale(80%); filter: grayscale(80%);" :src="lawyer.pic" min-height="400" max-height="700"></v-img>
              <v-img class="white--text align-end" style="-webkit-filter: grayscale(80%); filter: grayscale(80%);" :src="lawyer.pic" min-height="400" max-height="700"></v-img> -->
            </div>
            <div class="d-flex justify-space-between  my-2">
              <div></div>
              <div class="d-flex justify-end">
                <v-btn color="#0A4770" dark plain class="mr-5 font-weight-bold button"> Email </v-btn>
                <v-btn color="#BEAF67" dark outlined class="rounded-br-xl font-weight-bold button rounded-sm custom-border"> Hívás </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-container>
  </v-container>
</template>

<script>
// import _ from 'lodash';

  export default {
    name: 'Associates',

    data: () => ({
      dynamicClass: 'mx-15 px-15 my-5 my-lg-0 align-self-start',
      dynamicClass2: 'mx-15 px-15 my-5 my-lg-10 align-self-end'
    }),

    methods: {
      passiveScroll(){
        console.log('you are at associates.')
      }
    },

    props: ['lawyers']
  }
</script>

<style>
  .button{
    font-family: Arial, Helvetica, sans-serif !important;
  }

  .button .spaced {
    letter-spacing: .1666666667em;
  }

  .customFrame{
    padding: 10px; width: 515px;
  }



</style>