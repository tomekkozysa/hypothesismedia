<template>
    
     <div class="video-player-frame">
        <div class="headline-holder">
        <h3 class="headline">
        Audience Interactivity &amp;&nbsp;Participation
        </h3> 
        <p class="playshowreel"> 
        (play showreel)  
        </p>
        </div>
       <svg class="homepage-intro-story-border" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>


      <video ref="js-video-player" class="video-player" loop muted autoplay>
        <source :src="src" type="video/mp4">

      </video>
</div>

</template>

<script>
export default{

    name:'video',
    data(){
        return{
          src:'https://hypothesismedia.s3.eu-west-2.amazonaws.com/HYPOTHESIS_MEDIA_FINAL_CUT_LOOP.mp4',
        }
    },
    mounted(){
      let options = {
          rootMargin: '0px',
          threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
      }

      this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {    
          if(entry.isIntersecting){
              if(entry.intersectionRatio > .5){
                  this.play();
              }
          }
          else{
              this.pause();
          }
          });
  
      },options);

      this.observer.observe(this.$refs['js-video-player']);
  },
  methods:{
    play(){
      this.$refs['js-video-player'].play();
      
    },
    pause(){
      this.$refs['js-video-player'].pause();
    },
  }
  
   
   
}
</script>


<style scoped>
.playshowreel{
  font-size:2.4rem;
}
.headline{
      color:rgba(255,255,255,.9);
    text-shadow:2px 2px 30px rgba(0,0,0,.75);

    padding:0;
    font-size:var(--fs-headline); letter-spacing:-.04em;
    /* font-weight:500; */
    line-height:1;
    transition:all .5s;
    font-family: Oswald;
    text-transform: uppercase;
    text-align: center;
    font-weight: 150;
    z-index:10000;
}
.headline-holder{
   grid-column: 1 / 3;
    grid-row: 1 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.video-player-frame{
  background:var(--c-dark);
  width:100%;
  min-height: 80vh;
  /* border:1px solid red; */
  /* height:100%; */


  display: grid;
  grid-template-columns: 2;
  gap: 10px;
  grid-template-rows: 2;



}
.video-player{

   grid-column: 1 / 3;
    grid-row: 1 / 3;



  width:100%;
  height:100%;
  outline:none;
  /* filter:blur(5px); */
  mix-blend-mode: screen;
  opacity:.25;
  object-fit:cover;

}



.homepage-intro-story-border{

  
  width:calc(100% - 320px);
  height:calc(100% - 80px);

  transform:translate(160px, 40px);
  transition:all .75s;


    /* stroke-dasharray: var(--story-border-length) var(--story-border-space); */
  /* stroke-dashoffset: var(--story-border-offset); */
  

  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 1 / 3;
  grid-row: 1 / 3;

  border-radius:1.1em;

  
}





</style>
