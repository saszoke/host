<template>

        <v-container fluid pa-0 ma-0 id="practices">
            <v-container pa-0 fluid style="max-width:1000px">
                <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-0 px-3 px-md-5 px-lg-5 text-justify mb-0" style="color: #BEAF67"><span class="bottomLine">Szakterületeink</span></h3>
            </v-container>
            <v-row no-gutters class="d-flex flex-column-reverse justify-space-between flex-md-row flex-md-center">
                <v-col cols="12" md="6">
                    <v-container fluid class="mx-0 px-0 d-flex justify-center justify-md-end" >
                        <div class="d-flex flex-column justify-md-space-around px-md-5" height="100%" style="max-width:500px;">
                            <div v-for="speciality in specialities" :key="speciality.mainTheme">
                                <PracticeComponentOriginal :speciality="speciality" :id="speciality.goto" />
                            </div>
                        </div>

                    </v-container>
                </v-col>
                <v-col md="6" v-if="$vuetify.breakpoint.width > 960">
                    <v-row no-gutters>
                        <v-col md="12">
                            <div style="overflow-x: visible" :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'econtainer' : 'minified'">
                                <v-img :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '100vh':'25vh'" src="wallpaper3.jpg" :class="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'element' : ''"> </v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </template>

    <script>
import PracticeComponentOriginal from '@/components/PracticeComponentOriginal.vue';

    export default {
        name: 'PracticesBeta',
        components: {
            PracticeComponentOriginal
        },
        props: ['dynamicWidth'],
        data: () => ({
            specialities: [
                { mainTheme: 'A cégjog teljes vertikuma',
                goto: 'cegjog',
                subThemes: [
                    {title: 'Minden típusú cégforma alapítása, módosítása, apportálás', body: 'Under federal law, certain works can receive copyright protection.  Importantly, the U.S. Copyright Act of 1976 (the “Copyright Act”) protects motion picture works and photographic works, including pornographic material.'},
                    {title: 'Minden típusú átalakulás, formaváltás', body: 'Creative, technical, and business people must work together to develop a profitable and critically acclaimed production that will keep audiences returning to the box office. We represent a wide variety of clientele.'},
                    {title: 'Holding struktúra kialakítása', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'},
                    {title: 'Felszámolás', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'},
                    {title: 'Végelszámolás', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'},
                    {title: 'Vagyonrendezési eljárás', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'},
                    {title: 'Csődeljárás', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'},
                ]
                },
                { mainTheme: 'Gazdasági ügyek',
                goto: 'gazdjog',
                subThemes: [
                    {title: 'Szerződések készítése, partnere által készített szerződések véleményezése', body: 'Relationships between business partners can go sour, to the point where the co-owners of a business are unable to work together and need to separate.  Like a marital divorce, sometimes this is a mutual breakup.'},
                    {title: 'Partnerekkel való együttműködési struktúrák kialakítása', body: 'E-commerce continues to be a booming business.  If you are selling goods or services online, you are likely engaging in e-commerce.  As such, you should be aware of the many and varied legal rules that apply to online businesses.'},
                    {title: 'Permegelőző egyezségek megkötésének elősegítése és egyezség esetén az egyezség megkötése jogvitás helyzetekben', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                    {title: 'Kintlévőségek kezelése (fizetési meghagyások előterjesztése, ide értve a határon átnyúló EUFMH készítését is, adós cég elleni felszámolási eljárás indítása)', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                    {title: 'Céges pénzügyi szerződések készítése', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                    {title: 'Adó és illeték ügyek', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                    {title: 'Peren kívüli illetve perelőkészítő előzetes bizonyítási eljárásban közjegyzői eljárásban kirendelésre kerülő szakértő kirendelésére irányuló eljárásban képviselet ellátása a kérelmező és az ellenfél oldalán is', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                    {title: 'Polgári jogi és gazdasági jogi ügyekben peres képviselet ellátása', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'},
                ]
                },
                { mainTheme: 'Ingatlan ügyek',
                goto: 'ingatlanjog',
                subThemes: [
                    {title: 'Adásvétel, ajándékozás, tulajdonjog rendezés, közös tulajdon megszüntetése, telekalakítás, osztalék kifizetés jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
                    {title: 'Társasház alapítás', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
                ]
                },
                { mainTheme: 'Civil szervezetek alapítása',
                goto: 'civiljog',
                subThemes: [
                    {title: 'Egyesület, sportegyesület', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
                    {title: 'Alapítvány', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
                    {title: 'Közhasznú szervezetek alapítása', body: 'In the United States, an employer may not pay an hourly employee less than $7.25 an hour.  Some states and municipalities have set their own minimum wage amount.  The State of New York has set the minimum wage at $11.80 an hour.'}
                ]
                },
                { mainTheme: 'Védjegy ügyek',
                goto: 'vedjog',
                affix: '(SZTNH és EUIPO előtt is)',
                subThemes: [
                    {title: 'A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
                    {title: 'EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
                ]
                }
            ]
        }),
        
    }




    </script>
    <style scoped>
    .ribbon{
    background-color: #ffe0b2;
    }

    .sticky-top {
        position: sticky;
        top: 0;
        /* width: 500px; */
    }


    .prec {
        height: 0;
        background-color: gray;
    }

    .prec2 {
        height: 0;
        background-color: gray;
    }

    .econtainer {
    display: flex;
    align-items: flex-start;
    height: 2100px;
    
    /* margin-bottom: 1000px; */
    }

    .element {
    position: sticky;
    top: 10%;
    }
    .minified{
    display: flex;
    align-items: flex-start;
    }

    .mainTitle{
    color:#0A4770; padding-bottom: 1%; border-bottom: 2px solid #BEAF67; text-transform: uppercase;
    }
</style>