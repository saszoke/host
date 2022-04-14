<template>
    <v-container fluid ma-0 pa-0 id="contact" >
        <v-card flat tile class="white--text text-center ma-0 pa-0" color="#0A4770">
            <div class="mx-auto" :style="`max-width: ${dynamicWidth}px`">
                <div class="d-flex flex-column flex-md-row justify-space-between font-weight-bold body-2 py-5 mb-lg-10">
                    
                    <div v-for="contactMethod in contact" :key="contactMethod.name" class="mb-3 my-md-auto mx-auto ma-0"
                    :class="contactMethod.contactStyle"
                    :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'letter-spacing: 0.1em; padding: 5px' : 'letter-spacing: 0;'">
                        <div class="pa-2 mx-0">{{ contactMethod.meta }} </div>
                        <div>
                            <v-btn icon :color="contactMethod.color" :href="contactMethod.href" :target="contactMethod.target">
                                <v-icon> {{ "mdi-" + contactMethod.icon }} </v-icon>
                            </v-btn>
                            <v-btn icon :color="contactMethod.color" @click="$emit('childAlert',contactMethod.name)">
                                <v-icon  class="copy">{{copyIcon}}</v-icon>
                            </v-btn>
                        </div>
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
    </v-container>
</template>

<script>
    export default {
        name: 'ContactDetails',
        props: ['contact', 'address', 'copyIcon', 'dynamicWidth'],

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
