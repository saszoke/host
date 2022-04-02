<template>
  <div ref="contact">  
    <ContactComponent :dynamicWidth="dynamicWidth" :contact="contactMethods" :address="address" :copyIcon="copyIcon" @childAlert="$emit('childAlert',$event)" @childCall="$emit('childCall', 'tel:+52554442')"/>
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
  props: ['copyIcon', 'dynamicWidth'],

  data: ()=>{
    return {
      contactMethods: [

        {name: "phone", meta: "+52 554 442", icon: 'phone-outline'},
        {name: "email", meta: "foldespeter@foldeslegal.hu", icon: "email-multiple-outline"},
        {name: "address", meta: "4024 Debrecen 5 Piac street", icon: "map-marker-outline"}
      ],
      address: {
        zip: "4287",
        city: "Debrecen",
        street: "Csokonai street",
        number: "5",
        mapRef: "./mapSample.JPG",
      },
      social: [
        {id: 3, name: "watsapp", meta: "https://watsapplink/foldes/", icon: "sample3"},
        {id: 4, name: "linkedin", meta: "https://linkedin.com/foldes/", icon: "sample4"}
      ]
    }
  }
}
</script>
