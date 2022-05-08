<template>
  <div ref="practices">
    <v-container fluid ma-0 pa-0 id="practices">
      <div :class="$vuetify.breakpoint.width > 1000 ? 'parallaxxx building3':''"></div>
      <v-container class="px-md-5" :style="`max-width: ${dynamicWidth}px`">

        <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 px-lg-0 px-xl-15 text-justify mb-5" style="color: #BEAF67"><span class="bottomLine">Szakterületeink</span></h3>

        <div v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="d-flex justify-space-around flex-wrap">
          <div v-for="spec in specialities3" :key="spec.mainTheme">
            <UWP :speciality="spec" />
          </div>
          <div v-for="spec in specialities" :key="spec.mainTheme">
            <PracticeComponentModified :speciality="spec" />
          </div>
        </div>

        <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" class="d-flex justify-space-around flex-wrap">
          <div v-for="spec in specialitiesOriginal" :key="spec.mainTheme" >
            <PracticeComponentOriginal :speciality="spec"  />
          </div>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import PracticeComponentModified from '@/components/PracticeComponentModified.vue';
import PracticeComponentOriginal from '@/components/PracticeComponentOriginal.vue';
import UWP from '@/components/UltraWidePracticeComponent.vue';

export default {
  name: 'Practices',
  props: ['dynamicWidth'],
  components: {
    PracticeComponentModified,
    UWP,
    PracticeComponentOriginal

  },

  data: ()=>{
    return {
      specialities: [
        [
          {
            mainTheme: 'Civil szervezetek alapítása',
            subThemes: [
              {title: 'Egyesület, sportegyesület, Alapítvány'},
              {title: 'Közhasznú szervezetek alapítása'},
            ]
          },
          {
            mainTheme: 'Védjegy ügyek',
            subThemes: [
              {title: 'A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások'},
              {title: 'EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések'}
            ]
          }
        ],
        [ 
          {
            mainTheme: 'A cégjog teljes vertikuma',
            subThemes: [
              {title: 'Minden típusú cégforma alapítása, módosítása, apportálás'},
              {title: 'Minden típusú átalakulás, formaváltás'},
              {title: 'Holding struktúra kialakítása'},
              {title: 'Felszámolás'},
              {title: 'Végelszámolás'},
              {title: 'Vagyonrendezési eljárás'},
              {title: 'Csődeljárás'},
            ]
          }
        ],

        [
          { 
            mainTheme: 'Ingatlan ügyek',
            subThemes: [
              {title: 'Adásvétel, ajándékozás telekalakítás'},
              {title: 'Tulajdonjog rendezés, közös tulajdon megszüntetése'},
              {title: 'Osztalék kifizetés'},
              {title: 'Jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése'},
              {title: 'Társasház alapítás'},
            ]
          }
        ],
      ],


      specialities3: [
          { mainThemes: 'Gazdasági ügyek',
            subThemes: [
              [
                {title: 'Szerződések készítése, partnere által készített szerződések véleményezése'},
                {title: 'Partnerekkel való együttműködési struktúrák kialakítása'},
                {title: 'Permegelőző egyezségek megkötésének elősegítése és egyezség esetén az egyezség megkötése jogvitás helyzetekben'}
              ],
              [
                {title: 'Kintlévőségek kezelése (fizetési meghagyások előterjesztése, ide értve a határon átnyúló EUFMH készítését is, adós cég elleni felszámolási eljárás indítása)'},
                {title: 'Céges pénzügyi szerződések készítése'}
              ],
              [
                {title: 'Adó és illeték ügyek'},
                {title: 'Peren kívüli illetve perelőkészítő előzetes bizonyítási eljárásban közjegyzői eljárásban kirendelésre kerülő szakértő kirendelésére irányuló eljárásban képviselet ellátása a kérelmező és az ellenfél oldalán is'},
                {title: 'Polgári jogi és gazdasági jogi ügyekben peres képviselet ellátása'}
              ]

            ]
          }
      ],

      specialitiesOriginal: [
        { mainTheme: 'A cégjog teljes vertikuma',
          subThemes: [
            {title: 'Minden típusú cégforma alapítása, módosítása, apportálás'},
            {title: 'Minden típusú átalakulás, formaváltás'},
            {title: 'Holding struktúra kialakítása'},
            {title: 'Felszámolás'},
            {title: 'Végelszámolás'},
            {title: 'Vagyonrendezési eljárás'},
            {title: 'Csődeljárás'},
          ]
        },
        { mainTheme: 'Gazdasági ügyek',
          subThemes: [
            {title: 'Szerződések készítése, partnere által készített szerződések véleményezése'},
            {title: 'Partnerekkel való együttműködési struktúrák kialakítása'},
            {title: 'Permegelőző egyezségek megkötésének elősegítése és egyezség esetén az egyezség megkötése jogvitás helyzetekben'},
            {title: 'Kintlévőségek kezelése (fizetési meghagyások előterjesztése, ide értve a határon átnyúló EUFMH készítését is, adós cég elleni felszámolási eljárás indítása)'},
            {title: 'Céges pénzügyi szerződések készítése'},
            {title: 'Adó és illeték ügyek'},
            {title: 'Peren kívüli illetve perelőkészítő előzetes bizonyítási eljárásban közjegyzői eljárásban kirendelésre kerülő szakértő kirendelésére irányuló eljárásban képviselet ellátása a kérelmező és az ellenfél oldalán is'},
            {title: 'Polgári jogi és gazdasági jogi ügyekben peres képviselet ellátása'},
          ]
        },
        { mainTheme: 'Ingatlan ügyek',
          subThemes: [
            {title: 'Adásvétel, ajándékozás, tulajdonjog rendezés, közös tulajdon megszüntetése, telekalakítás, osztalék kifizetés jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése'},
            {title: 'Társasház alapítás'},
          ]
        },
        { mainTheme: 'Civil szervezetek alapítása',
          subThemes: [
            {title: 'Egyesület, sportegyesület'},
            {title: 'Alapítvány'},
            {title: 'Közhasznú szervezetek alapítása'}
          ]
        },
        { mainTheme: 'Védjegy ügyek',
          subThemes: [
            {title: 'SZTNH és EUIPO előtt is'},
            {title: 'A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások'},
            {title: 'EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések'},
          ]
        }
      ]
    }
  }
}
</script>
