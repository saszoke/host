<template>
  <v-container fluid ma-0 pa-0  id="practices">
    <div class="parallaxxx pic3"></div>
    <v-container>

    <h3 class="text-h5 text-md-h4 text-xl-h3 pa-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Szakterületeink</h3>
    </v-container>
      <v-container fluid ma-0 pa-0>
        <v-row no-gutters class="d-flex flex-column-reverse justify-space-between flex-md-row flex-md-space-between">
          <v-col cols="12" md="6" >
            <v-row no-gutters class="d-flex flex-column-reverse justify-space-between flex-md-row flex-md-space-between">
            
              <v-col cols="12" md="4" class="">
              </v-col>
              <v-col cols="12" md="8">
                <div class="d-flex flex-column justify-md-space-around" v-for="speciality in specialities" :key="speciality.mainTheme" height="100%">
                  <div class="align-self-start ma-5 subtitle-2 font-weight-bold button mx-lg-15 mainTitle">
                    {{ speciality.mainTheme}}
                  </div>
                  <div class="d-flex flex-column justify-space-around" v-for="subSpec in speciality.subThemes" :key="subSpec.title">
                      <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                      <div class="body-2 text-lg-body-1 text-justify align-self-start mx-15  px-lg-10 py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
                  </div>
                </div>
              </v-col>
            </v-row>


          </v-col>
          <v-col cols="12" md="6" >
                <v-row no-gutters>
                  <v-col cols="12">
                    <div :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'econtainer' : 'minified'">
                      <v-img :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '100vh':'25vh'" src="wallpaperSnip.jpg" :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'element' : ''"> </v-img>
                    </div>
                  </v-col>
                  </v-row>

          </v-col>
        </v-row>
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
.ribbon{
  background-color: #ffe0b2;
}

.sticky-top {
    position: sticky;
    top: 0;
    background-image: url('../assets/wallpaper3.jpg');
    /* width: 500px; */
}


.prec {
	height: 0;
	background-color: gray;
}

.prec2 {
	height: 0;
	background-color: gray;
}

.econtainer {
  display: flex;
  align-items: flex-start;
  height: 2250px;
  /* margin-bottom: 1000px; */
}

.element {
  position: sticky;
  top: 10%;
}
.minified{
  display: flex;
  align-items: flex-start;
}

.mainTitle{
  color:#0A4770; padding-bottom: 1%; border-bottom: 2px solid #BEAF67; text-transform: uppercase;
}
</style>