<template>
    <div class="video-player-frame"> 
        <video ref="js-video-player" :class="{is_loading:loading}" class="video-player" 
        controls playsinline autoplay
        @ended = "ended"
        @canplay="canPlay">
            <source :src="src" type="video/mp4">
        </video>

        <!--   -->
    </div>
</template>

<script>
    export default{
    name:'showreel',
    props:{
        src:String
    },
    data(){
        return{
            loading:true,
            
        }
    },
    mounted(){

        let options = {
            rootMargin: '0px',
            threshold: [...Array(30).keys()].map(x => x / 29),
        }

        this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {    
            if(entry.isIntersecting){
                if(entry.intersectionRatio > .5){
                    // this.play();
                }
            }
            else{
                this.pause();
            }
            });

        },options);
        this.observer.observe(this.$refs['js-video-player']);
    },
    beforeDestroy(){
        this.observer.unobserve(this.$refs['js-video-player']);
    },
    methods:{
        ended(e){
            this.$emit('reelEnded');
        },
      canPlay(e){
        this.loading = false;
        this.play();
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

    /* height:100%;
    width:100%;
    object-fit:contain;
     */
    height:auto;
    max-height:80vh;

    /* width:100%; */
    max-width:100%;
    


    outline:none;
    filter:saturate(.8);

    grid-column: 1 / 3;
    grid-row: 1 / 3;

    opacity:1;

    justify-self:center;
    align-self:center;
    transition:opacity 1.5s ease-in-out .5s;
}

.video-player.is_loading{
  opacity:0;
}

.video-player-frame{
 
    display: grid;
  grid-template-columns: 2;
  gap: 10px;
  grid-template-rows: 2;

    max-width:var(--l-max-w);
    height: 80vh;
    margin:10vh auto 0;
  
  

}






</style>
