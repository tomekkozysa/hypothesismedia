<template>
  <article class="homepage-story">
    
    <section id="home" class="homepage-story-slide homepage-story-carousel js-observed is_active">
        <!-- <Slideshow />  -->

        

        <video class="homepage-story-video" 
        controls muted autoplay width="100%" height="auto">


    <source src="https://res.cloudinary.com/fifteennine/video/upload/v1608292985/_/hm/HYPOTHESIS_MEDIA_ROUGH_CUT_002.mp4"
            type="video/mp4">

        </video>
    </section>
      
      
      
      

     



<section id="who-we-are" class="homepage-story-slide js-observed scroll-snap">
    <h3 class="homepage-story-slide-headline">Who we are</h3>
    <div class="homepage-story-slide-content who-we-are-copy">
      We are a niche consultancy specialising in interactive and audience engagement innovation across live broadcast and events.

Experts in viewer engagement and fan interaction. 

Creating and delivering global firsts by fusing editorial content with interactive technologies to bring audiences closer to their favourite shows and events. 

Working with best of breed industry partners to streamline, innovate and deliver breakout interactive engagement concepts that move the live broadcast industry forward.
    </div>
    
    <div class="homepage-story-slide-content">
      <Grid />
    </div>

  </section>

<section id="what-we-do" class="homepage-story-slide js-observed is_full_size scroll-snap"><!-- slide-snap -->
    <h3 class="homepage-story-slide-headline">What we do</h3>
<WhatWeDo  class="homepage-story-slide-content" />
</section>

 
  <section id="case-studies" class="homepage-story-slide js-observed">
    <h3 class="homepage-story-slide-headline">Case Studies</h3>

    

    
    <Cascade  class="homepage-story-slide-content" />   
  </section>

  <section id="contact" class="homepage-story-slide slide-snap js-observed ">
    <h3 class="homepage-story-slide-headline">Contact</h3>
  </section>
  




  




</article>
  
</template>

<script>
import Expander from '~/components/Expander.vue';
import CascadeTwo from '~/components/CascadeTwo.vue';
import Slideshow from '~/components/Slideshow4.vue';
import WhatWeDo from '~/components/WhatWeDo.vue';
import WhatWeDo2 from '~/components/WhatWeDo2.vue';
import Grid from '~/components/Grid.vue';





export default {
  components:{
    
    Expander,
    Slideshow,
    WhatWeDo,
    WhatWeDo2,
    Cascade:CascadeTwo,
    Grid

  
  },

  

  

  data(){
    return{
      observer:null,
    }
  },
  methods:{

      shout:function(what){
        // alert('argh!'+what)
        this.$emit('onSection'+what)
      }
    
  },
}








</script>

<style scoped>
/* 
@keyframes slidein {
  from { transform: translateY(40px); opacity:0}
  to   { transform: translateY(0); opacity:1}
}


.is_active .homepage-story-slide-content{
animation-duration: .75s;
  animation-name: slidein;
} */


.homepage-story{
    box-sizing:border-box;
    max-width: var(--l-max-w);
    
}

.homepage-story-video{
  background:var(--c-dark);
  outline:none;
}
/*
.homepage-story-slide:nth-child(odd){
  border:1px solid yellow;
  }
.homepage-story-slide:nth-child(even){
  border:1px solid red;
  }
*/
  
.homepage-story-slide{

  width:100%;
  min-height:80vh;
  
  /* padding:var(--u-hss-padding); */
  margin-top:-10vh;
  padding:10vh 0;
  
  /* opacity: 0; */

}
.homepage-story-carousel{
  margin-top:0;
  min-height:100vh;
  scroll-snap-align: start;
  display:flex;
  align-items: center;
}
.homepage-story-slide.is_full-size{

  min-height:90vh;
  

}

.homepage-story-slide-headline{
  padding:0;
  margin:10vh 0 0;
  font-size:var(--fs-headline); 
  /* letter-spacing:-.04em; */
  font-weight:500;
  line-height:1.1;
  /* animation: anim_in .75s; */
  
  z-index:1000000;
}



.homepage-story-slide-content{
    margin-top:4em;
    font-size:var(--fs-body); letter-spacing:-.04em;

/*   transform:translateX(-80px); */
/*   opacity:0.02; */
/*   transition:all .5s ease-in-out ; */
}

.homepage-story-slide.is_active 
.homepage-story-slide-content{
/*   transform:translateX(0); */
/*   opacity:1; */
}



footer{
  min-height:100vh;
  background:rgba(0,0,0,.2);
}











/*

at 1100px story width, border length is 3125px


CORNERS:


LB 
    --story-border-space: 870px;
    --story-border-offset: 270px;

RB


--story-border-space: 1200px;
--story-border-offset: 600px  
TL

--story-border-space: 420px;
--story-border-offset: -110px;

TR


--story-border-space: 660px;
--story-border-offset: 1800px;

*/




.who-we-are-copy{
  columns: 2;
  column-gap: 2em;
}



/* 
.homepage-content-list-item:nth-child(odd) .expander-split{

  flex-direction: row-reverse;
}
.homepage-content-list-item:nth-child(odd) .expander-copy{

  padding:0 2em 0 0;
}


.expander-split{
    display:flex;   


}
.expander-copy{
    width:50%;
    font-size: var(--fs-body);
    padding: 0 0 0 2em;
}
.expander-image img{
    max-width:100%;
    width:100%;
    height:100%;
    object-fit:cover;


}
.expander-image{
    width:50%;
    
}
*/




</style>



