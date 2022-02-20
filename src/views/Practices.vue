<template>
  <div>
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
        { mainTheme: 'Entertainment Law',
          subThemes: [
            {title: 'Adult Entertainment Films', body: 'Under federal law, certain works can receive copyright protection.  Importantly, the U.S. Copyright Act of 1976 (the “Copyright Act”) protects motion picture works and photographic works, including pornographic material.'},
            {title: 'E-Commerce', body: 'Creative, technical, and business people must work together to develop a profitable and critically acclaimed production that will keep audiences returning to the box office. We represent a wide variety of clientele.'},
            {title: 'Sports Law', body: 'Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements.'}
          ]
        },
        { mainTheme: 'Business Law',
          subThemes: [
            {title: 'Business Divorce', body: 'Relationships between business partners can go sour, to the point where the co-owners of a business are unable to work together and need to separate.  Like a marital divorce, sometimes this is a mutual breakup.'},
            {title: 'E-commerce', body: 'E-commerce continues to be a booming business.  If you are selling goods or services online, you are likely engaging in e-commerce.  As such, you should be aware of the many and varied legal rules that apply to online businesses.'},
            {title: 'Non-Fungible Tokens (NFT)', body: 'As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs.'}
          ]
        },
        { mainTheme: 'Employment Law',
          subThemes: [
            {title: 'Age Discrimination', body: 'Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old.'},
            {title: 'Pregnancy Discrimination', body: 'Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment.'},
            {title: 'Wage and Hour', body: 'In the United States, an employer may not pay an hourly employee less than $7.25 an hour.  Some states and municipalities have set their own minimum wage amount.  The State of New York has set the minimum wage at $11.80 an hour.'}
          ]
        }

      ]
    }
  }
}
</script>
