<template>

        <v-container fluid ma-0 pa-0  id="contact">
                <div class="parallaxxx pic3"></div>
        <v-snackbar v-model="snackbar" :timeout="timeout" color="#115874">
            <div class="text-center button">
                Copied to clipboard
            </div>
        </v-snackbar>
            <v-container :class="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 && $vuetify.breakpoint.width > 1100 ? 'px-15' : 'px-auto'">
                <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-5 px-lg-0 px-xl-15 text-justify" style="color: #BEAF67">Elérhetőségünk</h3>
            </v-container>
                <!-- <v-container  fluid class="ma-auto pa-auto" pa-0 ma-0 style="width:100%"> -->

                        <v-card flat tile class="white--text text-center ma-0 pa-0" color="#0A4770" :class="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 && $vuetify.breakpoint.width > 1100 ? 'px-15' : 'px-auto'">
                        <v-card-text>
                            <v-btn :x-large="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? true : false" v-for="icon in icons" :key="icon" color="#F4E8D2" class="mx-4" icon>
                                <v-icon> {{ icon }} </v-icon>
                            </v-btn>
                        </v-card-text>
                        </v-card>
                        <v-container fluid ma-0 pa-0>
                            <v-card max-height="600">
                                <AddGoogleMap />

                            </v-card>

                        </v-container>
                        <v-card flat tile class="white--text text-center ma-0 pa-0" color="#0A4770" :class="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 && $vuetify.breakpoint.width > 1100 ? 'px-15' : 'px-auto'">
                        <div class="d-flex flex-column flex-md-row justify-space-around font-weight-bold body-2 pt-5 mb-lg-10">
                            <div class="ma-3 px-0 d-md-flex spaced" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'letter-spacing: 0.1em;' : 'letter-spacing: 0;'">
                                <div class="py-2 mx-0"  style="color: #F4E8D2">{{ contact[2].meta }} </div>
                                <div>
                                    <v-btn icon color="#F4E8D2" >
                                        <v-icon> {{ "mdi-" + contact[2].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon color="#F4E8D2" @click="$emit('childAlert', 'address')">
                                        <v-icon class="copy">{{copyIcon}}</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="d-flex justify-center">
                            <div class="my-3 font-weight-bold button d-flex justify-space-between custom-border" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'letter-spacing: 0.1em; padding: 5px' : 'letter-spacing: 0.1em;'">
                                <div class="py-2 pl-2">{{ contact[0].meta }} </div>
                                <div class="">
                                    <v-btn icon color="#BEAF67" @click="$emit('childCall', 'tel:+52554442')">
                                        <v-icon> {{ "mdi-" + contact[0].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon color="#BEAF67" @click="$emit('childAlert', 'phone')">
                                        <v-icon class="copy">{{copyIcon}}</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            </div>
                            <div class="ma-3 px-0 d-md-flex spaced" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'letter-spacing: 0.1em;' : 'letter-spacing: 0;'"  style="color: #F4E8D2">
                                <div class="py-2 mx-0">{{ contact[1].meta }} </div>
                                <div>
                                    <v-btn icon color="#F4E8D2" href="mailto:foldespeter@foldeslegal.hu">
                                        <v-icon> {{ "mdi-" + contact[1].icon }} </v-icon>
                                    </v-btn>
                                    <v-btn icon color="#F4E8D2" @click="$emit('childAlert','mail')">
                                        <v-icon  class="copy">{{copyIcon}}</v-icon>
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
                        
                <!-- </v-container> -->
        </v-container>


</template>

<script>
import AddGoogleMap from "@/components/AddGoogleMap";

    export default {
        name: 'Contact',
        props: ['contact', 'address', 'copyIcon'],
        components: { AddGoogleMap },

        data: () => ({
            timeout: 1500,
            snackbar : false,
            icons: [
                'mdi-facebook',
                'mdi-linkedin',
            ],
            mail: 'mdi-email'
        }),

        methods: {

            doneScroll(elem){
                this.$router.push(`/${elem.id}`);
            }
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