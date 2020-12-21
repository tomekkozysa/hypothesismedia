<template>
    
     <div class="video-player-frame"> 
        

        <!-- <div class="playshowreel"> 
        <p class="playshowreel-button">close showreel</p>
        </div> -->

      <video ref="js-video-player" :class="{is_loading:loading}" class="video-player" controls loop  @canplay="canPlay">
        <source :src="src" type="video/mp4">

      </video>
</div>

</template>

<script>
export default{

    name:'video',
    data(){
        return{
            loading:true,
          src:'https://hypothesismedia.s3.eu-west-2.amazonaws.com/HYPOTHESIS_MEDIA_FINAL_CUT_003.mp4',
        }
    },
    mounted(){

        console.log('MOUNTEDDDDDDDD')
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
      canPlay(e){
      this.loading = false;
      console.log('canplay')
    },
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

.video-player{
    width:100%;
    /* height:100%; */
    object-fit:contain;
    outline:none;
  filter:saturate(.8);


   grid-column: 1 / 3;
    grid-row: 1 / 3;

  
 opacity:1;
  transition:opacity 1.5s ease-in-out .5s;

}
.video-player.is_loading{
  opacity:0;
   
}

.video-player-frame{


    padding:0 80px;

    

display: grid;
  grid-template-columns: 2;
  gap: 10px;
  grid-template-rows: 2;

    max-width:var(--l-max-w);
  
  


  
  /* mix-blend-mode: screen; */
  /* opacity:.5; */
  /* object-fit:contain; */

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
