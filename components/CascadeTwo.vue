<template>
    <div>
        <!-- <h3 class="homepage-story-slide-headline">Case studies</h3> -->







          <NuxtLink class="case-study-teaser-link" to="/case-studies/the-brit-awards">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/brit_awards.jpg" class="case-study-teaser-img">
              </div>
               <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >
          <p class="case-study-data"><span class="-mod-large">Over 5 million</span> social votes cast <span class="-mod-large">41,000</span> tweets per second</p>
          <p class="case-study-blurb"> Live Social Voting </p>
          <h3 class="case-study-headline">The Brit Awards</h3>
          </div>
        </div>

              </NuxtLink>



<NuxtLink class="case-study-teaser-link" to="/case-studies/the-million-pound-drop">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/million_pound_drop.jpg" class="case-study-teaser-img">
              </div>
              <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <p class="case-study-data"><span class="-mod-large">12.5%</span> of all live TV audience played along </p>
          <p class="case-study-blurb"> Live Audience Play Along</p>
          <h3 class="case-study-headline">The Million Pound Drop</h3>
          </div>
        </div>

</NuxtLink>
<NuxtLink class="case-study-teaser-link" to="/case-studies/crufts">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/cruftsstudio.jpg" class="case-study-teaser-img">
              </div>
              <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <p class="case-study-data"><span class="-mod-large">Most socially engaged show</span> across whole of Channel 4 each consecutive year in March</p>
          <p class="case-study-blurb"> Live Broadcast Audience Engagement</p>
          <h3 class="case-study-headline">Crufts</h3>
          </div>
        </div>
</NuxtLink>
<NuxtLink class="case-study-teaser-link" to="/case-studies/the-voice">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/thevoice.jpg" class="case-study-teaser-img">
              </div>
               <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <p class="case-study-data"><span class="-mod-large">Global first</span> live social mosaic on TV</p>
          <p class="case-study-blurb"> Interactive Concept Ideation</p>
          <h3 class="case-study-headline">The Voice</h3>
          </div>
        </div>
</NuxtLink>
<NuxtLink class="case-study-teaser-link" to="/case-studies/ed-sheeran-dynamic-ad">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/edsheeranx.jpg" class="case-study-teaser-img">
              </div>
               <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <p class="case-study-data"><span class="-mod-large">5%</span> of all UK TV viewing public watching </p>
          <p class="case-study-blurb">Live Dynamic Broadcast Advertising</p>
          <h3 class="case-study-headline">Ed Sheeran 'X' </h3>
          </div>
        </div>
</NuxtLink>
<NuxtLink class="case-study-teaser-link" to="/case-studies/years-and-years">
<div class="case-study-teaser">
            <div class="case-study-teaser-media">
              <div class="case-study-teaser-img-frame">
              <img src="/img/v3/years_years.jpg" class="case-study-teaser-img">
              </div>
               <svg class="faux-border" width="640" height="480" >
                <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
                </svg>
            </div>
            <div class="case-study-teaser-caption" >

          <p class="case-study-data">More viewers watching this ad than the TV show around it, <span class="-mod-large">14,000 tweets</span> received in <span class="-mod-large">4 minutes</span></p>
          <p class="case-study-blurb"> Live Gamification TV Advert</p>
          <h3 class="case-study-headline">Years & Years - 'Shine'</h3>
          </div>
        </div>
</NuxtLink>


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
   padding:1em 0;
   margin:4em 0;
   /* scroll-snap-align: start; */
   /* margin:5em 0; */
   display:flex;
   min-height: 30vh;
    display: flex;
    align-items: center; 
    cursor:pointer;
    
}
.case-study-teaser-link{
  text-decoration:none;
  color:inherit;
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



.case-study-teaser-link:nth-child(odd) .case-study-teaser{
    flex-direction: row-reverse;
}


.case-study-headline{
  font-size:var(--fs-cs-headline);
  font-weight:500;
  line-height: 1;
  letter-spacing:-.03em;
  margin:0;
  padding:0;
}
.case-study-blurb{
  font-size:var(--fs-cs-blurb);
  font-weight:500;
  letter-spacing:-.02em;
  margin:.5em 0 0;
  padding:0;
}
.case-study-data{
    margin:0;
    padding:0;
    margin-top:1em;
    font-weight:500;
    letter-spacing:-.02em;
    line-height:1;
    font-style:italic;
    font-size:var(--fs-cs-data);
    font-size:var(--fs-cs-blurb);
    
    margin-bottom:.5em;
    font-style:normal;  
}
.-mod-large{
  font-size:var(--fs-cs-data);
  display:block;
}





.case-study-teaser-caption{
  font-size:var(--fs-body);
  padding:0 0 0 2em;
  width:50%;
  align-self: center;
  transition:all .75s;
  will-change: transform;
}

.case-study-teaser-link:nth-child(odd) .case-study-teaser-caption{
  padding:0 2em 0 0;

}

.faux-border{
  /* display:none; */
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

.case-study-teaser-link:nth-child(even) .faux-border{
    
    stroke-dashoffset: -200%;
}



.case-study-teaser-link:hover .faux-border{
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
  will-change: transform;

}
.case-study-teaser-link:hover .case-study-teaser-caption{
transform: translate(5px, 0);  
}

.case-study-teaser-link:nth-child(even):hover .case-study-teaser-caption{
transform: translate(-5px, 0);  
}
.case-study-teaser-link:nth-child(even):hover .case-study-teaser-media{
transform: translate(5px, 0);  
}

.case-study-teaser-link:hover .case-study-teaser-media{
    /* transform: rotate3d(1, 1, 0, 25deg); */
    transform: translate(-5px, 5px);
}


.case-study-teaser-img-frame{
    /* border-radius:100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    border-radius:var(--u-border-radius);
    
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
  
  border-radius:var(--u-border-radius);
  
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
