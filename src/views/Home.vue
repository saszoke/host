<template>
  <div class="home" ref="home">
    <HomeComponent :dynamicWidth="dynamicWidth" picRef="./lawyerGroup.jpg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  props: ['dynamicWidth'],
  components: {
    HomeComponent
  }
}
</script>
