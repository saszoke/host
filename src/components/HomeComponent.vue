<template>
  <v-container>
    <v-img
      :src="picRef"
    >
    </v-img>
    <v-divider></v-divider>
      <v-sheet elevation="16">
        <h3 class="text-h5 my-5 pa-2 blue-grey darken-2  white--text">Valami menő szlogen a cégről esetleg?</h3>
      </v-sheet>
    <v-divider class="ma-5"></v-divider>

    <h5 class="ma-1">Odio dignissimos ducimus qui blanditiis praesentium</h5>
    <h5 class="ma-1">Voluptatum deleniti atque corrupti</h5>
    <h5 class="ma-1">Quos dolores et quas molestias excepturi</h5>
    <v-divider class="ma-5"></v-divider>
    <p>
          Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.    </p>
    <div class="d-flex justify-space-around">
      <v-btn
        class="ma-5"
        outlined
        color="teal"
        width="35%"
      >
        Kapcsolat
      </v-btn>

      <v-btn
        class="ma-5"
        outlined
        color="teal"
        width="35%"
      >
        Email
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    props: ['picRef'],

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ]
    }),
  }
</script>
