<template>
  <article class="homepage-story">
  

  <section id="home" class="homepage-story-slide slide-snap js-observed">


    <Slideshow />
    
    
  </section>




<section id="who-we-are" class="homepage-story-slide js-observed slide-snap is_full-size">
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




  <section id="what-we-do" class="homepage-story-slide slide-snap js-observed">
    <h3 class="homepage-story-slide-headline">What we do</h3>

    <ul class="homepage-content-list ">

      <li class="homepage-content-list-item js-toggle slide-snap">
        <Expander>
          Live Audience & Viewer Engagement Executive Production
        </Expander>
      </li>

      <li class="homepage-content-list-item js-toggle slide-snap">
        <Expander>
          Social Media Voting/Gamification Fan/Audience Engagement Strategy 
        </Expander>
      </li>

      <li class="homepage-content-list-item js-toggle slide-snap">
        <Expander class="homepage-content-list-item-content">
          Format & Concept Ideation 
        </Expander>
      </li>

    </ul>

  </section> <!--   -->

  
  <section id="case-studies" class="homepage-story-slide js-observed slide-snap">
    <h3 class="homepage-story-slide-headline">Case Studies</h3>
    <Cascade  class="homepage-story-slide-content" />   
  </section>

  <section id="contact" class="homepage-story-slide slide-snap js-observed ">
    <h3 class="homepage-story-slide-headline">Contact</h3>
  </section>
  
</article>
  
</template>

<script>
import anime from 'animejs/lib/anime.min.js';
import Expander from '~/components/Expander.vue';
import CascadeTwo from '~/components/CascadeTwo.vue';
import Slideshow from '~/components/Slideshow1.vue';
import Grid from '~/components/Grid.vue';





export default {
  components:{
    
    Expander,
    Slideshow,
    Cascade:CascadeTwo,
    Grid

  
  },

  

  mounted(){
   
//    const images = document.querySelectorAll('.js-observed');

// this.observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       // entry.target.classList.add('fancy');
//       console.log(entry.target.id+'  '+entry.intersectionRatio);
//       this.shout(entry.target.id);
//     } else {
//       entry.target.classList.remove('fancy');
//     }
//   });
// });

// images.forEach(image => {
//   this.observer.observe(image);
// });


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



.homepage-story{
    box-sizing:border-box;
    max-width: var(--l-max-w);
}


.slide-snap{
    scroll-snap-align: start;
    
}
.homepage-story-slide{

  width:100%;
  min-height:80vh;
  padding:0;

}
.homepage-story-slide.is_full-size{

  min-height:90vh;
  

}

.homepage-story-slide.is_active{
/*     opacity:1; */
}


.homepage-story-slide-headline{
  padding:0;
  margin:10vh 0 0;
  font-size:var(--fs-headline); letter-spacing:-.04em;
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


.homepage-content-list{
  list-style:none;
  margin-top:4em;
  padding:0;
}


.homepage-content-list-item{
  padding:2vh 0;
  font-size:var(--fs-list-item);
  letter-spacing: -.02em;
  border-bottom:1px solid rgba(255,255,255,.2);
  
}
.homepage-content-list-item-content:active,
.homepage-content-list-item-content{
  padding:2vh 0;
  background:rgba(70,84,163,0);
  transition: background .5s;  
  mix-blend-mode: screen;
}
/* .homepage-content-list-item-content:hover{
      background:rgba(70,84,163,.5);
} */
/* .homepage-content-list-item:last-child{ border:none; } */

.homepage-content-list-item{
/*   transform:translateX(80px); */
/*   opacity:0; */
/*   transition:all .5s ease-in-out ; */
}

.homepage-content-list-item.is_active{
/*   transform:translateX(0px); */
/*   opacity:1; */
}



.is_open{
  

  min-height:80vh;
  
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
</style>



