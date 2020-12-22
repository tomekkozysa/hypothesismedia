<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      




      title:"Ed Sheeran",
      channel:"E4",
      blurb:"Live Dynamic Broadcast Advertising",
      main_image:'ed_sheeran_dynamic_ad.jpg',
      vimeo_id:493727388,
      stats:"5% of all UK TV viewing public watching",
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


                      <p class="cs-single-copy">With the launch of Ed Sheeran’s album ‘X’ and collaborating with the agency, broadcaster and various technology partners, we worked to incept and deliver a world first in dynamic broadcast advertising. </p>
                      <p class="cs-single-copy">At the start of the hit E4 comedy programme ‘The Big Bang Theory’ Ed Sheeran asked viewers to vote for one of his new songs off his album ‘X’ using dedicated hashtags on twitter. The song with the most votes was then played at the end of the episode taking over the whole of the ad break, a world first for dynamic interactive advertising.</p>
                      <p class="cs-single-copy">A staggering 5% of all viewing public tuned in to partake and watch the dynamic ad which also resulted in Ed Sheeran trending on twitter long after the innovative ad had aired. This resulted in the ad winning Gold for the Media Week Awards that year. </p>


                </div>
            
        </article>
</section>
  
</template>

