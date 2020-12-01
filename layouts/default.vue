<template>
  <div>

    
      

    <header class="header-main">
       <hgroup class="header-main-split">
          
        <img src="/hypothesismedia-logo.svg" class="header-logo"  />
        <NavigationToggle :expanded="navigation_expanded" @click.native="navToggle"
          class="header-navigation-toggle-button" />
      
      </hgroup>

       
        
      
    </header>
     <Navigation :expanded="navigation_expanded" />
    <Nuxt class="main" />
    <footer class="slide-snap"></footer>
  </div>
</template>




<script>
import Navigation from '~/components/Navigation.vue';
import NavigationToggle from '~/components/NavigationToggle.vue';
 

export default{

    components:{
      NavigationToggle,
      Navigation,
    },
    data(){
      return{
        navigation_expanded:false,
      }
    },
    methods:{
      navToggle:function(e){
        console.log('adasdaksjdhkajs daksjdhkasjdhkasjdh')
        this.navigation_expanded = !this.navigation_expanded;
      },
    }
    

}
</script>

<style>


:root{
  
  --c-dark:#270949;
  --c-light:#4654A3;
  --c-body:rgba(255,255,255,.7);
  
  --cg-header:linear-gradient(0deg, rgba(0,0,0,0) 0%, var(--c-dark) 30%, var(--c-dark) 100%);
  --cg-main:linear-gradient(0deg, var(--c-light) 0%, var(--c-dark) 50%);

  --fs-headline:7.6rem;  
  --fs-headline-small:4.2rem;
  --fs-list-item:4.2rem;
  --fs-body:2.4rem;
  --fs-navigation:1.8rem;
  
  
  --fs-cs-headline:4.2rem;
  --fs-cs-blurb: 1.8rem;
  --fs-cs-data: 2.4rem;
  --fs-cs-data: 2.4rem;

  --l-max-w:1200px;
  --u-logo-width:140px; 

  --u-nav-icon-size:30px;


    
  /* --story-border-total-length:3125px; */
  --story-border-total-length:calc( 120vh + 180vw );
  --story-border-total-length:calc( 120vh + 160vw );

  /* --story-border-space:1200px; */
  --story-border-space:90vw;
  


  /* --story-border-length:calc( var(--story-border-total-length) - var(--story-border-space)); */

  --story-border-length: calc(60vw + 60vh);

  --story-border-offset:0;
  --story-border-sw:2;



}



html {
  /* font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif; */
  /* font-size: 16px; */
 font-size:62.5%;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html { /* body won't work ¯\_(ツ)_/¯ */
  /* scroll-snap-type: y mandatory; */
  scroll-snap-type: y proximity;
  scroll-padding-top: 200px;
}

body{ 
  
  font-family:'Helvetica Neue', Arial, sans-serif;
  padding:0;
  margin:0;
  background:var(--c-dark);
  /* text-shadow: var(--c-light) 1px 1px 0; */

  /* background:var(--c-dark) var(--cg-main) no-repeat 0; */
  /* background:url(/img/tmp3.gif); */
  background-attachment:fixed;
  background-size:100vw 100vh;
  color:var(--c-body);
   
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main{
  padding:80px;
  max-width: var(--l-max-w);
  margin: 0 auto;
}

.header-main-split{
  display:flex;
  position: relative;
  z-index: 10000;
}

.header-main{
  /* display:none; */
  height: 120px;
  /* background:var(--c-dark); */
  position: -webkit-sticky;
  position: sticky;
  top:0;
  z-index:500000;
/* scroll-snap-align: start; */
padding:2em;
    /* background:transparent var(--cg-header) no-repeat 0; */
    /* background:var(--c-dark); */
    background:transparent
  /* background-attachment:fixed; */
  /* background-size:100vw 50vh; */

}
.header-logo{
  width:var(--u-logo-width);
  filter:brightness(200);
}

.header-navigation-toggle-button{
  /* flex-grow:2; */
  height:40px;
        width: 40px;
        display:flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
}

</style>

