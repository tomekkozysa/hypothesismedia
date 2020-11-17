<template>
    <div class="">
        <h3 class="homepage-story-slide-headline">Case studies</h3>



<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Brit Awards</h3>
          <p class="case-study-blurb"> Live Social Voting </p>
          </div>
        </div>
<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Million Pound Drop</h3>
          <p class="case-study-blurb"> Live Audience Play Along</p>
          </div>
        </div>
<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Crufts</h3>
          <p class="case-study-blurb"> Live Broadcast Audience Engagement</p>
          </div>
        </div>
<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Voice</h3>
          <p class="case-study-blurb"> Interactive Concept Ideation</p>
          </div>
        </div>
<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Ed Sheeran 'X' </h3>
          <p class="case-study-blurb">Live Dynamic Broadcast Advertising</p>
          </div>
        </div>
<div class="case-study-teaser">
             <div class="case-study-teaser-img"></div>
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
    data(){},
    mounted(){},
    methods:{}      

}
</script>
<style>

.case-study-teaser{
   padding:2em 0;
   scroll-snap-align: start;
   margin:2em 0;
   display:flex;
    
}
.case-study-teaser:nth-child(odd){
    flex-direction: row-reverse;

}
.case-study-teaser-img{
  display:block;
  width:70%;
  min-height: 50vh;
  background:rgba(0,0,0,0.3);
  border:0;
  border-radius:.2em;
  position:relative;
}

/* .case-study-teaser-img::after{
  display:block;
  position:absolute;
  z-index:100;
  content:" ";
  width:320px;
  height:180px;
  border:1px solid rgba(255,255,255,.5);
  border-radius:.2em;
  background:rgba(100,200,90,0);
  transform:translate(5px, -5px);
} */


.case-study-teaser-caption{
  font-size:var(--fs-body);
  padding:1em;
  width:30%;
  align-self: center;
}



</style>
