<template>
  <article class="homepage-story">
  <section class="homepage-story-slide slide-snap">

    <h3 class="homepage-story-slide-headline">
      Broadcast Audience & Fan Engagement Consultancy
    </h3>
    <div class="homepage-story-slide-content">

    </div>
  </section>





  <!--   <section class="homepage-story-slide js-observed slide-snap">
    
    <h3 class="homepage-story-slide-headline"> 
  Live Executive Viewer Engagement
    </h3>
    <div class="homepage-story-slide-content">

    </div>
  </section>
  
<section class="homepage-story-slide js-observed slide-snap">
    
    <h3 class="homepage-story-slide-headline"> 
      Content & Interactivity
    </h3>
    <div class="homepage-story-slide-content">

    </div>
  </section> -->


<section class="homepage-story-slide js-observed slide-snap">
    <h3 class="homepage-story-slide-headline">Who we are</h3>
    <div class="homepage-story-slide-content">
      Broadcast Audience & Fan Engagement Consultancy.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum quis lacus sit amet blandit. Morbi et tempor eros. Integer auctor et tellus ac ultrices. Cras sit amet mattis dolor, sit amet pellentesque est. Praesent a urna vel nulla laoreet malesuada ut sed arcu. Sed et nunc eget orci tincidunt viverra sit amet ut ex. Sed pellentesque leo aliquam, tincidunt elit eu, dignissim mi. Ut non dignissim nunc. Quisque a ipsum sed metus ullamcorper placerat. Aliquam sit amet dui ac magna tristique tincidunt eget at leo. Etiam at sem lorem. Sed vehicula tincidunt consectetur. Cras ac venenatis tortor.

<!-- Vivamus ipsum sem, sodales a volutpat sit amet, bibendum non tellus. Suspendisse ac sem non neque efficitur auctor vitae vitae sapien. Curabitur imperdiet lectus non varius sodales. Donec hendrerit posuere diam. In pretium facilisis massa, ac consectetur tellus imperdiet eu. In hac habitasse platea dictumst. Suspendisse mollis at mi eget sollicitudin. -->

<!-- Nulla pellentesque fermentum mauris sit amet tincidunt. Maecenas tincidunt aliquet enim a sodales. Ut accumsan faucibus velit, eget tristique dui suscipit eget. Sed eget blandit sapien. Ut orci erat, condimentum in lorem ut, ultrices congue mi. Donec vulputate metus facilisis velit tristique, eget mollis nibh fermentum. Aliquam erat volutpat. -->


    </div>
    
    <div class="homepage-story-slide-content">
      <Grid />
    </div>

  </section>




  <section class="homepage-story-slide slide-snap">
    <h3 class="homepage-story-slide-headline">What we do</h3>

    <ul class="homepage-content-list ">

      <li class="homepage-content-list-item js-observed js-toggle slide-snap">
        <Expander>
          Live Audience & Viewer Engagement Executive Production
        </Expander>
      </li>

      <li class="homepage-content-list-item js-observed js-toggle slide-snap">
        <Expander>
          Social Media Voting/Gamification Fan/Audience Engagement Strategy 
        </Expander>
      </li>

      <li class="homepage-content-list-item js-observed js-toggle slide-snap">
        <Expander class="homepage-content-list-item-content">
          Format & Concept Ideation 
        </Expander>
      </li>

    </ul>

  </section>

  
  <section class="homepage-story-slide js-observed slide-snap">
    <Cascade />   
  </section>
  
</article>
  
</template>

<script>

import Expander from '~/components/Expander.vue';
import Cascade from '~/components/Cascade.vue';
import Grid from '~/components/Grid.vue';


/*
// Update entry
const updateSection = (entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('is_active');
      
    }
};


// Handle callback
const intersectCallback = (entries, observer) => {
    for (let entry of entries) {
        updateSection(entry);
    }
};


// Create Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
};

const observer = new IntersectionObserver(intersectCallback, options);


// Observe sections
const sections = document.getElementsByClassName('js-observed');

for (let section of sections) {
    observer.observe(section);
}

*/

// const toggles = document.querySelectorAll('.js-toggle')
// toggle  = (el)=>{
//   // let d =  document.querySelector('.is_open');
//   // if ( d ){
//   //   d.classList.remove('is_open');    
//   // } 
//   if(el.classList.contains('is_open')){
//       el.classList.remove('is_open');    
//     return;
//   }

//   el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  
//   setTimeout(()=>{
//        el.classList.add('is_open');
//   },150)
 

  

// }
// toggles.forEach((el)=>{
//   el.addEventListener('click',(ev) => {toggle(el)})
// })



export default {
  components:{
    
    Expander,
    Cascade,
    Grid

  
  },

  data(){
    return{
     
    }
  }
}
</script>

<style>



.homepage-story{
    box-sizing:border-box;
    max-width: var(--l-max-w);
}



.slide-snap{
    scroll-snap-align: start;
    
}
.homepage-story-slide{

  width:100%;
  min-height:100vh;
  padding:40px;
/*   opacity:.1; */
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
}


.homepage-story-slide-content{
    margin-top:1em;
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
  margin-top:1em;
  padding:0;
}


.homepage-content-list-item{
  padding:2vh 0;
  font-size:var(--fs-list-item);
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




.case-study-headline{
  font-size:var(--fs-cs-headline);
  font-weight:400;
  margin:0;
  padding:0;
}
.case-study-blurb{
  font-size:var(--fs-cs-blurb);
  margin:0;
  padding:0;
}




.is_open{
  

  min-height:80vh;
  
}

footer{
  min-height:100vh;
  background:rgba(0,0,0,.2);
}
</style>
