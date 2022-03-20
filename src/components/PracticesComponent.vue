<template>
  <v-container fluid ma-0 pa-0  id="practices">
    <div class="parallaxxx pic3"></div>
    <v-container>

    <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Szakterületeink</h3>

    <div class="d-flex justify-space-around flex-wrap">
      <div
        v-for="speciality in specialities" :key="speciality.mainTheme"
        class="my-5 ma-md-10 practiceContainer pa-5"
  
        :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: 300px; height: 675px;' : 'width: 300px; height: auto;'"
        >
        <div class="text-start subtitle-1 font-weight-bold button mainTitle" v-text="speciality.mainTheme"></div>

        <div class="body-2 text-lg-body-2 mt-2 text-justify px-3 subTitle" v-for="subtitle in speciality.subThemes" :key="subtitle.title" v-text="subtitle.title"></div>

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
  /* height: 2250px; */
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
</style>