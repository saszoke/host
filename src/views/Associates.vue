<template>
  <div class="contact">
    <AssociatesComponent msg="This is an associates page."/>
  </div>
</template>

<script>
// @ is an alias to /src
import AssociatesComponent from '@/components/AssociatesComponent.vue'

export default {
  name: 'Associates',
  components: {
    AssociatesComponent
  }
}
</script>
