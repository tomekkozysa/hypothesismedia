<template>
  <article class="homepage-story">
  
  
  <section class="homepage-story-slide slide-snap">

    
    <div class="homepage-intro-story st1" ref="js-clock">
    
    <div class="homepage-intro-story-copy -ic1">
      <h3 class="homepage-story-slide-headline">
      Broadcast Audience & Fan Engagement
    </h3>      
    </div>
    <div class="homepage-intro-story-copy -ic2">
    <h3 class="homepage-story-slide-headline">
      Live Executive Viewer Engagement
    </h3>
    </div>

    <div class="homepage-intro-story-copy -ic3">
      <h3 class="homepage-story-slide-headline">
        Content & Interactivity
    </h3>
    </div>


    <svg class="homepage-intro-story-border -mod2" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none"  />
        </svg>

    <svg class="homepage-intro-story-border" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>


        



 <!-- <img src="/img/tmp3.gif" class="homepage-intro-story-img " /> -->
 
 <img src="/img/eds1@2x.jpg" class="homepage-intro-story-img -ic1" />
 <img src="/img/tmp3.jpg" class="homepage-intro-story-img -ic2" />
 <img src="/img/eds2@2x.jpg" class="homepage-intro-story-img -ic3" />
    <div class="homepage-intro-story-media" >
        
       
    </div>
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
      Broadcast Audience & Fan Engagement.
      
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
import anime from 'animejs/lib/anime.min.js';
import Expander from '~/components/Expander.vue';
import Cascade from '~/components/Cascade.vue';
import Grid from '~/components/Grid.vue';





export default {
  components:{
    
    Expander,
    Cascade,
    Grid

  
  },
  mounted(){
  //   anime({
  //       targets: '.animated-stroke',
  //      strokeDashoffset: {
  //   value: 1000,
  //   duration: 1700,
  //   easing: 'easeOutQuart'
  // },
  // strokeDasharray: {
  //   value: '2400 800',
  //   duration: 1700,
  //   easing: 'easeOutQuart'
  // }
  //     })




  /*
  
  animation trigger


  */
    this.clockInterval = setInterval(()=>{
      this.updateClock();
    },this.intervalTime)
  },
  data(){
    return{
      clockInterval:0,
      intervalTime:4000,
      intervalArray:['st1','st2','st3'],
      currentIndex:0,
    }
  },
  methods:{

    updateClock(){
      
      let current = this.currentIndex+1 > 2 ? 0 :  this.currentIndex+1;

      let c = this.$refs['js-clock'];
      console.log(c)
      let oldclass = this.intervalArray[this.currentIndex]
      let newclass = this.intervalArray[current];

      c.classList.remove(oldclass);
      c.classList.add(newclass);

      this.currentIndex = current;



    }
  },
}



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
 

  

// }q
// toggles.forEach((el)=>{
//   el.addEventListener('click',(ev) => {toggle(el)})
// })






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
  min-height:80vh;
  padding:0 40px;
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









.homepage-intro-story{

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  /* grid-auto-rows: minmax(10vh, auto); height: 60vh;*/
  grid-template-rows: repeat(6,10vh);
  
  /* grid-auto-rows: 18vh; */
  border-radius:1em;

  width:1100px;
  margin:0 auto;

  /* background:purple; */
}




.st1 .-ic1{
  opacity:1;
}
.st1 .-ic2,
.st1 .-ic3{
  opacity:0;
}

.st2 .-ic2{
  opacity:1;
}
.st2 .-ic1,
.st2 .-ic3{
  opacity:0;
}

.st3 .-ic3{
  opacity:1;
}
.st3 .-ic1,
.st3 .-ic2{
  opacity:0;
}

.st1{
    
    --story-border-space: 1200px;
    --story-border-offset: 600px;
    /* background: pink; */
}
.st2{
        --story-border-space: 1200px;
    --story-border-offset: -600px;
    /* background: red; */
}

.st3{
       --story-border-space: 1200px;
 
--story-border-offset: 1800px;
/* background: yellow; */
}


.homepage-intro-story-copy{
  transition:opacity 1.25s ease-in-out .15s  ;
  opacity:1;
  z-index:100000;
  transform:translateX(-500px);
  /* text-shadow: 2px 2px 0 var(--c-dark); */
}

.homepage-intro-story-copy.-ic1{
  grid-column: 3 / 7;
  grid-row: 3/7;
  align-self: end; 
  text-align: right;
  padding:2em;
  transform:translateX(0);
  
}


.homepage-intro-story-copy.-ic2{
  grid-column: 1/3;
    grid-row: 1/3;
    align-self: start;
    transform: translateX(-5em);
}

.homepage-intro-story-copy.-ic3{

grid-column: 5 / 7;
    grid-row: 2/3;
    align-self: end;
    transform: translateX(2em);

}


.homepage-intro-story-media{
    
  z-index:-1;
  /* opacity:.5;q */
  /* overflow:hidden; */
  
  grid-column: 1 / 7;
  grid-row: 1 / 6;

  /* max-height: 60vh; */
  /* background:red; */
  /* background: transparent; */
  /* background:purple; */
  background:var(--c-dark);
  /* box-shadow: 10px 10px 10px rgba(0,0,0,.2); */
  border:1px solid rgba(255,0,0,.01);
  /* background-blend-mode: hard-light; */
  border-radius:1em;
  
  /* mix-blend-mode: screen; */
}

.homepage-intro-story-img{
  
   opacity:1;
   /* z-index:-1; */

  transition:opacity 1s ease-in-out;

  
  /* mix-blend-mode: multiply; */
  mix-blend-mode: screen;
  
    grid-column: 1 / 5;
  grid-row: 1 / 6;

  display: block;
  /* display: none; */
  width:100%;
  height:100%;
  /* height:60vh; */
  object-fit:cover;
  border-radius:1em; 
  
}



.homepage-intro-story-img.-ic1{

  
    grid-column: 1 / 5;
  grid-row: 1 / 5;
}


.homepage-intro-story-img.-ic2{

  
    grid-column: 3 / 7;
  grid-row: 1 / 6;
}



.homepage-intro-story-border.-mod2{
  /* transform:translate(0, 0); */
  stroke:white;
  opacity:.4;
  stroke-width: calc (2 * var(--story-border-sw));
  transition-delay: .25s;
  transition:all 1.25s ease-out;
  
}


.homepage-intro-story-border{

  z-index:500;

  width:100%;
  height:100%;
  /* height:60vh; */
  transition:all .75s;

  stroke-dasharray: var(--story-border-length) var(--story-border-space);
  stroke-dashoffset: var(--story-border-offset);
  transform: translate(-5px, -5px);
  
  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 1 / 7;
  grid-row: 1 / 6;

  border-radius:1.1em;


  
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

</style>



