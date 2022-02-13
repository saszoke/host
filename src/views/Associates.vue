<template>
  <div>
    <AssociatesComponent :lawyers="lawyersList"/>
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

        {name: "John Doe", pic: "./portraitSnip2.JPG", title: "Lawyer Head Master", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
        {name: "Sebastian Doe", pic: "./portraitSnip1.JPG", title: "Lawyer", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
        {name: "Arthur Doe", pic: "./portraitSnip3.JPG", title: "Lawyer apprentice", specialities: ["speciality_1", "speciality_2", "speciality_3", "speciality_4", "speciality_5"], someFill: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},

      ]
    }
  }
}
</script>
