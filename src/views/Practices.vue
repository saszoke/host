<template>
  <div class="contact">
    <PracticesComponent msg="This is a practices page."/>
  </div>
</template>

<script>
// @ is an alias to /src
import PracticesComponent from '@/components/PracticesComponent.vue'

export default {
  name: 'Practices',
  components: {
    PracticesComponent
  }
}
</script>
