<template>
    <div>
        <!-- <h3 class="homepage-story-slide-headline">Case studies</h3> -->







<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/thebritawards.png" class="case-study-teaser-img">
              </div>
               <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >
          <h3 class="case-study-headline">The Brit Awards</h3>
          <p class="case-study-blurb"> Live Social Voting </p>
          <p class="case-study-data">Over 5 million social votes cast, 41,000 tweets per second</p>
          </div>
        </div>


<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/themillionpounddrop.png" class="case-study-teaser-img">
              </div>
              <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Million Pound Drop</h3>
          <p class="case-study-blurb"> Live Audience Play Along</p>
          <p class="case-study-data"> 12.5% of all live TV audience played along </p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/crufts.png" class="case-study-teaser-img">
              </div>
              <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Crufts</h3>
          <p class="case-study-blurb"> Live Broadcast Audience Engagement</p>
          <p class="case-study-data">Most socially engaged show across whole of Channel 4 each consecutive year in March</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/thevoice.png" class="case-study-teaser-img">
              </div>
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">The Voice</h3>
          <p class="case-study-blurb"> Interactive Concept Ideation</p>
          <p class="case-study-data">Global first live social mosaic on TV</p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/edsheeran.png" class="case-study-teaser-img">
              </div>
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Ed Sheeran 'X' </h3>
          <p class="case-study-blurb">Live Dynamic Broadcast Advertising</p>
          <p class="case-study-data">5% of all UK TV viewing public watching </p>
          </div>
        </div>
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/case-studies/yearsandyears.png" class="case-study-teaser-img">
              </div>
            </div>
            <div class="case-study-teaser-caption" >

          <h3 class="case-study-headline">Years & Years - 'Shine'</h3>
          <p class="case-study-blurb"> Live Gamification TV Advert</p>
          <p class="case-study-data">More viewers watching this ad than the TV show around it, 14,000 tweets received in 4 minutes</p>
          </div>
        </div>



    </div>
</template>

<script>
export default{

    name:'CascadeTwo',
    
    mounted(){},
    methods:{}      

}
</script>
<style>

.case-study-teaser{
   padding:4em 0;
   scroll-snap-align: start;
   /* margin:5em 0; */
   display:flex;
   min-height: 30vh;
    display: flex;
    align-items: center; 
    
}

.case-study-teaser-caption{
    position: relative;
}

/* .case-study-teaser-caption::after{
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
  border:1px solid pink;
  
}  */



.case-study-teaser:nth-child(odd){
    flex-direction: row-reverse;
}


.case-study-headline{
  font-size:var(--fs-cs-headline);
  font-weight:700;

  letter-spacing:-.02em;
  margin:0;
  padding:0;
}
.case-study-blurb{
  font-size:var(--fs-cs-blurb);
  font-weight:700;
  letter-spacing:-.02em;
  margin:0;
  padding:0;
}
.case-study-data{
    margin:0;
  padding:0;
    margin-top:1em;
    font-weight:500;
    letter-spacing:-.02em;
    font-style:italic;
  font-size:var(--fs-cs-data);
  
}





.case-study-teaser-caption{
  font-size:var(--fs-body);
  padding:0 0 0 2em;
  width:50%;
  align-self: center;
}

.case-study-teaser:nth-child(odd) .case-study-teaser-caption{
  padding:0 2em 0 0;

}

.faux-border{
position:absolute;
stroke:pink;
top:0;
height:100%;
width:100%;

 stroke-dasharray: 300% 100%;
 stroke-dashoffset: 0%;
 stroke-width:1px;
/* stroke-dashoffset: 50%; */
transition:all .75s;
transform: translate(5px, -5px);
pointer-events: none;


}

.case-study-teaser:nth-child(even) .faux-border{
    
    stroke-dashoffset: -200%;
}

.case-study-teaser-media:hover .faux-border{
     stroke-dasharray: 300% 0%;
      stroke-dashoffset: -250%;
      transform: translate(-5px, 5px);
      stroke-width:2px;
}


.case-study-teaser-media{
  width: 50%;
  background: var(--c-dark);
  
  position: relative;
  transition:all .75s;

}

.case-study-teaser-media:hover{
    /* transform: rotate3d(1, 1, 0, 25deg); */
    transform: translate(-5px, 5px);
}


.case-study-teaser-img-frame{
    /* border-radius:100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    border-radius:.5em;
    
}
.case-study-teaser-media:hover .case-study-teaser-img{
    /* transform: scale(1.2); */
    width:200%;
    opacity: 1;
     
    transition: opacity 1s;
}
.case-study-teaser-img{

  /* transform: scale(2); */
  display:block;
  width:100%;
  height:auto;
  /* height:100%; */
  /* width:50%; */
  /* min-height: 50vh; */
  /* background:rgba(0,0,0,0.3); */
     /* mix-blend-mode: multiply; */
      
  /* border:0; */
    overflow:hidden;
  transition: opacity 5s;
  
  border-radius:.5em;
  
  object-fit: cover;
  mix-blend-mode: screen;
  opacity:.7;
}


/* .case-study-teaser-media::after{
  display:block;
  position:absolute;
   top:-5px;
  left:5px;
  z-index:-100;
  content:" ";
  width:100%;
  height: 100%;
  border-radius:2em;
  opacity:.5;
  border:1px solid pink;
  
}  */

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



</style>
