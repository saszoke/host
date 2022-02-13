<template>
  <v-container>
    <div 
    class="cards"
    >
      <v-divider></v-divider>
        <v-sheet elevation="16">
          <h3 class="text-h5 my-5 pa-2 blue-grey darken-2  white--text">Ügyvédeink</h3>
        </v-sheet>
      <v-divider></v-divider>
      <v-card
        class="mx-auto my-3"
        max-width="400"
        v-for="lawyer in lawyers" :key="lawyer.name"
      >
        <v-img
          class="white--text align-end"

          :src="lawyer.pic"
        >
          <v-card-title style="color: white">{{ lawyer.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ lawyer.title }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ lawyer.specialities }}</div>
          <div>{{ lawyer.someFill }}</div>

        </v-card-text>

        <v-card-actions>
          <v-btn
            color="teal"
            dark
          >
            Névjegy
          </v-btn>

          <v-btn
            color="teal"
            dark
          >
            Kapcsolat
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Associates',

    data: () => ({
      
    }),

    props: ['lawyers']
  }
</script>
