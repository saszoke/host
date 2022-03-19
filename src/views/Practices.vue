<template>
  <div ref="practices">
    <PracticesComponent :specialities="specialities"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PracticesComponent from '@/components/PracticesComponent.vue'

export default {
  name: 'Practices',
  components: {
    PracticesComponent
  },

  data: ()=>{
    return {

      specialities: [
        { mainTheme: 'A cégjog teljes vertikuma',
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
          subThemes: [
            {title: 'Adásvétel, ajándékozás, tulajdonjog rendezés, közös tulajdon megszüntetése, telekalakítás, osztalék kifizetés jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
            {title: 'Társasház alapítás', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
          ]
        },
        { mainTheme: 'Civil szervezetek alapítása',
          subThemes: [
            {title: 'Egyesület, sportegyesület', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
            {title: 'Alapítvány', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
            {title: 'Közhasznú szervezetek alapítása', body: 'In the United States, an employer may not pay an hourly employee less than $7.25 an hour.  Some states and municipalities have set their own minimum wage amount.  The State of New York has set the minimum wage at $11.80 an hour.'}
          ]
        },
        { mainTheme: 'Védjegy ügyek',
          subThemes: [
            {title: 'SZTNH és EUIPO előtt is', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
            {title: 'A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
            {title: 'EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
          ]
        }

      ]
    }
  }
}
</script>
