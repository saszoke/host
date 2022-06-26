<template>
    <v-banner sticky color="#0e5c60" elevation="4"  :height="dynamicBannerHeight()" class="d-flex flex-column justify-center my-0 py-0">
        <div class="d-flex flex-column flex-md-row justify-space-around" style="max-width: 1000px; margin: 0 auto;">

            <!-- FIRST CHILD BANNER -->
            <div class="d-flex justify-space-between justify-sm-space-around my-md-0 py-md-0 mb-2 mr-2 mr-md-0">
                <div class="mr-5 mr-md-0 mx-md-0 py-auto my-auto order-md-0">
                <v-app-bar-nav-icon  color="#F4E8D2" @click.stop="openNavInChild"></v-app-bar-nav-icon>
                </div>

                <div class=" mx-md-15 order-md-2 py-1" style="font-family: Galliard-Std-Roman">
                <div id="mainTitle" class="align-center order-lg-first text-h5 text-md-h4 text-xl-h3 font-weight-bold mb-0 pb-0"
                    v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title">
                </div>
                <div id="subTitle" class="subtitle-2 mt-0 pt-0" style="cursor: pointer; color: #F4E8D2;" v-text="englishOn ? dynamicSubtitle[0] : dynamicSubtitle[1]"></div>
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
            <div class="order-lg-last d-flex justify-center justify-lg-space-between mt-md-0 mx-md-0 mb-md-0">

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
        },

        dynamicBannerHeight(){
            var dHeight = ""
            if( 
                ((this.$vuetify.breakpoint.height > 600) && (this.$vuetify.breakpoint.name == "md")) ||
                ((this.$vuetify.breakpoint.height > 700) && (this.$vuetify.breakpoint.name == "lg")) ||
                ((this.$vuetify.breakpoint.height > 800) && (this.$vuetify.breakpoint.name == "xl"))){
                switch (this.$vuetify.breakpoint.name) {
                    case "md":
                    dHeight = '10vh';
                    break;
                    case "lg":
                    dHeight = '10vh';
                    break;
                    case "xl":
                    dHeight = '8vh';
                    break;
                }
            }

            return dHeight
            },
    }
}
</script>

<style>
#mainTitle{
    margin-top: 0;
    margin-bottom:0;
    padding-top:0;
    padding-bottom:0;
    -webkit-margin-top: 0%;
    -webkit-margin-bottom: 0%;
    -webkit-padding-top: 0%;
    -webkit-padding-bottom: 0%;
    -moz-margin-top: 0;
    -moz-margin-bottom: 0;
    -moz-padding-top: 0;
    -moz-padding-bottom: 0;
}

#subTitle{
    margin-top: 0;
    margin-bottom:0;
    padding-top:0;
    padding-bottom:0;
    -webkit-margin-top: 0%;
    -webkit-margin-bottom: 0%;
    -webkit-padding-top: 0%;
    -webkit-padding-bottom: 0%;
    -moz-margin-top: 0;
    -moz-margin-bottom: 0;
    -moz-padding-top: 0;
    -moz-padding-bottom: 0;
}




</style>