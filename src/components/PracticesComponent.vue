<template>
  <v-container fluid ma-0 pa-0  id="practices" style="background-color: #fff;">
    <div class="parallaxxx pic3"></div>
    <h3 class="text-h5 text-md-h4 text-xl-h3 borderY pa-2 px-md-10 px-xl-15 text-justify" style="color: #BEAF67">Szakterületeink</h3>
      <v-container fluid ma-0 pa-0>
        <div class="d-flex flex-column-reverse justify-space-between">
          <div style="" class="d-flex flex-column">
            <div class="align-self-start ma-5 text-h6 font-weight-bold button" style="color:#0A4770; padding-bottom: 1%; border-bottom: 2px solid #BEAF67;">
              {{ specialities[0].mainTheme}}
            </div>
            <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[0].subThemes" :key="subSpec.title">
                <div class="button font-weight-bold button text-justify mx-10" style="color:#0A4770;"> {{ subSpec.title}}</div>
                <div class="body-2 text-xl-body-1 text-justify align-self-center mx-15 py-5" style="color:#0A4770;"> {{ subSpec.body}}</div>
            </div>
            <div class="align-self-end ma-5 text-h6 font-weight-bold button" style="color:#0A4770; padding-bottom: 1%; border-bottom: 2px solid #BEAF67;">
              {{ specialities[1].mainTheme}}
            </div>
            <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[1].subThemes" :key="subSpec.title" >
                <div class="button font-weight-bold button text-justify mx-10" style="color:#0A4770;"> {{ subSpec.title}}</div>
                <div class="body-2 text-xl-body-1 text-justify align-self-center mx-15 py-5" style="color:#0A4770;"> {{ subSpec.body}}</div>
            </div>
            <div class="align-self-start ma-5 text-h6 font-weight-bold button" style="color:#0A4770; padding-bottom: 1%; border-bottom: 2px solid #BEAF67;">
              {{ specialities[2].mainTheme}}
            </div>
            <div class="d-flex flex-column justify-space-around" v-for="subSpec in specialities[1].subThemes" :key="subSpec.title" >
                <div class="button font-weight-bold button text-justify mx-10" style="color:#0A4770;"> {{ subSpec.title}}</div>
                <div class="body-2 text-xl-body-1 text-justify align-self-center mx-15 py-5" style="color:#0A4770;"> {{ subSpec.body}}</div>
            </div>
          </div>
          <v-img src="wallpaper3.jpg"></v-img>
          <!-- <div style="
            background-image: url('wallpaper3.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            height: 500px;
          "></div> -->
        </div>

        <!-- <div class="d-flex justify-space-around mx-5">
          <v-alert
            text
            outlined
            color="orange lighten-2"
            v-for="speciality in specialities" :key="speciality.mainTheme"
            class="ma-5"
            width="30%"
          >
            <div class="text-justify text-h6 font-weight-bold" v-text="speciality.mainTheme"></div>
            <v-alert
              color="brown lighten-4 brown--text text--lighten-1"
              v-for="subSpec in speciality.subThemes" :key="subSpec.title"
              height="250px"
              class="mt-5 ribbon"
            >
              <div class="text-justify body-1 font-weight-bold" v-text="subSpec.title"></div>
              <div v-text="subSpec.body" class="button text-justify ma-5 white--text text--lighten-4 orange lighten-3 pa-3 rounded-sm"></div>
            </v-alert>
          </v-alert>

        </div> -->

      </v-container>   
      
      <!-- <v-container fluid ma-0 pa-0 class="hidden-md-and-down">

          

        <div class="d-flex justify-space-around mx-5">
          <v-alert
            text
            outlined
            color="orange lighten-2"
            v-for="speciality in specialities" :key="speciality.mainTheme"
            class="ma-5"
            width="30%"
          >
            <div class="text-justify text-h6 font-weight-bold" v-text="speciality.mainTheme"></div>
            <v-alert
              color="brown lighten-4 brown--text text--lighten-1"
              v-for="subSpec in speciality.subThemes" :key="subSpec.title"
              height="250px"
              class="mt-5 ribbon"
            >
              <div class="text-justify body-1 font-weight-bold" v-text="subSpec.title"></div>
              <div v-text="subSpec.body" class="button text-justify ma-5 white--text text--lighten-4 orange lighten-3 pa-3 rounded-sm"></div>
            </v-alert>
          </v-alert>

        </div>

      </v-container>   -->
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
</style>