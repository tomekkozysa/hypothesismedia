<template>
 
    <section class="cs-single slide-snap">
        <header class="cs-single-header">
        <h2 class="cs-single-headline">The Brit Awards</h2>
        <h3 class="cs-single-blurb">Live Social Voting </h3>
        
        </header>
        
        <article class="cs-split cs-single-content">

                <div class="cs-split-column">

                        <iframe class="cs-single-video" src="https://player.vimeo.com/video/67550942" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <p class="cs-single-data">Over 5 million social votes cast, 41,000 tweets per second </p>

                </div>
                <div class="cs-split-column">
                    
                    <img src="/img/one_direction_brits.jpg" class="cs-single-main-image" />
                    

                        <p class="cs-single-copy">Using our extensive expertise and understanding of live audience behaviours we work to enhance existing shows and titles to increase audience interaction with complementary editorial engagement enhancements. </p>
                        <p class="cs-single-copy">Introducing new interactive features and mechanics giving live shows and events a unique interactive enhancement angle. </p>
                        <p class="cs-single-copy">Having worked on new breakout interactive formats across broadcast entertainment, sport, news, music & live events as well as enhancing existing well known titles we are expertly placed to supersize your production with engagement and interactive features that are resonating innovations, not gimmicks. </p>



                </div>
            
        </article> 

        <hr class="linebreaker"/>




    </section>
  
</template>

<script>





export default {
   scrollToTop: true,
  components:{
    

  
  },

  

  mounted(){



  },

  data(){
    return{
      observer:null,
    }
  },
  methods:{

      shout:function(what){
        // alert('argh!'+what)
        this.$emit('onSection'+what)
      }
    
  },
}








</script>

<style scoped>

@keyframes slidein {
  from { transform: translateY(40px); opacity:0}
  to   { transform: translateY(0); opacity:1}
}




:root{
    --fs-cs-single : 7.6rem;
 
}

.cs-single-header{
    margin-top:5em;
    animation-duration: .75s;
  animation-name: slidein;

}
.cs-single-content{
    padding:10em 0 30vh;
    animation-duration: .75s;
  animation-name: slidein;
}
.cs-split{
    display:flex;
    flex-direction:row;
}
.cs-split-column:first-child{
    padding-right:var(--u-column-padding);
}
.cs-split-column:last-child{
    padding-left:var(--u-column-padding);
}
.cs-split-column{
    
    width:50%;
    flex:1 1;
}
.cs-single-video{
    width:100%;
    animation-duration: .75s;
  animation-name: slidein;
    /* height:auto; */
    /* height:0; */
    /* height:56.25%; */
}   
.cs-single-main-image{
  animation-duration: .75s;
  animation-name: slidein;
    max-width: 100%;
    width:100%;
    border-radius:var(--u-border-radius);

}
.cs-single-copy{
    margin-top:1em;
    font-size: var(--fs-body);
}
.cs-single-headline{
    

  font-size:var(--fs-headline);
  font-weight:500;

  letter-spacing:-.02em;
  margin:0;
  padding:0;


}


.cs-single-blurb{
  font-size:var(--fs-cs-blurb);
  font-weight:700;
  letter-spacing:-.02em;
  margin:0;
  padding:0;
}
.cs-single-data{
    margin:0;
  padding:0;
    margin-top:1em;
    font-weight:500;
    letter-spacing:-.02em;
    line-height:1;
    font-size:var(--fs-cs-single-data);
    /* font-style:italic; */
  /* font-size:var(--fs-cs-data); */
  
}

</style>



