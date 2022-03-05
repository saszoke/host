<template>
        <v-container fluid ma-0 pa-0   id="contact">
                <div class="parallaxxx pic3"></div>
            <h3 class="text-h5 text-md-h4 text-xl-h3 borderY pa-2 px-md-10 px-xl-15 text-justify" style="color: #BEAF67">Elérhetőségünk</h3>

                    <v-footer dark padless>
                        <v-card flat tile class="white--text text-center" color="#0A4770" >
                        <v-card-text>
                            <v-btn v-for="icon in icons" :key="icon" color="#F4E8D2" class="mx-4" icon>
                                <v-icon> {{ icon }} </v-icon>
                            </v-btn>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-text class="body-2 text-justify" style="color: #F4E8D2;">
                            Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </v-card-text>

                        <v-divider></v-divider>
                        <div class="d-flex justify-center">
                            <div class="my-3 font-weight-bold button d-flex justify-space-between custom-border fixedFooterButtonWidth">
                                <div class="py-2 pl-2">{{ contact[0].meta }} </div>
                                <div class="">
                                    <v-btn icon style="color: #BEAF67">
                                        <v-icon> {{ "mdi-" + contact[0].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon style="color: #BEAF67">
                                        <v-icon> mdi-content-copy </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                        
                        <v-img :src="address.mapRef" max-height="600"></v-img>
                        <div class="d-flex flex-column flex-md-row justify-space-around font-weight-bold body-2 mt-5 my-lg-10">
                            <div class="ma-3 px-0 d-md-flex spaced">
                                <div class="py-2 mx-0"  style="color: #F4E8D2">{{ contact[2].meta }} </div>
                                <div>
                                    <v-btn icon style="color: #F4E8D2">
                                        <v-icon> {{ "mdi-" + contact[2].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon style="color: #F4E8D2">
                                        <v-icon > mdi-content-copy </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="ma-3 px-0 d-none d-md-flex spaced">
                                <div class="py-2 mx-0" style="color: #F4E8D2">{{ contact[0].meta }} </div>
                                <div>
                                    <v-btn icon  style="color: #F4E8D2">
                                        <v-icon> {{ "mdi-" + contact[0].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon  style="color: #F4E8D2">
                                        <v-icon > mdi-content-copy </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="ma-3 px-0 d-md-flex spaced"  style="color: #F4E8D2">
                                <div class="py-2 mx-0">{{ contact[1].meta }} </div>
                                <div>
                                    <v-btn icon  style="color: #F4E8D2">
                                        <v-icon> {{ "mdi-" + contact[1].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon  style="color: #F4E8D2">
                                        <v-icon > mdi-content-copy </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </div>

                        <v-divider></v-divider>

                        <v-card-text class="subtitle-2 font-weight-bold text-uppercase overline" style="color: #F4E8D2">
                            {{ new Date().getFullYear() }} — <strong v-scroll-to="{ el: '#home', offset: 0, onDone: this.doneScroll, duration: 1500 }" style="cursor: pointer">Földes ügyvédi iroda</strong>
                        </v-card-text>
                        <v-card-text class="body-2" style="color: #F4E8D2">
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
        }),

        methods: {
            doneScroll(elem){
                this.$router.push(`/${elem.id}`);
            },
        }
        
    }
</script>

<style scoped>
    .tailored-chip{
        width: 75%;
    }
    .tailored-chip-content{
        width: 75%;
    }
    .fixedFooterButtonWidth{
        width: 180px;
    }
</style>