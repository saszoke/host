<template>
    <v-navigation-drawer v-model="drawer" absolute temporary sticky color="#F4E8D2" style="position:fixed; top:0; left:0;">
        <div class="d-flex flex-column" style="height: 100vh; overflow-y: auto" :class="$vuetify.breakpoint.height <= 720 ? 'justify-start':''">
            <div class="text-left" style="background-color: #09393d" :class="$vuetify.breakpoint.height > 720 ? 'twoThird d-flex flex-column justify-center':'py-7'">
                <v-list nav class="button text-left">
                    <div v-for="(item, i) in menus" :key="i">
                        <v-list-item :value="false" v-if="!item.hasSubMenu" @click.stop="drawer = !drawer" class="accent--text" :class="item.dynamicName[0] == 'Contact' ? '' :''">
                            <v-list-item-title class="font-weight-bold body-2" v-scroll-to="item.goto">{{ englishOn ? item.dynamicName[0] : item.dynamicName[1] }}</v-list-item-title>
                        </v-list-item>
                        <v-list-group append-icon="" v-else no-action class="font-weight-bold body-2 accent--text" @click.stop="">
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title class="accent--text">{{ englishOn ? item.dynamicName[0] : item.dynamicName[1] }}</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item v-for="(subMenu,i) in item.subMenus" :key="i" @click.stop="drawer = !drawer">
                                <v-list-item-title class="font-weight-bold body-2 accent--text" v-scroll-to="subMenu.goto">{{subMenu.name}}</v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                    </div>
                </v-list>
            </div>

            <div class="lighten-4" :style='`background-color: #F4E8D2;`' :class="$vuetify.breakpoint.height > 720 ? 'oneThird':'py-7'">
                <div v-for="contactMethod in contactMethods" :key="contactMethod.meta">
                    <div style="background-color: background-color: #F4E8D2">
                        <div class="d-flex flex-column justify-space-between">
                            <div class="py-2 mr-2 body-2 button" style="color: #09393d; font-weight: bold;">{{ contactMethod.meta }}</div>
                            <div>
                                <v-btn icon style="color: #09393d; font-weight: bold;" @click="$emit('scroll2map',contactMethod.name)" :href="contactMethod.href" :target="contactMethod.target">
                                    <v-icon> mdi-{{ contactMethod.icon }} </v-icon>
                                </v-btn>
                                <v-btn icon style="color: #09393d; font-weight: bold;" @click="$emit('childAlert',contactMethod.name)">
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
<style scoped>
.oneThird{
    height: 30%;
}
.twoThird{
    height: 70%;
}
</style>