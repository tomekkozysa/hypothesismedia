<template>
  <article class="homepage-story">
  <!-- <section class="homepage-story-slide slide-snap">

    <h3 class="homepage-story-slide-headline">
      Broadcast Audience & Fan Engagement Consultancy
    </h3>
    <div class="homepage-story-slide-content">

    </div>
  </section> -->



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
          Social Media Voting/GamificationFan/Audience Engagement Strategy 
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
    <h3 class="homepage-story-slide-headline">Who we are</h3>
    <div class="homepage-story-slide-content">
      Broadcast Audience & Fan Engagement Consultancy
    </div>
  </section>

  <section class="homepage-story-slide js-observed slide-snap">
    <Cascade />   
  </section>
  <footer class="slide-snap"></footer>
</article>
  
</template>

<script>

import Expander from '~/components/Expander.vue';
import Cascade from '~/components/Cascade.vue';


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
    Cascade
  
  },

  data(){
    return{
     
    }
  }
}
</script>

<style>
:root{
  
  --c-dark:#270949;
  --c-light:#4654A3;
  
  --cg-main:linear-gradient(0deg, var(--c-light) 0%, var(--c-dark) 100%);

  --fs-headline:4.6rem;  
  --fs-headline-small:3.2rem;
  --fs-list-item:2.4rem;
    --fs-body:1.2rem;
  
  
  --fs-cs-headline:2.2rem;
  --fs-cs-blurb: 1.4rem;
  --l-max-w:auto;
  
}

html { /* body won't work ¯\_(ツ)_/¯ */
  scroll-snap-type: y mandatory;
}

body{ 
  
  font-family:'Helvetica Neue', Arial, sans-serif;
  padding:0;
  margin:0;
  background:var(--c-dark);
/*     background:var(--c-dark) var(--cg-main) no-repeat 0 50vh; */
  background-attachment:fixed;
  background-size:100vw 50vh;
  color:white;
   
}
.homepage-story{
    box-sizing:border-box;
    max-width: var(--l-max-w);
}

* {  box-sizing:border-box;}

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
    font-size:var(--fs-headline-small); letter-spacing:-.04em;

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
