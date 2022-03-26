<template>
  <div ref="associates">
    <AssociatesComponent :lawyers="lawyersList" :lawyers2="lawyersList2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AssociatesComponent from '@/components/AssociatesComponent.vue'

export default {
  name: 'Associates',
  components: {
    AssociatesComponent
  },

  data: ()=>{
    return {
      lawyersList: [

        {parity: 0, name: "Dr. Földesné dr. Sipos Judit", pic: "./portraitSnipp2.JPG", title: "Lawyer Head Master", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
        {parity: 1, name: "Dr. Földes Péter Tamás", pic: "./portraitSnipp3.JPG", title: "Lawyer apprentice", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},

      ],
      lawyersList2: [
        {parity: 0, name: "Molnár Erika", pic: "./portraitSnipp1.jpg", title: "Lawyer", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
      ]
    }
  }
}
</script>
