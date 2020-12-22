<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      
      title:"Crufts",
      channel:"Channel 4",
      blurb:"Live Broadcast Audience Engagement ",
      main_image:'crufts.jpg',
      vimeo_id:493725971,
      stats:"Most socially engaged show across whole of Channel 4 each consecutive year in March.",
      text:{},
      observer:null,
    }
  },  
}
</script>

<template>
 
    <section class="cs-single slide-snap">
        <header class="cs-single-header">

          <h2 class="cs-single-headline">{{title}}</h2>
          <h2 class="cs-single-channel">{{channel}}</h2>
          <h3 class="cs-single-blurb">{{blurb}} </h3>
        
        </header>
        
        <article class="cs-split cs-single-content">

                <div class="cs-split-column">
                        
                        <div style="padding:56.25% 0 0 0;position:relative;">
                          <iframe :src="'https://player.vimeo.com/video/'+vimeo_id+'?title=0&byline=0&portrait=0'" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                          </div><script src="https://player.vimeo.com/api/player.js"></script>

                        <p class="cs-single-data">{{stats}}</p>

                </div>
                <div class="cs-split-column">
                    
                    <img :src="'/img/cs/'+main_image" class="cs-single-main-image" />

                    <p class="cs-single-copy">Hypothesis Media have been commissioned for the past 5 years to ideate and manage the live audience engagement for the biggest international dogs show, Crufts. Broadcast on Channel 4 and working with the production company, broadcaster and interactive technology partners we have been regularly tasked to improve on each of the previous year’s shows with more ambitious interactive executions that drive the social narrative around #Crufts during the live Channel 4 shows.</p>
                    <p class="cs-single-copy">The execution currently features a dynamic media wall that shows the best video and images from home viewers with their favourite canines as well as a real time predictor poll on the final day where audiences get to choose who will win ‘Best in Show’.</p>
                    <p class="cs-single-copy">Hypothesis Media ensure that the full end to end process from tweet to television is planned and managed fully ensuring that the editorial content is enhanced each year by the social engagement that appeals to the vast amount of Crufts fans and viewers.</p>


                </div>
            
        </article>
</section>
  
</template>

