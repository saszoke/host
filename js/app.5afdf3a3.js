(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"152f":function(t,e,a){},"319f":function(t,e,a){"use strict";a("152f")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}]},[a("v-main",[a("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:"",id:"home"}},[a("v-carousel",{attrs:{cycle:"","hide-delimiters":"",height:t.dynamicCarouselHeight(),"show-arrows":!1,id:"homeScrollTarget"}},t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{eager:""}},[a("v-img",{attrs:{src:t.src,height:"100%",eager:""}})],1)})),1),a("Banner",{ref:"banner",attrs:{contactMethods:t.contactMethods,menus:t.menus,title:t.title,englishOn:t.englishOn,dynamicSubtitle:t.dynamicSubtitle,langSwitch:t.langSwitch,copyIcon:t.copyIcon},on:{langSwitch:t.langSwitch,childAlert:function(e){return t.flashAlert(e)},openNavInChild:t.openNavInChild}}),a("Nav",{ref:"nav",attrs:{contactMethods:t.contactMethods,title:t.title,menus:t.menus,englishOn:t.englishOn,dynamicSubtitle:t.dynamicSubtitle,dynamicAddress:t.dynamicAddress,copyIcon:t.copyIcon},on:{scroll2map:function(e){return t.scroll2map(e)},childAlert:function(e){return t.flashAlert(e)}}}),a("v-snackbar",{attrs:{timeout:t.timeout,color:"#0e5c60"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("div",{staticClass:"text-center button font-weight-bold",staticStyle:{color:"#F4E8D2","letter-spacing":"0.05em"}},[t._v(" "+t._s(t.dynamicSnackText)+" ")])]),a("div",[a("Home",{attrs:{dynamicWidth:t.dynamicWidth}}),a("About",{attrs:{dynamicWidth:t.dynamicWidth}}),a("Practices",{attrs:{dynamicWidth:t.dynamicWidth}}),a("Associates",{attrs:{dynamicWidth:t.dynamicWidth}}),a("Contact",{ref:"contact",attrs:{contactMethods:t.contactMethods,dynamicWidth:t.dynamicWidth,copyIcon:t.copyIcon},on:{childAlert:function(e){return t.flashAlert(e)}}})],1)],1)],1)],1)},s=[],o=(a("b0c0"),a("d3b7"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"contact"},[a("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"",id:"contact"}},[a("div",{class:t.$vuetify.breakpoint.width>1e3?"parallaxxx building3":""}),a("v-snackbar",{attrs:{timeout:t.timeout,color:"#115874"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("div",{staticClass:"text-center button"},[t._v(" Copied to clipboard ")])]),a("v-container",{staticClass:"px-md-5",style:"max-width: "+t.dynamicWidth+"px"},[a("h3",{staticClass:"text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 text-justify",staticStyle:{color:"#BEAF67"}},[t._v("Elérhetőségünk")])]),a("v-card",{staticClass:"white--text text-center ma-0 pa-0",attrs:{flat:"",tile:"",color:"#09393d"}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{"x-large":!(!t.$vuetify.breakpoint.lg&&!t.$vuetify.breakpoint.xl),color:"#F4E8D2",icon:""}},[a("v-icon",[t._v(" "+t._s(e)+" ")])],1)})),1)],1),a("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[a("v-card",{attrs:{"max-height":"400"}},[a("AddGoogleMap",{ref:"gmap"})],1)],1),a("ContactDetails",{attrs:{dynamicWidth:t.dynamicWidth,contact:t.contactMethods,copyIcon:t.copyIcon},on:{childAlert:function(e){return t.$emit("childAlert",e)},childCall:function(e){return t.$emit("childCall","tel:+52554442")}}})],1)],1)}),r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"",id:"contact"}},[a("v-card",{staticClass:"white--text text-center ma-0 pa-0",staticStyle:{height:"100%","background-image":"url('./mosaicGreen.jpg')","background-size":"contain","background-repeat":"repeat"},attrs:{flat:"",tile:""}},[a("div",{staticClass:"mx-auto",style:"max-width: "+t.dynamicWidth+"px"},[a("div",{staticClass:"d-flex flex-column flex-md-row justify-space-between font-weight-bold body-2 py-5 mb-lg-10"},t._l(t.contact,(function(e){return a("div",{key:e.name,staticClass:"mb-3 my-md-auto mx-auto ma-0",class:e.contactStyle,style:t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?"letter-spacing: 0.1em; padding: 5px":"letter-spacing: 0;"},[a("div",{staticClass:"pa-2 mx-0"},[t._v(t._s(e.meta)+" ")]),a("div",[a("v-btn",{attrs:{icon:"",color:e.color,href:e.href,target:e.target},on:{click:function(a){return t.handleAddress(e.name)}}},[a("v-icon",[t._v(" "+t._s("mdi-"+e.icon)+" ")])],1),a("v-btn",{attrs:{icon:"",color:e.color},on:{click:function(a){return t.$emit("childAlert",e.name)}}},[a("v-icon",{staticClass:"copy"},[t._v(t._s(t.copyIcon))])],1)],1)])})),0)]),a("v-card-text",{staticClass:"subtitle-2 font-weight-bold text-uppercase overline",staticStyle:{color:"#F4E8D2"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",offset:0,duration:1500},expression:"{ el: '#home', offset: 0, duration: 1500 }"}],staticStyle:{cursor:"pointer"}},[t._v("Földes ügyvédi iroda")])]),a("v-card-text",{staticClass:"body-2",staticStyle:{color:"#F4E8D2"}},[a("strong",[t._v("Minden jog fenntartva")])])],1)],1)},c=[],d={name:"ContactDetails",props:["contact","address","copyIcon","dynamicWidth"],data:function(){return{timeout:1500,snackbar:!1,icons:["mdi-facebook","mdi-linkedin"],mail:"mdi-email"}},methods:{handleAddress:function(t){"address"==t&&this.$parent.$refs.gmap.relocate()}}},m=d,u=a("2877"),h=a("6544"),p=a.n(h),f=a("8336"),g=a("b0af"),y=a("99d9"),v=a("a523"),b=a("132d"),k=Object(u["a"])(m,l,c,!1,null,null,null),x=k.exports;p()(k,{VBtn:f["a"],VCard:g["a"],VCardText:y["a"],VContainer:v["a"],VIcon:b["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{zoom:18,center:t.center}},t._l(t.locationMarkers,(function(e,n){return a("gmap-marker",{key:n,attrs:{position:e.position},on:{click:function(a){t.center=e.position}}})})),1)],1)},C=[],z={name:"AddGoogleMap",data:function(){return{center:{lat:47.5309823,lng:21.6238328},locationMarkers:[],locPlaces:[],existingPlace:null}},mounted:function(){this.addLocationMarker()},methods:{initMarker:function(t){this.existingPlace=t},addLocationMarker:function(){var t={lat:47.5309823,lng:21.6238328};this.locationMarkers.push({position:t}),this.locPlaces.push(this.existingPlace),this.center=t,this.existingPlace=null},locateGeoLocation:function(){console.log("skipped")},relocate:function(){var t={lat:47.5309823,lng:21.6238328};console.log(this),this.$children[0].panTo(t)}}},S=z,j=Object(u["a"])(S,w,C,!1,null,null,null),_=j.exports,A={name:"Contact",components:{ContactDetails:x,AddGoogleMap:_},props:["contactMethods","copyIcon","dynamicWidth"],data:function(){return{social:[{id:3,name:"watsapp",meta:"https://watsapplink/foldes/",icon:"sample3"},{id:4,name:"linkedin",meta:"https://linkedin.com/foldes/",icon:"sample4"}],timeout:1500,snackbar:!1,icons:["mdi-facebook","mdi-linkedin"],mail:"mdi-email"}}},O=A,$=a("2db4"),E=Object(u["a"])(O,o,r,!1,null,null,null),T=E.exports;p()(E,{VBtn:f["a"],VCard:g["a"],VCardText:y["a"],VContainer:v["a"],VIcon:b["a"],VSnackbar:$["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"about"},[a("v-container",{staticClass:"px-md-5",style:"max-width: "+t.dynamicWidth+"px",attrs:{id:"about",fluid:""}},[a("h3",{staticClass:"text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 text-justify  mb-10",staticStyle:{color:"#BEAF67"}},[a("span",{staticClass:"bottomLine"},[t._v("Rólunk")])]),a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"12"}},[a("v-img",{attrs:{height:"100%",eager:"",src:"random1Snip.jpg","max-height":t.$vuetify.breakpoint.height<799&&t.$vuetify.breakpoint.width<1370?350:500}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"body-2 text-lg-body-1 my-3 text-justify",staticStyle:{color:"#09393d"}},[t._v("Ügyvédi irodánk 26 éve Debrecenben működő immár két generációs vállalkozás. Ügyfeleink nemcsak Debrecenből és környékéről, hanem szinte az ország egész területéről keresnek bennünket az ügyeik vitele és azok megoldása érdekében. Büszkék vagyunk rá, hogy ügyfeleink rendszerint visszatérnek hozzánk és tartósan ránk bízzák ügyeik vitelét. Nem csak az irodánk, hanem az ügyfélkörünk is kétgenerációssá vált az idők során. Forduljon bizalommal hozzánk, mert a következőket nyújtjuk Önnek: figyelmet, precízitást, diszkréciót, koncentrációt, megoldást találva a jogi problémájára, szakmai felkészültséget és "),a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#BEAF67"}},[t._v("több mint két évtizednyi tapasztalatot")]),t._v(" a jogi problémák kezelésében. Ügyvédi munkadíjainkat rugalmasan az ügy jellegéhez igazítjuk. ")])])],1)],1)],1)},V=[],P={name:"About",props:["dynamicWidth"],data:function(){}},M=P,N=a("62ad"),F=a("adda"),D=a("0fd9"),B=Object(u["a"])(M,I,V,!1,null,null,null),L=B.exports;p()(B,{VCol:N["a"],VContainer:v["a"],VImg:F["a"],VRow:D["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"home",staticClass:"home"},[a("v-container",{staticStyle:{width:"100%"},attrs:{fluid:"","ma-0":"","pa-0":""}},[a("div",{class:t.$vuetify.breakpoint.width>1e3?"parallaxxx building1":""}),a("v-container",{staticClass:"px-md-5",style:"max-width: "+t.dynamicWidth+"px"},[a("v-row",[a("v-col",{staticClass:"mx-0 px-0 pr-md-5",attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"body-2 text-lg-body-1 text-justify mx-md-0 my-3",staticStyle:{color:"#09393d"}},[a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#BEAF67"}},[t._v("Köszöntjük honlapunkon")]),t._v(" akkor is, ha csak véletlenül talált ránk és köszöntjük, ha célirányosan bennünket keresett. Amit vállalunk: Önre és az ügyére koncentrálva a lehető leggyorsabban, szakmailag helytállóan fogunk dolgozni az Ön, a családja és a vállalkozása számára. ")])]),a("v-col",{staticClass:"mx-0 px-0 pl-md-5",attrs:{cols:"12",md:"6"}},[a("h3",{staticClass:"text-h6 text-md-h4 text-xl-h3 pa-md-2 px-md-0 px-xl-15 text-left",staticStyle:{color:"#BEAF67"}},[t._v("Jogi képviselet, több mint 25 év tapasztalattal")])])],1)],1)],1)],1)},R=[],H={name:"Home",props:["dynamicWidth"]},G=H,U=Object(u["a"])(G,W,R,!1,null,null,null),J=U.exports;p()(U,{VCol:N["a"],VContainer:v["a"],VRow:D["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":"","ma-0":"",id:"practices"}},[a("v-container",{staticStyle:{"max-width":"1000px"},attrs:{"pa-0":"",fluid:""}},[a("h3",{staticClass:"text-h5 text-md-h4 text-xl-h3 pa-md-0 px-3 px-md-5 px-lg-5 text-justify mb-0",staticStyle:{color:"#BEAF67"}},[a("span",{staticClass:"bottomLine"},[t._v("Szakterületeink")])]),t._l(t.specialities,(function(t){return a("div",{key:t.mainTheme,attrs:{id:t.goto}},[a("Practice",{attrs:{speciality:t}})],1)}))],2)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 my-md-5 mx-auto mx-sm-3 mx-md-5 practiceContainer pa-5",style:t.$vuetify.breakpoint.xs?"width: 300px; height: auto;":"height: auto;"},[a("div",{staticClass:"text-start subtitle-1 font-weight-bold button mainTitle",domProps:{textContent:t._s(t.speciality.mainTheme)}}),a("v-row",t._l(t.speciality.subThemes,(function(e){return a("v-col",{key:e.title,attrs:{cols:"12",sm:"6",md:"4"}},[a("v-row",{staticClass:"mt-3"},[a("v-col",{staticClass:"pt-3 mt-1",attrs:{cols:"2"}},[a("div",{staticClass:"listDecoration"})]),a("v-col",{attrs:{cols:"10"}},[a("div",{staticClass:"body-2 text-lg-body-2 text-left mt-0",staticStyle:{color:"#09393d"},domProps:{textContent:t._s(e.title)}})])],1)],1)})),1)],1)},q=[],Q={name:"Practice",props:["speciality"],data:function(){return{}}},X=Q,tt=(a("8e4c"),Object(u["a"])(X,Z,q,!1,null,"f5b05206",null)),et=tt.exports;p()(tt,{VCol:N["a"],VRow:D["a"]});var at={name:"Practices",components:{Practice:et},props:["dynamicWidth"],data:function(){return{specialities:[{mainTheme:"A cégjog teljes vertikuma",goto:"cegjog",subThemes:[{title:"Minden típusú cégforma alapítása, módosítása, apportálás",body:"Under federal law, certain works can receive copyright protection.  Importantly, the U.S. Copyright Act of 1976 (the “Copyright Act”) protects motion picture works and photographic works, including pornographic material."},{title:"Minden típusú átalakulás, formaváltás",body:"Creative, technical, and business people must work together to develop a profitable and critically acclaimed production that will keep audiences returning to the box office. We represent a wide variety of clientele."},{title:"Holding struktúra kialakítása",body:"Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements."},{title:"Felszámolás",body:"Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements."},{title:"Végelszámolás",body:"Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements."},{title:"Vagyonrendezési eljárás",body:"Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements."},{title:"Csődeljárás",body:"Those involved in the sports industry can face a wide variety of legal obstacles ranging from employment contracts to intellectual property rights and various other agreements."}]},{mainTheme:"Gazdasági ügyek",goto:"gazdjog",subThemes:[{title:"Szerződések készítése, partnere által készített szerződések véleményezése",body:"Relationships between business partners can go sour, to the point where the co-owners of a business are unable to work together and need to separate.  Like a marital divorce, sometimes this is a mutual breakup."},{title:"Partnerekkel való együttműködési struktúrák kialakítása",body:"E-commerce continues to be a booming business.  If you are selling goods or services online, you are likely engaging in e-commerce.  As such, you should be aware of the many and varied legal rules that apply to online businesses."},{title:"Permegelőző egyezségek megkötésének elősegítése és egyezség esetén az egyezség megkötése jogvitás helyzetekben",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."},{title:"Kintlévőségek kezelése (fizetési meghagyások előterjesztése, ide értve a határon átnyúló EUFMH készítését is, adós cég elleni felszámolási eljárás indítása)",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."},{title:"Céges pénzügyi szerződések készítése",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."},{title:"Adó és illeték ügyek",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."},{title:"Peren kívüli illetve perelőkészítő előzetes bizonyítási eljárásban közjegyzői eljárásban kirendelésre kerülő szakértő kirendelésére irányuló eljárásban képviselet ellátása a kérelmező és az ellenfél oldalán is",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."},{title:"Polgári jogi és gazdasági jogi ügyekben peres képviselet ellátása",body:"As understanding of blockchain technology has grown, many are finding new and creative uses for it.  One area that has become popular in the arts and entertainment industries involves the creation and sale of non-fungible tokens or NFTs."}]},{mainTheme:"Ingatlan ügyek",goto:"ingatlanjog",subThemes:[{title:"Adásvétel, ajándékozás, tulajdonjog rendezés, közös tulajdon megszüntetése, telekalakítás, osztalék kifizetés jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése",body:"Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old."},{title:"Társasház alapítás",body:"Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment."}]},{mainTheme:"Civil szervezetek alapítása",goto:"civiljog",subThemes:[{title:"Egyesület, sportegyesület",body:"Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old."},{title:"Alapítvány",body:"Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment."},{title:"Közhasznú szervezetek alapítása",body:"In the United States, an employer may not pay an hourly employee less than $7.25 an hour.  Some states and municipalities have set their own minimum wage amount.  The State of New York has set the minimum wage at $11.80 an hour."}]},{mainTheme:"Védjegy ügyek",goto:"vedjog",affix:"(SZTNH és EUIPO előtt is)",subThemes:[{title:"A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások",body:"Age discrimination in employment can affect virtually every worker at some point in their career.  It often occurs much earlier than most employees imagine.  In fact, most laws recognize age discrimination beginning at 40 years old."},{title:"EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések",body:"Pregnancy discrimination in employment can have a substantial impact on women affecting their livelihood as well as their health.  There are federal, state, and local discrimination laws that protect women from adverse treatment."}]}]}}},nt=at,it=Object(u["a"])(nt,K,Y,!1,null,null,null),st=it.exports;p()(it,{VContainer:v["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"associates"},[a("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"",id:"associates"},on:{"&scroll":function(e){return t.passiveScroll.apply(null,arguments)}}},[a("div",{class:t.$vuetify.breakpoint.width>1e3?"parallaxxx building2":""}),a("v-container",{staticClass:"px-md-5",style:"max-width: "+t.dynamicWidth+"px"},[a("h3",{staticClass:"text-h5 text-md-h4 text-xl-h3 mb-5 mb-md-0 pa-md-2 px-md-0 text-justify",staticStyle:{color:"#BEAF67"}},[a("span",{staticClass:"bottomLine"},[t._v("Munkatársaink")])]),a("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7"},t._l(t.lawyersList.firstLine,(function(t){return a("div",{key:t.name,staticClass:"mx-auto mx-md-5 mt-lg-5",staticStyle:{color:"#BEAF67"}},[a("AssociateCard",{attrs:{lawyer:t}})],1)})),0),t._l(t.lawyersList.secondLine,(function(t){return a("div",{key:t.name,staticClass:"d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7"},[a("AssociateCard",{attrs:{lawyer:t}})],1)}))],2)],1)],1)},rt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto mx-md-5 mt-lg-5",staticStyle:{color:"#BEAF67"}},[a("div",{staticClass:"pa-0 text-h6 text-md-h5 text-center mb-1",staticStyle:{color:"#0e5c60"}},[t._v(t._s(t.lawyer.name))]),a("div",{staticStyle:{color:"#0A4770"}},[a("div",{staticClass:"h6 rounded-t-lg pt-1",staticStyle:{"background-color":"#BEAF67",color:"white",display:"block"}},[t._v(t._s(t.lawyer.title))])]),a("div",{staticClass:"custom-border customFrame mx-auto",style:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?"width: 350px":"width: 300px"},[a("v-img",{attrs:{eager:"",src:t.lawyer.pic,height:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?450:445,"max-width":t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?400:342}})],1),a("div",{staticClass:"d-flex justify-space-between mx-auto my-2"},[a("div",{staticClass:"d-flex justify-start",staticStyle:{color:"#0A4770"}}),a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mr-5 font-weight-bold button",attrs:{color:"#0e5c60",dark:"",plain:""}},[t._v(" Email ")]),a("v-btn",{staticClass:"rounded-br-xl font-weight-bold button rounded-sm custom-border",attrs:{color:"#BEAF67",dark:"",outlined:""}},[t._v(" Hívás ")])],1)])])},ct=[],dt={name:"AssociateCard",props:["lawyer"],data:function(){return{}}},mt=dt,ut=Object(u["a"])(mt,lt,ct,!1,null,null,null),ht=ut.exports;p()(ut,{VBtn:f["a"],VImg:F["a"]});var pt={name:"Associates",props:["dynamicWidth"],components:{AssociateCard:ht},data:function(){return{lawyersList:{firstLine:[{name:"Dr. Földesné dr. Sipos Judit",title:"Ügyvéd",pic:"./portraitSnipp2.JPG"},{name:"Dr. Földes Péter Tamás",title:"Ügyvédjelölt",pic:"./portraitSnipp3.JPG"}],secondLine:[{name:"Molnár Erika",title:"Jogi Asszisztens",pic:"./portraitSnipp1.jpg"}]}}}},ft=pt,gt=(a("de66"),Object(u["a"])(ft,ot,rt,!1,null,null,null)),yt=gt.exports;p()(gt,{VContainer:v["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticStyle:{position:"fixed",top:"0",left:"0"},attrs:{absolute:"",temporary:"",sticky:"",color:"#F4E8D2"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"d-flex flex-column",class:t.$vuetify.breakpoint.height<=720?"justify-start":"",staticStyle:{height:"100vh","overflow-y":"auto"}},[a("div",{staticClass:"text-left",class:t.$vuetify.breakpoint.height>720?"twoThird d-flex flex-column justify-center":"py-7",staticStyle:{"background-color":"#09393d"}},[a("v-list",{staticClass:"button text-left",attrs:{nav:""}},t._l(t.menus,(function(e,n){return a("div",{key:n},[e.hasSubMenu?a("v-list-group",{staticClass:"font-weight-bold body-2 accent--text",attrs:{"append-icon":"","no-action":""},on:{click:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{staticClass:"accent--text"},[t._v(t._s(t.englishOn?e.dynamicName[0]:e.dynamicName[1]))])],1)]},proxy:!0}],null,!0)},t._l(e.subMenus,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-list-item-title",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:e.goto,expression:"subMenu.goto"}],staticClass:"font-weight-bold body-2 accent--text"},[t._v(t._s(e.name))])],1)})),1):a("v-list-item",{staticClass:"accent--text",class:(e.dynamicName[0],""),attrs:{value:!1},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-list-item-title",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:e.goto,expression:"item.goto"}],staticClass:"font-weight-bold body-2"},[t._v(t._s(t.englishOn?e.dynamicName[0]:e.dynamicName[1]))])],1)],1)})),0)],1),a("div",{staticClass:"lighten-4",class:t.$vuetify.breakpoint.height>720?"oneThird":"py-7",style:"background-color: #F4E8D2;"},t._l(t.contactMethods,(function(e){return a("div",{key:e.meta},[a("div",{staticStyle:{"background-color":"background-color: #F4E8D2"}},[a("div",{staticClass:"d-flex flex-column justify-space-between"},[a("div",{staticClass:"py-2 mr-2 body-2 button",staticStyle:{color:"#09393d","font-weight":"bold"}},[t._v(t._s(e.meta))]),a("div",[a("v-btn",{staticStyle:{color:"#09393d","font-weight":"bold"},attrs:{icon:"",href:e.href,target:e.target},on:{click:function(a){return t.$emit("scroll2map",e.name)}}},[a("v-icon",[t._v(" mdi-"+t._s(e.icon)+" ")])],1),a("v-btn",{staticStyle:{color:"#09393d","font-weight":"bold"},attrs:{icon:""},on:{click:function(a){return t.$emit("childAlert",e.name)}}},[a("v-icon",{staticClass:"copy"},[t._v(t._s(t.copyIcon))])],1)],1)])])])})),0)])])},bt=[],kt={name:"Nav",props:["contactMethods","title","menus","englishOn","dynamicSubtitle","dynamicAddress","copyIcon"],data:function(){return{drawer:!1}},methods:{openNav:function(){this.drawer=!this.drawer}}},xt=kt,wt=(a("319f"),a("8860")),Ct=a("56b0"),zt=a("da13"),St=a("5d23"),jt=a("f774"),_t=Object(u["a"])(xt,vt,bt,!1,null,"9fb2a9c6",null),At=_t.exports;p()(_t,{VBtn:f["a"],VIcon:b["a"],VList:wt["a"],VListGroup:Ct["a"],VListItem:zt["a"],VListItemContent:St["a"],VListItemTitle:St["b"],VNavigationDrawer:jt["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-banner",{staticClass:"d-flex flex-column justify-center",attrs:{sticky:"",color:"#0e5c60",elevation:"4",height:t.dynamicBannerHeight()}},[a("div",{staticClass:"d-flex flex-column flex-md-row justify-space-around",staticStyle:{"max-width":"1000px",margin:"0 auto"}},[a("div",{staticClass:"d-flex justify-space-between justify-sm-space-around mb-2 mb-md-0 mr-2 mr-md-0"},[a("div",{staticClass:"mr-5 mr-md-0 mx-md-0 py-auto my-auto order-md-0"},[a("v-app-bar-nav-icon",{attrs:{color:"#F4E8D2"},on:{click:function(e){return e.stopPropagation(),t.openNavInChild.apply(null,arguments)}}})],1),a("div",{staticClass:" mx-md-15 order-md-2 py-1",staticStyle:{"font-family":"Galliard-Std-Roman"}},[a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:t.menus[0].goto,expression:"menus[0].goto"}],staticClass:"align-center order-lg-first text-h5 text-md-h4 text-xl-h3 font-weight-bold  my-auto",staticStyle:{cursor:"pointer",color:"#F4E8D2"},domProps:{textContent:t._s(t.title)}}),a("div",{staticClass:"subtitle-2",staticStyle:{cursor:"pointer",color:"#F4E8D2"},domProps:{textContent:t._s(t.englishOn?t.dynamicSubtitle[0]:t.dynamicSubtitle[1])}})]),a("div",{staticClass:" mx-md-15 py-auto my-auto order-md-1 d-md-none"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){return t.$emit("langSwitch")}}}),a("span",{staticClass:"slider round"},[a("div",{staticClass:"switchText text-body-2 font-weight-bold"},[t._v(" EN ")])])])])]),a("div",{staticClass:"order-lg-last d-flex justify-center justify-lg-space-between mt-md-0 mx-md-0 mb-md-0"},[t._l(t.contactMethods.slice(1,3),(function(e){return a("div",{key:e.name,staticClass:"d-flex justify-space-between my-auto button font-weight-bold custom-border fixedNavButtonWidth",class:e.class4Banner,style:t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?"width: auto; letter-spacing: 0.1em; padding: 5px;":"width: 140px;"},[a("div",{staticClass:"py-2 pl-2",staticStyle:{color:"#BEAF67"},domProps:{textContent:t._s(t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?e.meta:e.name.toUpperCase())}}),a("div",{staticClass:"ma-0 pa-0"},[a("v-btn",{staticClass:"mr-0",attrs:{icon:"",color:"#BEAF67",href:e.href,target:e.target}},[a("v-icon",[t._v(" mdi-"+t._s(e.icon)+" ")])],1),a("v-btn",{staticClass:"mr-0",attrs:{icon:"",color:"#BEAF67"},on:{click:function(a){return t.$emit("childAlert",e.name)}}},[a("v-icon",{staticClass:"copy"},[t._v(t._s(t.copyIcon))])],1)],1)])})),a("div",{staticClass:" mx-md-15 py-auto my-auto order-md-1 d-none d-md-flex"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){return t.$emit("langSwitch")}}}),a("span",{staticClass:"slider round"},[a("div",{staticClass:"switchText text-body-2 font-weight-bold"},[t._v(" EN ")])])])])],2)])])},$t=[],Et={name:"Banner",props:["contactMethods","title","menus","englishOn","dynamicSubtitle","dynamicAddress","copyIcon"],methods:{openNavInChild:function(){this.$emit("openNavInChild")},dynamicBannerHeight:function(){var t="";if(this.$vuetify.breakpoint.height>725&&("md"==this.$vuetify.breakpoint.name||"lg"==this.$vuetify.breakpoint.name||"xl"==this.$vuetify.breakpoint.name))switch(this.$vuetify.breakpoint.name){case"md":t="10vh";break;case"lg":t="8vh";break;case"xl":t="8vh";break}return t}}},Tt=Et,It=a("5bc1"),Vt=a("e4e5"),Pt=Object(u["a"])(Tt,Ot,$t,!1,null,null,null),Mt=Pt.exports;p()(Pt,{VAppBarNavIcon:It["a"],VBanner:Vt["a"],VBtn:f["a"],VIcon:b["a"]});var Nt={components:{Contact:T,About:L,Home:J,Practices:st,Associates:yt,Nav:At,Banner:Mt},data:function(){return{contactMethods:[{name:"address",href:"",target:"",meta:"4025 Debrecen 43 Piac street",icon:"map-marker-outline",customClass:"",color:"#F4E8D2",class4Banner:"",align:"",contactStyle:"d-md-flex mr-md-15"},{name:"phone",href:"tel:+52342821",target:"_blank",meta:"+52 342 821",icon:"phone-outline",customClass:"custom-border button",color:"#BEAF67",class4Banner:"mr-3 mr-md-10 mr-lg-15 px-0",align:"custom-border button mx-md-15",contactStyle:"d-flex custom-border button mr-md-15"},{name:"email",href:"mailto:foldest@t-online.hu",target:"_blank",meta:"foldest@t-online.hu",icon:"email-outline",customClass:"",color:"#F4E8D2",class4Banner:"mx-0 px-0",align:"",contactStyle:"d-md-flex mr-md-15"}],dynamicSubtitle:["Law Office","Ügyvédi Iroda"],dynamicAddress:["5 Piac street 4024 Debrecen","4024 Debrecen Piac utca 5"],dynamicSnackText:"",timeout:1500,snackbar:!1,copyIcon:"far fa-copy",englishOn:!1,title:"Földes",picRef:"./csapatSnip2.jpg",iconActive:!1,offset:-123,menus:[{dynamicName:["Home","Kezdőoldal"],hasSubMenu:!1,id:0,url:"/home",goto:{el:"#home",offset:this.getOffset("main"),duration:1500}},{dynamicName:["About","Rólunk"],hasSubMenu:!1,id:1,url:"/about",goto:{el:"#about",offset:this.getOffset("main"),duration:1500}},{dynamicName:["Practies","Szakterületeink"],hasSubMenu:!0,subMenus:[{name:"Cégjog",goto:{el:"#cegjog",offset:this.getOffset("sub"),duration:1500}},{name:"Gazdasági ügyek",goto:{el:"#gazdjog",offset:this.getOffset("sub"),duration:1500}},{name:"Ingatlan ügyek",goto:{el:"#ingatlanjog",offset:this.getOffset("sub"),duration:1500}},{name:"Civil szervezetek",goto:{el:"#civiljog",offset:this.getOffset("sub"),duration:1500}},{name:"Védjegy ügyek",goto:{el:"#vedjog",offset:this.getOffset("sub"),duration:1500}}],id:2,url:"/practices",goto:{el:"#practices",offset:this.getOffset("main"),duration:1500}},{dynamicName:["Lawyers","Munkatársaink"],hasSubMenu:!1,id:3,url:"/associates",goto:{el:"#associates",offset:this.getOffset("main"),duration:1500}},{dynamicName:["Contact","Kapcsolat"],hasSubMenu:!1,id:4,url:"/contact",goto:{el:"#contact",offset:this.getOffset("main"),duration:1500}}],drawer:!1,group:null,menuTranslations:["Home","About","Practices","Associates","Contact"],items:[{src:"./csapatSnip2.jpg"},{src:"./csapatSnip3.jpg"},{src:"./random2Snip.jpg"}]}},computed:{dynamicWidth:function(){return 1e3}},watch:{group:function(){this.drawer=!1}},methods:{getOffset:function(t){var e=this.$vuetify.breakpoint.width>959?-83:-123;return"sub"==t&&(e-=20),e},onResize:function(){this.offset=this.$vuetify.breakpoint.width>959?-123:-83},openNavInChild:function(){this.$refs.nav.openNav()},dynamicCarouselHeight:function(){var t="0";switch(this.$vuetify.breakpoint.name){case"xs":t="30vh";break;case"sm":t="50vh";break;case"md":t="90vh";break;case"lg":t="92vh";break;case"xl":t="92vh";break}return("xs"==this.$vuetify.breakpoint.name||"sm"==this.$vuetify.breakpoint.name)&&this.$vuetify.breakpoint.width>500&&this.$vuetify.breakpoint.height<425&&(t="100vh"),this.$vuetify.breakpoint.width>1300&&this.$vuetify.breakpoint.height<400&&(t="0vh"),console.log("<<<<<<   You can ignore this, this is for development purposes only. >>>>>>"),console.log("<<<<<<   Viewport width:  ".concat(this.$vuetify.breakpoint.width," >>>>>>")),console.log("<<<<<<   Viewport height:  ".concat(this.$vuetify.breakpoint.height," >>>>>>")),console.log("<<<<<<   You can ignore this, this is for development purposes only. >>>>>>"),t},scroll2map:function(t){"address"==t&&(this.$scrollTo("#contact",1500,{el:"#contact",offset:this.getOffset("main")+150,onDone:this.$refs.contact.$refs.gmap.relocate(),duration:1500}),this.$refs.nav.openNav())},flashAlert:function(t){console.log(t),"email"==t?(this.dynamicSnackText=this.englishOn?"EMAIL ADDRESS COPIED TO CLIPBOARD":"EMAIL CÍM VÁGÓLAPRA MÁSOLVA",navigator.clipboard.writeText("foldespeter@foldeslegal.hu")):"phone"==t?(this.dynamicSnackText=this.englishOn?"PHONE NUMBER COPIED TO CLIPBOARD":"TELEFONSZÁM VÁGÓLAPRA MÁSOLVA",navigator.clipboard.writeText("+52 554 442")):(this.dynamicSnackText=this.englishOn?"ADDRESS COPIED TO CLIPBOARD":"CÍM VÁGÓLAPRA MÁSOLVA",this.englishOn?navigator.clipboard.writeText(this.dynamicAddress[0]):navigator.clipboard.writeText(this.dynamicAddress[1])),event.target.classList.toggle("fas"),this.snackbar=!0,setTimeout((function(){document.querySelectorAll(".copy").forEach((function(t){t.classList.remove("fas")}))}),this.timeout)},langSwitch:function(){this.englishOn=!this.englishOn}}},Ft=Nt,Dt=(a("5c0b"),a("7496")),Bt=a("5e66"),Lt=a("3e35"),Wt=a("f6c4"),Rt=a("269a"),Ht=a.n(Rt),Gt=a("dc22"),Ut=Object(u["a"])(Ft,i,s,!1,null,null,null),Jt=Ut.exports;p()(Ut,{VApp:Dt["a"],VCarousel:Bt["a"],VCarouselItem:Lt["a"],VContainer:v["a"],VImg:F["a"],VMain:Wt["a"],VSnackbar:$["a"]}),Ht()(Ut,{Resize:Gt["a"]});var Kt=a("f309");a("15f5");n["a"].use(Kt["a"]);var Yt=new Kt["a"]({theme:{themes:{light:{accent:"#f4e8d2"}}},icons:{iconfont:"fa"}}),Zt=a("f13c"),qt=a.n(Zt),Qt=a("755e");n["a"].config.productionTip=!1,n["a"].use(Qt,{load:{key:"AIzaSyD8ZOmQbAGNOoDVDaoMk4hRrXSZH7G-8aY",libraries:"places"}}),n["a"].use(qt.a,{easing:"ease-in-out"}),new n["a"]({el:"#app",vuetify:Yt,render:function(t){return t(Jt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"8e4c":function(t,e,a){"use strict";a("ad48")},"9c0c":function(t,e,a){},ad48:function(t,e,a){},b35d:function(t,e,a){},de66:function(t,e,a){"use strict";a("b35d")}});
//# sourceMappingURL=app.5afdf3a3.js.map