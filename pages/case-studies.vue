<template>
  
  <nuxt-child />
</template>

<script>
import Expander from '~/components/Expander.vue';
import CascadeTwo from '~/components/CascadeTwo.vue';
import Slideshow from '~/components/Slideshow5.vue';
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



