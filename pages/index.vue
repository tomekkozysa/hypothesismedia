<template>
  <article class="homepage-story">
    

    <section id="home" class=" homepage-video-hero js-observed is_active">
        
        
        <VideoLoop class="videoLoop" v-if="!reel"         
          src="https://cdn.muse.ai/w/ca560fe03e91517f91d2fb618bb3e3f4d2bd425dc3324c4658afb4d24d7d27df/videos/video.mp4" />
        
        <!-- <VideoLoop class="videoLoop" v-if="!reel"         
          src="https://res.cloudinary.com/fifteennine/video/upload/q_55/v1610129156/_/hm/loop_edited720.mp4" /> -->
        
        <!-- 
          
          7 MB loop 
          <Showreel v-if="reel" @reelEnded="toggleReel"         
          src="https://cdn.muse.ai/w/91b2ad0efd0a145169528a7df382792b82f5e050a8247a644f1bf36fe48bf5d0/videos/video.mp4" />
         -->
        
        <Showreel v-if="reel" @reelEnded="toggleReel"         
          src="https://cdn.muse.ai/w/91b2ad0efd0a145169528a7df382792b82f5e050a8247a644f1bf36fe48bf5d0/videos/video.mp4" />
        

      <div class="playshowreel"> 
        <p v-if="!reel" class="playshowreel-button" @click="toggleReel">play showreel</p>
        <p v-if="reel" class="playshowreel-button" @click="toggleReel">close showreel</p>
      </div>
       
    </section>

    <section id="who-we-are" class="homepage-story-slide js-observed slide-snap">
      <h3 class="homepage-story-slide-headline">Who we are</h3>
      <div class="homepage-story-slide-content who-we-are-copy">
        <p>We are a niche consultancy specialising in interactive and audience engagement innovation across live broadcast and events.
        Experts in viewer engagement and fan interaction. </p>
        <p>Creating and delivering global firsts by fusing editorial content with interactive technologies to bring audiences closer to their favourite shows and events. </p>
        <p>Working with best of breed industry partners to streamline, innovate and deliver breakout interactive engagement concepts that move the live broadcast industry forward.</p>
      </div>
      <Grid />
    </section>

    <section id="what-we-do" class="homepage-story-slide js-observed is_full_size slide-snap"><!-- slide-snap -->
      <h3 class="homepage-story-slide-headline">What we do</h3>
      <WhatWeDo  class="homepage-story-slide-content" />
    </section>

 
  <section id="case-studies" class="homepage-story-slide js-observed">
    <h3 class="homepage-story-slide-headline">Case Studies</h3>    
    <CascadeTwo  class="homepage-story-slide-content" />   
  </section>

  <section id="contact" class="homepage-story-slide slide-snap js-observed ">
    <h3 class="homepage-story-slide-headline">Contact</h3>

    <Contact class="homepage-story-slide-content" />

  </section>

</article>
  
</template>

<script>
import Expander from '~/components/Expander.vue';
import CascadeTwo from '~/components/CascadeTwo.vue';
import Slideshow from '~/components/Slideshow4.vue';
import VideoLoop from '~/components/VideoLoop.vue';
import Showreel from '~/components/Showreel.vue';
import WhatWeDo from '~/components/WhatWeDo.vue';

import Grid from '~/components/Grid.vue';
import Contact from '~/components/Contact.vue';



export default {
  

  data(){
    return{
      observer:null,
      reel:false,
    }
  },
  methods:{

      shout:function(what){
        this.$emit('onSection'+what)
      },
      toggleReel(){
        this.reel = !this.reel;

      },
    
  },
}

</script>

<style scoped>


.homepage-story{
    box-sizing:border-box;
    /* max-width: var(--l-max-w); */
    
}

  
.homepage-story-slide{

  width:100%;
  min-height:80vh;
  
  margin-top:calc(0 - var(--u-slide-shift-y));
  max-width: var(--l-max-w);
  padding:var(--u-slide-shift-y) var(--l-padding-rl);
  
}
.homepage-story-carousel{
  max-width: var(--l-max-w);
  margin-top:0;
  min-height:100vh;
  scroll-snap-align: start;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index:500;
}

.homepage-video-hero{
  /* max-width: var(--l-max-w); */
  margin-top:0;
  min-height:100vh;
  width:100%;
  scroll-snap-align: start;
  /* display:flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  z-index:500;
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
  font-family: var(--ff-oswald);
  text-transform:uppercase;
  text-align:right;
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

.who-we-are-copy{
  columns: 2;
  column-gap: 2em;
}

.who-we-are-copy p:not(:first-child){
    margin-top:1em;
}
 @media (max-width: 961px) {

.who-we-are-copy{
  columns: 1;
}
 }


.playshowreel{
  
  justify-self: flex-end;
}
.playshowreel-button{
  display:block;
  padding:.5em;
  margin:0 auto;
  font-size:1.8rem;
  font-weight:500;
text-align:center;
   cursor:pointer;

  
}
</style>



