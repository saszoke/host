<template>
  <div class="contact">  
    <ContactComponent :contact="contactMethods" :address="address"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'Contact',
  components: {
    ContactComponent
  },

  data: ()=>{
    return {
      contactMethods: [

        {id: 1, name: "phone", meta: "+52 554 442", icon: "sample1"},
        {id: 2, name: "email", meta: "foldesugyvediiroda@foldes.hu", icon: "sample2"},
        {id: 3, name: "watsapp", meta: "https://watsapplink/foldes/", icon: "sample3"},
        {id: 4, name: "linkedin", meta: "https://linkedin.com/foldes/", icon: "sample4"}
      ],
      address: {
        zip: "4287",
        city: "Debrecen",
        street: "Csokonai street",
        number: "5",
        mapRef: "./mapSample.JPG",
      }
    }
  }
}
</script>
