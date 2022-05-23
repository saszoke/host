<template>
<!-- eredeti: #0A4770 -->
    <v-banner sticky color="#0A4770" elevation="4" style="padding:0;">
        <div class="d-flex flex-column flex-md-row justify-space-around">

        <!-- FIRST CHILD BANNER -->
        <div class="d-flex justify-space-between justify-sm-space-around mb-2 mb-md-0 mr-2 mr-md-0">
            <div class="mr-5 mx-md-15 py-auto my-auto order-md-0">
            <v-app-bar-nav-icon  color="#F4E8D2" @click.stop="openNavInChild"></v-app-bar-nav-icon>
            </div>

            <div class=" mx-md-15 order-md-2 py-1" style="font-family: Galliard-Std-Roman">
            <div class="align-center order-lg-first text-h5 text-md-h4 text-xl-h3 font-weight-bold  my-auto"
                v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title">
            </div>
            <div class="subtitle-2" style="cursor: pointer; color: #F4E8D2;" v-text="englishOn ? dynamicSubtitle[0] : dynamicSubtitle[1]"></div>
            </div>
            

            <div class=" mx-md-15 py-auto my-auto order-md-1 d-md-none">
            <label class="switch">
                <input type="checkbox"  @click="$emit('langSwitch')">
                <span class="slider round">
                <div class="switchText text-body-2 font-weight-bold">
                EN
                </div>
                </span>
            </label>
            </div>
        </div>


        <!-- SECOND CHILD BANNER -->
        <div class="order-lg-last d-flex justify-center justify-lg-space-between mt-md-0 mx-md-10 mb-md-0">

            <div v-for="contactMethod in contactMethods.slice(1,3)" :key="contactMethod.name" class="d-flex justify-space-between my-auto button font-weight-bold custom-border fixedNavButtonWidth" :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'width: auto; letter-spacing: 0.1em; padding: 5px;' : 'width: 140px;'" :class="contactMethod.class4Banner">
                <div class="py-2 pl-2" style="color: #BEAF67;" v-text="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? contactMethod.meta : contactMethod.name.toUpperCase()"></div>

                <div class="ma-0 pa-0">
                    <v-btn icon color="#BEAF67" class="mr-0" :href="contactMethod.href" :target="contactMethod.target">
                        <v-icon> mdi-{{contactMethod.icon}} </v-icon>
                    </v-btn>
                    <v-btn icon color="#BEAF67" class="mr-0" @click="$emit('childAlert',contactMethod.name)">
                        <v-icon class="copy">{{copyIcon}}</v-icon>
                    </v-btn>
                </div>
            </div>

            <div class=" mx-md-15 py-auto my-auto order-md-1 d-none d-md-flex">
            <label class="switch">
                <input type="checkbox"  @click="$emit('langSwitch')">
                <span class="slider round">
                <div class="switchText text-body-2 font-weight-bold">
                EN
                </div>
                </span>
            </label>
            </div>

        </div>

        </div>
    </v-banner>
</template>

<script>
export default {
    name: 'Banner',
    props: ['contactMethods','title','menus', 'englishOn', 'dynamicSubtitle', 'dynamicAddress', 'copyIcon'],
    methods: {
        openNavInChild(){
            this.$emit('openNavInChild')
        }
    }
}
</script>