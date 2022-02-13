<template>

        <v-container>
                <v-divider></v-divider>
                    <v-sheet elevation="16">
                        <h3 class="text-h5 my-5 pa-2 blue-grey darken-2  white--text">Elérhetőségünk</h3>
                    </v-sheet>
                <v-divider class="my-5"></v-divider>
            <v-footer
                dark
                padless
            >
                <v-card
                flat
                tile
                class="blue-grey darken-2 white--text text-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text pt-0">
                    Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text pt-0">
                    {{contact[0].name}} {{ contact[0].meta}}
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    {{contact[1].name}} {{ contact[1].meta}}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text pt-0">
                    {{ address.zip }} {{ address.city }} {{ address.street }} {{ address.number }}
                </v-card-text>
                <v-img :src="address.mapRef"></v-img>
                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Földes ügyvédi iroda</strong>
                </v-card-text>
                <v-card-text class="white--text">
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
        })
    }
</script>
