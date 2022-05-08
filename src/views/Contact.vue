<template>
  <div ref="contact">  
    <v-container fluid ma-0 pa-0 id="contact">
      <div :class="$vuetify.breakpoint.width > 1000 ? 'parallaxxx building3' : ''"></div>
      <v-snackbar v-model="snackbar" :timeout="timeout" color="#115874">
          <div class="text-center button">
              Copied to clipboard
          </div>
      </v-snackbar>
      <v-container class="px-md-5" :style="`max-width: ${dynamicWidth}px`">
          <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 text-justify" style="color: #BEAF67">Elérhetőségünk</h3>
      </v-container>

      <v-card flat tile class="white--text text-center ma-0 pa-0" color="#0f344f" >
          <v-card-text>
              <v-btn :x-large="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? true : false" v-for="icon in icons" :key="icon" color="#F4E8D2" class="mx-4" icon>
                  <v-icon> {{ icon }} </v-icon>
              </v-btn>
          </v-card-text>
      </v-card>
      <v-container fluid ma-0 pa-0>
          <v-card max-height="400">
              <AddGoogleMap />
          </v-card>
      </v-container>
      <ContactDetails :dynamicWidth="dynamicWidth" :contact="contactMethods" :copyIcon="copyIcon" @childAlert="$emit('childAlert',$event)" @childCall="$emit('childCall', 'tel:+52554442')"/>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import ContactDetails from '@/components/ContactDetails.vue'
import AddGoogleMap from "@/components/AddGoogleMap"

export default {
  name: 'Contact',
  components: {
    ContactDetails,
    AddGoogleMap
  },
  props: ['contactMethods','copyIcon', 'dynamicWidth'],

  data: ()=>{
    return {
      
      social: [
        {id: 3, name: "watsapp", meta: "https://watsapplink/foldes/", icon: "sample3"},
        {id: 4, name: "linkedin", meta: "https://linkedin.com/foldes/", icon: "sample4"}
      ],
      timeout: 1500,
      snackbar : false,
      icons: [
          'mdi-facebook',
          'mdi-linkedin',
      ],
      mail: 'mdi-email'
    }
  }
}
</script>
