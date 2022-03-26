<template>
  <v-container fluid ma-0 pa-0  id="practices">
    <div class="parallaxxx pic3"></div>
    <v-container  :class="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 && $vuetify.breakpoint.width > 1100 ? 'px-15' : 'px-auto'">

      <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Szakterületeink</h3>

      <div class="d-flex justify-space-around flex-wrap">
        <div
          v-for="speciality in specialities" :key="speciality.mainTheme"
          class="my-5 my-md-5 mx-md-2 practiceContainer pa-5"
    
          :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: 300px; height: 950px;' : 'width: 300px; height: auto;'"
          >
          <div class="text-start subtitle-1 font-weight-bold button mainTitle" v-text="speciality.mainTheme"></div>

          <v-row class="mt-4" v-for="subtitle in speciality.subThemes" :key="subtitle.title" >
            <v-col cols="1" class="pt-3 mt-1">
              <div class="listDecoration"></div>
            </v-col>
            <v-col cols="10">
              <div class="body-2 text-lg-body-2 text-left mt-0" v-text="subtitle.title"></div>
            </v-col>
          </v-row>

        </div>

      </div>
    </v-container>

  </v-container>
</template>

<script>

  export default {
    name: 'Practices',
    props: ['specialities'],

    data: () => ({}),
    
}




</script>
<style scoped>

.mainTitle{
  text-transform: uppercase;
  color: #0A4770;
}
.subTitle{
  color: #0A4770;

}

.practiceContainer{
  background-color: #fffbf5;
  border-radius: 15px;
  border: 2px solid #BEAF67;
}

.listDecoration{
  width: 10px;
  height: 10px;
  background-color: #fffbf5;
  border-radius: 3px;

  border: 2px solid #BEAF67;

}
</style>