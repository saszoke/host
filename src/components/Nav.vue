<template>
    <!-- NAV DRAWER STUFF -->
    <v-navigation-drawer v-model="drawer" absolute temporary sticky style="position:fixed; top:0; left:0; overflow-y:hidden;" color="#115874">
        <div class="d-flex flex-column justify-center" style="height: 100vh;">
            <div class="nav-element d-flex flex-column justify-center" style="height: 60%">
                <v-list nav class="button">
                <v-list-item-group>
                    <v-list-item v-for="(item, i) in menus" :key="i" @click.stop="drawer = !drawer">
                    <v-list-item-title class="font-weight-bold body-2" v-scroll-to="item.goto" style="color: #F4E8D2;">{{ englishOn ? item.dynamicName[0] : item.dynamicName[1] }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
                <div class="hidden-xs-only">
                    <h1 class="mt-sm-15 text-h5 font-weight-bold" v-scroll-to="menus[0].goto" style="cursor: pointer; color: #F4E8D2;" v-text="title"></h1>
                    <div class="subtitle-1" style="cursor: pointer; color: #F4E8D2;" v-text="englishOn ? dynamicSubtitle[0] : dynamicSubtitle[1]"></div>
                </div>
            </div>


            <div class="nav-element lighten-4 pb-sm-5 pt-sm-15" style="height: 40%; background-color: #F4E8D2">

                <div v-for="contactMethod in contactMethods" :key="contactMethod.meta">
                    <div style="background-color: background-color: #F4E8D2">
                        <div class="d-flex flex-column justify-space-between">
                            <div class="py-2 mr-2 body-2 button" style="color: #115874; font-weight: bold;">{{ contactMethod.meta }}</div>
                            <div>
                                <v-btn icon style="color: #115874; font-weight: bold;" :href="contactMethod.href" :target="contactMethod.target">
                                    <v-icon> mdi-{{ contactMethod.icon }} </v-icon>
                                </v-btn>
                                <v-btn icon style="color: #115874; font-weight: bold;" @click="$emit('childAlert',contactMethod.name)">
                                    <v-icon class="copy">{{copyIcon}}</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Nav',
    props: ['contactMethods','title','menus', 'englishOn', 'dynamicSubtitle', 'dynamicAddress', 'copyIcon'],
    data(){
        return{
            drawer: false
        }
    },
    methods: {
        openNav(){
            this.drawer = !this.drawer
        }
    }
}
</script>