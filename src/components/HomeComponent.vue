<template>
  <v-container class="ma-0 pa-0">
    <v-img
      :src="picRef"
      style="-webkit-filter: grayscale(80%); filter: grayscale(80%);"
    >
    </v-img>
    <div class="text-h6 brown--text text--lighten-1 my-5 pa-2 ribbon font-weight-bold">Jogi képviselet több mint 25 év tapasztalattal</div>

    <div class="body-1 font-weight-bold text-uppercase mx-3 orange--text text--lighten-3 text-justify ">Odio dignissimos ducimus qui blanditiis</div>
    <div class="body-2 mx-3 grey--text text--darken-2 text-justify">Voluptatum deleniti atque corrupti dolores et quas molestias</div>
    <div class="body-2 mx-3 grey--text text--darken-2 text-justify">Quos dolores et quas molestias excepturi dignissimos ducimus qui</div>
    <v-divider class="ma-5"></v-divider>
    <div class="body-2 grey--text text--darken-2 text-justify mx-3">
          Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
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

<style>
.ribbon{
  background-color: #ffe0b2;
  border-top: 1px solid #8d6e63;
}
</style>