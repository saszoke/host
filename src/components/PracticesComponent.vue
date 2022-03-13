<template>
  <v-container fluid ma-0 pa-0  id="practices" class="borderY">
    <div class="parallaxxx pic3"></div>
    <h3 class="text-h5 text-md-h4 text-xl-h3 borderY pa-2 px-md-5 px-lg-10 px-xl-15 text-justify" style="color: #BEAF67">Szakterületeink</h3>
      <v-container fluid ma-0 pa-0>
        <v-row no-gutters class="d-flex flex-column-reverse justify-space-between flex-md-row flex-md-space-between">
          <v-col cols="12" md="6" class="">
            <v-card class="d-flex flex-column justify-md-space-around " height="100%">
              <div class="align-self-start ma-5 subtitle-2 font-weight-bold button mx-lg-15 mainTitle">
                {{ specialities[0].mainTheme}}
              </div>
              <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[0].subThemes" :key="subSpec.title">
                  <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                  <div class="body-2 text-xl-body-1 text-justify align-self-start mx-15  px-lg-10 py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
              </div>
              <div class="align-self-end ma-5 subtitle-2 font-weight-bold button mx-lg-15 mainTitle">
                {{ specialities[1].mainTheme}}
              </div>
              <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[1].subThemes" :key="subSpec.title" >
                  <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                  <div class="body-2 text-xl-body-1 text-justify align-self-start mx-15  px-lg-10  py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
              </div>
              <div class="align-self-start ma-5 subtitle-2 font-weight-bold button mx-lg-15 mainTitle">
                {{ specialities[2].mainTheme}}
              </div>
              <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[2].subThemes" :key="subSpec.title" >
                  <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                  <div class="body-2 text-xl-body-1 text-justify align-self-start mx-15  px-lg-10  py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
              </div>
              <div class="align-self-end ma-5 subtitle-2 font-weight-bold button mx-lg-15 mainTitle">
                {{ specialities[3].mainTheme}}
              </div>
              <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[3].subThemes" :key="subSpec.title">
                  <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                  <div class="body-2 text-xl-body-1 text-justify align-self-start mx-15  px-lg-10 py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
              </div>
              <div class="align-self-start ma-5 ml-5 subtitle-2 font-weight-bold button mx-lg-15" >
                <div class="d-inline mainTitle" style="padding-bottom: 2%">
                  {{ specialities[4].mainTheme}}
                <!-- <strong>{{specialities[4].affix}}</strong> -->
                </div> 
                <v-card-text class="d-inline text-caption pa-0" style="color:#0A4770">
                  {{specialities[4].affix}}
                </v-card-text>

              </div>
              <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[4].subThemes" :key="subSpec.title">
                  <!-- <div class="button font-weight-bold button text-justify mx-10  mx-lg-15 px-lg-5" style="color:#0A4770;"> {{ subSpec.title}}</div> -->
                  <div class="body-2 text-xl-body-1 text-justify align-self-start mx-15  px-lg-10 py-5" style="color:#0A4770;"> {{ subSpec.title}}</div>
              </div>

            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-row no-gutters>
              <v-col cols="12">
                <div :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'econtainer' : 'minified'">
                  <v-img :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '100vh':'25vh'" src="wallpaper3.jpg" :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'element' : ''"> </v-img>
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
  height: 2100px;
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