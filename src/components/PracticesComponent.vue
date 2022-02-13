<template>
  <v-container>
    <v-divider></v-divider>
      <v-sheet elevation="16">
        <h3 class="text-h5 my-5 pa-2 blue-grey darken-2  white--text">Szakterületeink</h3>
      </v-sheet>
    <v-divider class="my-5"></v-divider>

    <v-alert
      text
      color="blue-grey darken-2"
      v-for="speciality in specialities" :key="speciality.header"
    >
      <h5 class="text-h5 ma-3 font-weight-bold">
        {{speciality.header}}
      </h5>
      <div>
        {{speciality.body}}
      </div>

      <v-divider
        class="my-4 blue-grey darken-2"
        style="opacity: 0.22"
      ></v-divider>

      <v-row
        align="center"
        no-gutters
      >

          <v-btn
            color="teal"
            outlined
            block
          >
            Ügyvédet
          </v-btn>
      </v-row>
    </v-alert>


    
  </v-container>
</template>

<script>
  export default {
    name: 'Practices',
    props: ['specialities'],

    data: () => ({}),
  }
</script>
