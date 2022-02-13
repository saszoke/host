<template>
  <div>
    <AboutComponent msg="This is an ABOUT page."/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'About',
  components: {
    AboutComponent
  }
}
</script>
