<template>
  <v-container>
    <div 
    class="cards"
    >
          <h3 class="text-h5 brown--text text--lighten-1  my-5 pa-2 borderY font-weight-bold">Ügyvédeink</h3>
      <div
        class="mx-auto my-3"
        max-width="400"
        v-for="lawyer in lawyers" :key="lawyer.name"
      >

                <div 
            class="pa-1 text-h4 orange--text text--lighten-3 text-justify rounded-tl-xl" 
            >{{ lawyer.name }}
          </div>
        <v-img
          class="white--text align-end"
          style="-webkit-filter: grayscale(80%); filter: grayscale(80%);"
          :src="lawyer.pic"
        >
        </v-img>


        <div class="d-flex justify-space-between  my-2">


          <h4 
            class="pa-1 text-h5 white--text text--lighten-4" 
            >{{ lawyer.name }}
          </h4>

          <div class="d-flex justify-end">
            <v-btn
              color="grey darken-2"
              dark
              plain
              class="mr-5 text-h6"
            >
              Email
            </v-btn>

            <v-btn
              color="orange lighten-3"
              dark
              outlined
              class="rounded-br-xl text-h6 rounded-sm"
            >
              Hívás
            </v-btn>
          </div>
        </div>
      </div>
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

