<template>
    <div class="my-5 my-md-5 mx-auto mx-sm-3 mx-md-5 practiceContainer pa-5"

        :style="$vuetify.breakpoint.xs ? 'width: 300px; height: auto;' : 'height: auto;'"
        >
        <!-- MARKER -->
        <div class="text-start subtitle-1 font-weight-bold button mainTitle" v-text="speciality.mainTheme"></div>

        <v-row>
            <v-col v-for="subtitle in speciality.subThemes" :key="subtitle.title" cols="12" sm="6" md="4">
                <v-row class="mt-3">
                    <v-col cols="2" class="pt-3 mt-1">
                        <div class="listDecoration"></div>
                    </v-col>
                    <v-col cols="10">
                        <!-- MARKER -->
                        <div class="body-2 text-lg-body-2 text-left mt-0" v-text="subtitle.title" style="color: #0A4770;"></div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Practice',
    props: ['speciality'],
    data: ()=>{
        return {}
    }
}
</script>

<style scoped>

    .mainTitle{
    text-transform: uppercase;
    color: #0A4770;
    }
    .subTitle{
    color: #0A4770;

    }

    .practiceContainer{
    background-color: #fffbf5;
    border-radius: 15px;
    border: 2px solid #BEAF67;
    }

    .listDecoration{
    width: 10px;
    height: 10px;
    background-color: #fffbf5;
    border-radius: 3px;

    border: 2px solid #BEAF67;

    }
</style>