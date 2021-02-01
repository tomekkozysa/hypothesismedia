<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      title:"Years & Years",
      channel:"Channel 4",
      blurb:"Live Dynamic Broadcast Advertising",
      main_image:'years-years.jpg',
      vimeo_id:133337331,
      stats:"More viewers watching this ad than the TV show around it, 14,000 tweets received in 4 minutes",
      text:{},
      observer:null,
    }
  },  
  head() {
    return {
      title: this.title + ' | ',
    }
  }
}
</script>

<template>
 
    <section class="cs-single">
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


                      <p class="cs-single-copy">With Channel 4’s desire to build on the success of the Ed Sheeran ‘X’ reactive ad, we were tasked again to collaborate with broadcaster, agency and technology partners to live project manage the success of this world first gamification ad with the band ‘Years & Years’ and their new single ‘Shine’. </p>
                      <p class="cs-single-copy">Audiences were asked to tweet using the hashtags #ChooseDark, #ChooseLight or #ChooseShadow, where each hashtag corresponded to a different version of the music video. Every 30 seconds the hashtag which had received the most votes was then displayed on air. The audience effectively creating their own version of the video on air. A huge payoff for audiences interacting with the ad.</p>
                      <p class="cs-single-copy">This resulted in more viewers watching this innovative ad than hit comedy programme ‘8 Out Of 10 Cats’ that was being aired around it. </p>



                </div>
            
        </article>
</section>
  
</template>

