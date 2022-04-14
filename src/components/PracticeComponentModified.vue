<template>
    <div class="my-5 my-md-5 mx-md-2 practiceContainer pa-5"

        :style="$vuetify.breakpoint.xs ? 'width: 300px; height: auto;' : 'width: 300px; height: 500px;'"
        >

            <div v-for="theme in speciality" :key="theme">
                <div class="text-start subtitle-1 font-weight-bold button mainTitle" v-text="theme.mainTheme" :class="theme.mainTheme == 'Védjegy ügyek' ? 'mt-10' : 'mt-0'"></div>

                <v-row class="mt-4" v-for="subtitle in theme.subThemes" :key="subtitle.title" >
                <v-col cols="1" class="pt-3 mt-1">
                    <div class="listDecoration"></div>
                </v-col>
                <v-col cols="10">
                    <div class="body-2 text-lg-body-2 text-left mt-0" v-text="subtitle.title"></div>
                </v-col>
                </v-row>
            </div>

    </div>
</template>

<script>
export default {
    name: 'PracticeComponentModified',
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