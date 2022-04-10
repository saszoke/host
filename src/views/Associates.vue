<template>
  <div ref="associates">
    <v-container fluid ma-0 pa-0 @scroll.passive="passiveScroll" id="associates">
      <div class="parallaxxx" :class="$vuetify.breakpoint.width < 750 ? 'whole' : 'firstHalf'"></div>
      <v-container class="px-md-5" :style="`max-width: ${dynamicWidth}px`">
        <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 px-xl-15 text-justify" style="color: #BEAF67"><span class="bottomLine">Munkatársaink</span></h3>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7">
          <div style="color: #BEAF67;" v-for="lawyer in lawyersList.firstLine" :key="lawyer.name" class="mx-auto mx-md-5 mt-lg-5">
            <AssociateCard :lawyer="lawyer" />
          </div>

        </div>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7" v-for="lawyer in lawyersList.secondLine" :key="lawyer.name">
          <AssociateCard :lawyer="lawyer" />
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import AssociateCard from '@/components/AssociateCard.vue'

export default {
  name: 'Associates',
  props: ['dynamicWidth'],
  components: {
    AssociateCard
  },

  data: ()=>{
    return {
      lawyersList: 
        {
          firstLine: [
            {name: "Dr. Földesné dr. Sipos Judit", title: 'Ügyvéd', pic: "./portraitSnipp2.JPG"},
            {name: "Dr. Földes Péter Tamás", title: 'Ügyvédjelölt', pic: "./portraitSnipp3.JPG"},

          ],
          secondLine: [
            {name: "Molnár Erika", title: 'Jogi Asszisztens', pic: "./portraitSnipp1.jpg"},
          ]
        }
    }
  }
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