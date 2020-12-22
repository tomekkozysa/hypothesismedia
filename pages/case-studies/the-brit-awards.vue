<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      observer:null,
      main_image:'brit_awards_wide.jpg',
      vimeo_id:491975018,
      title:"The Brit Awards",
      channel:"ITV",
      blurb:"Live Social Voting",
      stats:"Over 5 million social votes cast, 41,000 tweets per second ",
      text:{},
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
                                            
                        <p class="cs-single-copy">The Brit Awards is one of the biggest live international awards events across the music industry, we were commissioned to work with the show producers BPI and broadcaster ITV to introduce a global first live social vote on twitter for Best British Video.</p>
                        <p class="cs-single-copy">Whist this was initiated from previously running a successful social vote on ‘The Mobo Awards’ on ITV earlier in the year, this was a huge challenge in terms of bringing a new voting mechanic to a show that historically had never had a public vote element for one of their awards categories previously. </p>
                        <p class="cs-single-copy">This vote needed to deal with unprecedented numbers of concurrent engagements on twitter making sure that votes were capped to one social vote from each social profile for each nominated artist as well as to provide a bulletproof audit trail, so the social voting could stand up against any similar telephony vote. The social vote helped to contribute to the massive 7.8 total international tweets that the show received on the night. </p>





                </div>
            
        </article>
</section>
  
</template>

