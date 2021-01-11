<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      title:"The Voice UK",
      channel:"BBC",
      blurb:"Interactive Concept Ideation",
      main_image:'voicereggie1.jpg',
      vimeo_id:67550942,
      stats:"Global first live social mosaic on TV",
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

                        <p class="cs-single-copy">The Voice UK wanted to capitalise on their vast social media following so Hypothesis Media were commissioned to conceptualise, deliver and manage a new interactive visual component for the live show. This led to the launch of the Social Mosiac which was showcased in the ‘V Room’ within the show, comprising of the social audiences profile pictures who were discussing #TheVoiceUK as the show was live. </p>
                        <p class="cs-single-copy">The Social Mosaic, which also featured audience comments on a dynamic social wall, allowed many fans of the show to feature within a large visualisation of The Voice UK logo which was made up of over 500 social engagers. This rotated on a weekly basis allowing more fans to feature on the mosaic, driving viewer engagement numbers even further increasing social reach of the show itself. </p>

                </div>
            
        </article>
</section>
  
</template>

