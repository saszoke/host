<template>
  <div>
    <PracticesComponent :specialities="practices"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PracticesComponent from '@/components/PracticesComponent.vue'

export default {
  name: 'Practices',
  components: {
    PracticesComponent
  },

  data: ()=>{
    return {
      practices: [

        {id: 1, header: "Business Law", body: "Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin."},
        {id: 2, header: "Entertainment Law", body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."},
        {id: 3, header: "Employment Law", body: "Seos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"},
        {id: 4, header: "Human Rights Law", body: "A beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."}
      ]
    }
  }
}
</script>
