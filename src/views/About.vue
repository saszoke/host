<template>
  <div ref="about">
    <AboutComponent :dynamicWidth="dynamicWidth"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'About',
  props: ['dynamicWidth'],
  components: {
    AboutComponent
  },

  data: ()=>{}
}
</script>
