<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@700&display=swap" rel="stylesheet">
    <header class="header-main">
      <hgroup class="header-main-split">
        <nuxt-link to="/#home"><img src="/hypothesismedia-logo.svg" class="header-logo"  /></nuxt-link>
        <NavigationToggle :expanded="navigation_expanded" @click.native="navToggle" class="header-navigation-toggle-button" />     
      </hgroup>
    </header>
    
    <Navigation :expanded="navigation_expanded" :current="navigation_position" />
    <Nuxt class="main" @onSection="onSection" />
    
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
        navigation_position:'home',
        currententry:null,
        pre:null,
        observed:[],
        observers:[],
        
      }
    },
    mounted(){

   
      const slides = document.querySelectorAll('.js-observed');
      console.log('slides? •*•', slides)

      let max = 0;
      let target = null;
      let lastentry = null;

      let observed = {};

      let options = {
        rootMargin: '0px',
        root: null,
        threshold: this.generateThresholds(100),
        // threshold: [...Array(30).keys()].map(x => x / 29),
        // threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]
      }

    
      // this.observer = new IntersectionObserver((entries) => {
      //   entries.forEach(entry => {
      //     this.pre = 'entry :' + entry.target.id + ' | ' + entry.intersectionRatio;
      //     let id=entry.target.id;
          


      //     if(!this.currententry){
      //       this.currententry = entry;
      //     }
      //     if(entry.intersectionRatio > .2 || entry.target.id == this.currententry.target.id){
      //       this.currententry = entry;
      //     }
      //     target = this.currententry.target.id;
      //     if(document.querySelector('.is_active')){
      //       document.querySelector('.is_active').classList.remove('is_active'); 
      //     }
      //     document.querySelector('#'+target).classList.add('is_active');  
      //   });


      // this.onSection(target);
      // },options);
      
      let intersectionCallback = (entries) => {

        // console.log('🖐 🖐 🖐', entries);
        entries.forEach(entry => {
          
          let id=entry.target.id;        
            
            let intersection=entry.intersectionRatio;    
            // let pixels = entry.target.scrollHeight * intersection;
            let pixels = entry.intersectionRect.height;
            // console.log('👉', id,pixels,entry.intersectionRect);
            this.updateObserved(id,pixels,entry);        
           if(entry.isIntersecting){}
          else{
            // this.updateObserved(id,0,entry);        
          }
          

        });

      }
      
      slides.forEach((slide,i) => {
        
        console.log(slide);
        this.observers[i] = new IntersectionObserver(intersectionCallback,options);     
        this.observers[i].observe(slide);
      });


  },

    methods:{
      updateObserved(id,intersectionRatio,entry){
        
        this.observed[id]={intersectionRatio:intersectionRatio, entry:entry};

        var sortable = [];
        for (var entry in this.observed) {
            // console.log('entry:', entry, this.observed[entry].intersectionRatio);
            sortable.push([entry, this.observed[entry].intersectionRatio]);
        }

        sortable.sort(function(a, b) {
            return a[1] - b[1];
        });
        sortable = sortable.reverse();


        // console.log('sortable',sortable);
        // console.log('sortable',sortable[0][0]);

         this.onSection(sortable[0][0]);


      },
      generateThresholds:function(max){

        let t = [];
        for(var i=0; i<= max; i++){
          
          t.push(i/max);

        }

        console.log('thresholds generated', t);
        return t;

      },
      
      navToggle:function(e){
        
        this.navigation_expanded = !this.navigation_expanded;
      },
      
      onSection:function(section){

        
          if(section && this.$route.name == "index"){
            this.navigation_position = section;
            // location.hash = section;

            history.pushState(null, null, '#'+section);


          }
      }
    }
    

}
</script>

<style>


:root{
  
  --c-dark:#270949;
  --c-light:#4654A3;
  --c-body:rgba(255,255,255,.90);
  
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
  
  --fs-cs-headline:5.6rem;
  --fs-cs-blurb: 2.8rem;
  --fs-cs-data: 2.4rem;
  
  --fs-cs-headline:2.2rem;
  --fs-cs-blurb: 2.8rem;
  --fs-cs-data: 4.8rem;
  
  
  --fs-cs-single-data:5.6rem;


  --l-max-w:1400px;
  --u-logo-width:140px; 

  --u-nav-icon-size:30px;
  --u-border-radius:20px;

  /* cascade colulmn */
  --u-column-padding: 40px;


   --u-hss-padding:15vh 0;

    
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

  text-rendering: optimizeSpeed;
  /* text-rendering: optimizeLegibility; */
   /* body won't work ¯\_(ツ)_/¯ */
  /* scroll-snap-type: y mandatory; */
  scroll-snap-type: y proximity;
  /* scroll-padding-top: 200px; */
}
svg{
  /* shape-rendering: optimizeSpeed; */
}
body{ 
  
  font-family:'Helvetica Neue', Arial, sans-serif;
  /* font-size:16px; */
  /* font-size:1.6rem; */
  /* font-size:var(--fs-body); */
  
  padding:0;
  margin:0;
  background:var(--c-dark);
  color:var(--c-body);
  
  /* text-shadow: var(--c-light) 1px 1px 0; */

  /* background:var(--c-dark) var(--cg-main) no-repeat 0; */
  /* background:url(/img/tmp3.gif); */
  background-attachment:fixed;
  background-size:100vw 100vh;
   
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}



.slide-snap{
    /* scroll-snap-align: start; */
    
}



.main{
  padding:0 80px;
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
padding:2em 10px 2em 2em;

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

