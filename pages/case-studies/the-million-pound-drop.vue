<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      observer:null,
      main_image:'mpd.jpg',
      vimeo_id:493725927,
      title:"Million Pound Drop",
      channel:"Channel 4",
      blurb:"Live Audience Play Along",
      stats:"12.5% of all live TV audience played along",
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
                    
                      <p class="cs-single-copy">Working directly with the live broadcast production team and multiple interactive technical partners we delivered and finessed all live interactive play along elements of Channel 4’s Million Pound Drop helping the show rise to the interactive viewer play along success that it became. </p>
                      <p class="cs-single-copy">We delivered live executive production management of the online viewers gameplay stories and selecting appropriate social media comments to be shown or mentioned in the live broadcast. </p>
                      <p class="cs-single-copy">Real time audience engagement was essential to the entertainment factor of this live entertainment show allowing audiences at home to interact with the on screen narrative, with the added pay off that by playing along at home gave audiences the chance of being selected to appear on the show itself as a studio contestant. </p>

                </div>
            
        </article>
</section>
  
</template>

