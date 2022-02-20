<template>
  <v-container id="practices">
        <h3 class="text-h5 brown--text text--lighten-1  my-5 pa-2 borderY font-weight-bold">Szakterületeink</h3>

    <v-list>
      <v-list-group
        v-for="speciality in specialities" :key="speciality.mainTheme" class="my-5" active-class="orange--text text--lighten-4 grey"
      >
        <template v-slot:activator>
          <v-list-item-title class="text-justify py-5">{{ speciality.mainTheme }}</v-list-item-title>
        </template>

          <v-list-group
            sub-group
            active-class="grey--text orange lighten-4"
            v-for="subSpec in speciality.subThemes" :key="subSpec.title"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="text-justify grey--text text--darken-2">{{ subSpec.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item-group
              link
            >
              <div v-text="subSpec.body" class="text-justify ma-5 white--text text--lighten-4 grey pa-3 rounded-sm"></div>
            </v-list-item-group>
          </v-list-group>


      </v-list-group>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: 'Practices',
    props: ['specialities'],

    data: () => ({}),
  }




</script>
