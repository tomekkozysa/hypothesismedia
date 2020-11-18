<template>
    <div class="">
        <h3 class="homepage-story-slide-headline">Case studies</h3>









<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/thebritawards.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >
          <h3 class="case-study-headline">The Brit Awards</h3>
          <p class="case-study-blurb"> Live Social Voting </p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/themillionpounddrop.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Million Pound Drop</h3>
          <p class="case-study-blurb"> Live Audience Play Along</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/crufts.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Crufts</h3>
          <p class="case-study-blurb"> Live Broadcast Audience Engagement</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/thevoice.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Voice</h3>
          <p class="case-study-blurb"> Interactive Concept Ideation</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/edsheeran.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Ed Sheeran 'X' </h3>
          <p class="case-study-blurb">Live Dynamic Broadcast Advertising</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <img src="/case-studies/yearsandyears.png" class="case-study-teaser-img">
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Years & Years - 'Shine'</h3>
          <p class="case-study-blurb"> Live Gamification TV Advert</p>
          </div>
        </div>



    </div>
</template>

<script>
export default{

    name:'Cascade',
    
    mounted(){},
    methods:{}      

}
</script>
<style>

.case-study-teaser{
   padding:5em 0;
   scroll-snap-align: start;
   /* margin:5em 0; */
   display:flex;
   min-height: 30vh;
    display: flex;
    align-items: center; 
}
.case-study-teaser:nth-child(odd){
    flex-direction: row-reverse;

}
.case-study-teaser-media{
  width: 50%;
  background: var(--c-dark);
  border-radius:.5em;
  position: relative;

}
.case-study-teaser-img{

  
  display:block;
  width:100%;
  height:auto;
  /* height:100%; */
  /* width:50%; */
  /* min-height: 50vh; */
  /* background:rgba(0,0,0,0.3); */
     /* mix-blend-mode: multiply; */
      
  /* border:0; */
  border-radius:.5em;
  
  object-fit: cover;
  mix-blend-mode: screen;
  opacity:.7;
}

.case-study-teaser-media::after{
  display:block;
  position:absolute;
   top:-5px;
  left:5px;
  z-index:100;
  content:" ";
  width:100%;
  height: 100%;
  border-radius:.5em;
  opacity:.5;
   /* background-blend-mode: overlay; */
  /* background:var(--c-light); */
  border:2px solid var(--c-light);
  
} 

/* .case-study-teaser-media::before{
  display:block;
  position:absolute;
 top:5px;
  left:-5px;
  
  z-index:-100;
  content:" ";
  width:100%;
  height: 100%;
  border-radius:.5em;
  opacity:.2;
   background-blend-mode: overlay;
  background:var(--c-light);
  
}  */



.case-study-teaser-caption{
  font-size:var(--fs-body);
  padding:1em;
  width:50%;
  align-self: center;
}



</style>
