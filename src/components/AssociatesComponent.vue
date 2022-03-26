<template>

  <v-container fluid ma-0 pa-0 @scroll.passive="passiveScroll" id="associates">
      <div class="parallaxxx pic3"></div>
      <v-container :class="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 && $vuetify.breakpoint.width > 1100 ? 'px-15' : 'px-auto'">
        <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Munkatársaink</h3>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7">
          <div style="color: #BEAF67;" v-for="lawyer in lawyers" :key="lawyer.name" class="mx-auto mx-md-5 mt-lg-5">
            <div class="pa-1 text-h6 text-md-h5 text-xl-h4 text-justify rounded-tl-xl">{{ lawyer.name }}</div>
            <div 
              class="custom-border customFrame mx-auto" 
              :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: 350px' : 'width: 300px'">
              <v-img 
                
                :src="lawyer.pic" 
                :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 450 : 445" 
                :max-width="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 400 : 342"></v-img>
            </div>
            <div class="d-flex justify-space-between mx-auto my-2">
              <div></div>
              <div class="d-flex justify-end">
                <v-btn color="#0A4770" dark plain class="mr-5 font-weight-bold button"> Email </v-btn>
                <v-btn color="#BEAF67" dark outlined class="rounded-br-xl font-weight-bold button rounded-sm custom-border"> Hívás </v-btn>
              </div>
            </div>
          </div>

        </div>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7">
          <div style="color: #BEAF67;" v-for="lawyer in lawyers2" :key="lawyer.name" class="mx-auto mx-md-5 mt-lg-5">
            <div class="pa-1 text-h6 text-md-h5 text-xl-h4 text-justify rounded-tl-xl">{{ lawyer.name }}</div>
            <div 
              class="custom-border customFrame mx-auto" 
              :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: 350px' : 'width: 300px'">
              <v-img 
                
                :src="lawyer.pic" 
                :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 450 : 445" 
                :max-width="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 400 : 342"></v-img>
            </div>
            <div class="d-flex justify-space-between mx-auto my-2">
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

    props: ['lawyers','lawyers2']
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
    padding: 10px; width: 415px; 
  }



</style>