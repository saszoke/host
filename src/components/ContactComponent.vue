<template>

        <v-container id="contact" class="ma-0 pa-0">
                    <h3 class="text-h5 brown--text text--lighten-1  my-5 pa-2 borderY font-weight-bold">Elérhetőségünk</h3>
            <v-footer
                dark
                padless
            >
                <v-card
                flat
                tile
                class="grey darken-2 white--text text-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 orange--text text--lighten-4"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="body-2 text-justify  orange--text text--lighten-4">
                    Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>
                <v-chip
                    class="ma-3 px-2 orange lighten-4"
                    outlined
                    label
                    >
                    <div class="py-2 mr-2 tailored-chip-content orange--text text--lighten-4">{{ contact[0].meta }} </div>

                    <div>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon> {{ "mdi-" + contact[0].icon }} </v-icon>
                        </v-btn>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon> mdi-content-copy </v-icon>
                        </v-btn>
                    </div>
                </v-chip>
                
                    
                <v-img :src="address.mapRef">
                    
                </v-img>
                <div
                    class="ma-3 px-2 orange--text text--lighten-4"

                    >
                    <div class="py-2 orange--text text--lighten-4">{{ contact[1].meta }} </div>

                    <div>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon> {{ "mdi-" + contact[1].icon }} </v-icon>
                        </v-btn>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon > mdi-content-copy </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div
                    class="ma-3 px-2 orange--text text--lighten-4"
                    >
                    <div class="py-2 orange--text text--lighten-4">{{ contact[2].meta }} </div>

                    <div>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon> {{ "mdi-" + contact[2].icon }} </v-icon>
                        </v-btn>
                        <v-btn icon class="orange--text text--lighten-4">
                            <v-icon > mdi-content-copy </v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-divider></v-divider>

                <v-card-text class="body-1 font-weight-bold text-uppercase mx-3 orange--text text--lighten-4">
                    {{ new Date().getFullYear() }} — <strong>Földes ügyvédi iroda</strong>
                </v-card-text>
                <v-card-text class="body-2 orange--text text--lighten-4">
                    <strong>Minden jog fenntartva</strong>
                </v-card-text>
                </v-card>
            </v-footer>
        </v-container>


</template>

<script>
    export default {
        name: 'Contact',
        props: ['contact', 'address'],

        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
            mail: 'mdi-email'
        })
    }
</script>

<style scoped>
    .tailored-chip{
        width: 75%;
    }
    .tailored-chip-content{
        width: 75%;
    }
</style>