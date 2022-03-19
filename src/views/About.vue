<template>
  <div ref="about">
    <AboutComponent :images="images"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'About',
  components: {
    AboutComponent
  },

  data: ()=>{
    return {
      images: {
        building: "./building.jpg"
      }
    }
  }
}
</script>
