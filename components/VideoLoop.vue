<template>
    <div class="video-player-frame"> 
        <div class="headline-holder">
          <h3 class="headline">
            Audience Interactivity &amp;&nbsp;Participation            
          </h3>         
        </div>
        <svg class="homepage-intro-story-border" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>
        <video ref="js-loop-player" class="video-player" :class="{is_loading:loading}" loop muted playsinline autoplay  
          @canplay="canPlay"
          @error="mev($event,'error')"
        >
          <source :src="src" type="video/mp4">
      </video>
    <!-- loop version {{version}} -->
    </div>
</template>

<script>
export default{

    name:'VideoLoop',
    props:{
      src:String,
    },
    data(){
        return{
          loading:true,
          version:'100121.02',          
        }
    },
    mounted(){  

        console.log('version', this.version)

        // let options = {
        //     rootMargin: '0px',
        //     threshold: [...Array(30).keys()].map(x => x / 29),
        // }

        // this.observer = new IntersectionObserver((entries) => {
        // entries.forEach(entry => {  
        //     if(this.loading){
        //       return;
        //     }  
        //     if(entry.isIntersecting){
        //         if(entry.intersectionRatio > .5){
        //             this.play();
        //             console.log('video player play')
        //         }
        //     }
        //     else{
        //         this.pause();
        //         console.log('video player pause')
        //     }
        //     });

        // },options);
        // this.observer.observe(this.$refs['js-loop-player']);
    },
    beforeDestroy(){
        // this.observer.unobserve(this.$refs['js-loop-player']);
    },
  methods:{
    mev(e,d){
      console.log('media event:',d,e)
    },
    canPlay(e){
      this.loading = false;
      console.log('canplay');
    },
    play(){
      // this.$refs['js-loop-player'].play();
      
    },
    pause(){
      // this.$refs['js-loop-player'].pause();
    },
  }
  
   
   
}
</script>


<style scoped>
/* The animation code */
@keyframes fadein{
  from{ opacity:0}
  to{ opacity:1}
  
}
.headline{
    color:rgba(255,255,255,.9);
    text-shadow:2px 2px 30px rgba(0,0,0,.75);

    padding:0;
    font-size:var(--fs-headline); letter-spacing:-.04em;
    /* font-weight:500; */
    line-height:1;
    /* transition:all .5s; */
    font-family: var(--ff-oswald);
    text-transform: uppercase;
    text-align: center;
    font-weight: 150;
    z-index:10000;
    opacity:0;
    user-select: none;
    animation-name:fadein;
    animation-duration:.5s;
    animation-delay:1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    
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
  height: 80vh;
  margin-top:10vh;
  
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
  filter:saturate(.8);
  mix-blend-mode: screen;
  object-fit:cover;

  opacity:.75;
  transition:opacity .25s ease-in-out; 
  /* not sure why chrome needs it all of sudden! 1.02.2021 */
  overflow:hidden;

}
.video-player.is_loading{
  opacity:0;
   
}



.homepage-intro-story-border{

  
  width:calc(100% - 320px);
  height:calc(100% - 80px);

  transform:translate(160px, 40px);
  transition:all .75s;


   

  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 1 / 3;
  grid-row: 1 / 3;

  border-radius:1.1em;




  
}

 @media (max-width: 961px) {

.homepage-intro-story-border{

  
  width:calc(100% - 40px);
  height:calc(100% - 40px);

  transform:translate(20px, 20px);
  }
}
</style>