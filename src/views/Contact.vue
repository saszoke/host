<template>
  <div class="contact">  
    <ContactComponent msg="This is a contact page."/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'Contact',
  components: {
    ContactComponent
  }
}
</script>
