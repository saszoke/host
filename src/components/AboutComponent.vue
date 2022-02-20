<template>
  <v-container id="about">
    <h3 
    class="text-h5 brown--text text--lighten-1  my-5 pa-2 borderY font-weight-bold">Rólunk</h3>
    <v-img
      style="-webkit-filter: grayscale(80%); filter: grayscale(80%);"
      :src="images.building"
    >
    </v-img>
    <div class="body-1 mt-1 font-weight-bold text-uppercase orange--text text--lighten-3 text-justify ">similique sunt in culpa qui officia</div>
    <div class="body-2 mt-1 grey--text text--darken-2 text-justify">
              Üzleti megoldás és innovatív hozzáállás, helyi piacismeret és globális tudás

      Irodánkat Dr. Köves Péter alapította 1991-ben. Két évvel később az öt londoni prémium ügyvédi irodából álló „Magic Circle”-be tartozó Clifford Chance budapesti irodája lettünk, ahonnan 2009-ben váltunk ki. Azóta Lakatos, Köves és Társai néven, Dr. Lakatos Péter vezetésével független ügyvédi irodaként, ám nemzetközi jellegünket megőrizve működünk.

      Szellemi műhelyünkben folyó munkánkra és szaktudásunkra a nemzetközi irodákban megszokott profizmus, bonyolult jogi kérdések gyakorlatorientált és főleg üzleti megközelítése jellemző. Az érvényes jogi keretek között nagyon sokszor innovatív és új javaslatokkal élünk. Nyitott és kreatív gondolkodásunknak köszönhetően számos kifinomult jogintézmény magyarországi meghonosításában vettünk részt.

      Megbízóink Magyarországon aktív multinacionális közép- és nagyvállalatok, valamint a világ legnagyobb és leghíresebb ügyvédi irodái.

      Ezért egyformán otthon vagyunk, ha határon átnyúló tranzakciókon nemzetközi csapatban dolgozunk, és akkor is, ha helyi piacismeretünknek köszönhetően speciális magyar jogi problémákat kell megoldanunk.
    
      Nagy gyakorlattal rendelkezünk jogi és szabályozási munkák előkészítésében is. Ügyvédeink német, angol, francia, olasz, orosz, spanyol, kínai és japán nyelven is nyújtanak jogi tanácsadást.
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
    props: ['images'],

    data: () => ({}),
  }
</script>

<style>
/* .bottomBorder{
  border-bottom: 2px solid #ffe0b2;
}; */

.borderY{
  border-bottom: 2px solid #ffe0b2;
  background-color: rgb(247, 237, 220); 
};
</style>
