<script>
export default {
  scrollToTop: true,
  
  data(){
    return{
      title:"Ant & Dec's Saturday Night Takeaway",
      channel:"",
      blurb:"Virtual Interactive Audience",
      main_image:'virtual-audience-wide-case-study.jpg',
      vimeo_id:516306634,
      stats:"Over 320 families live on screen each week with half a million individual virtual audience ticket requests across the series",
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

                        <p class="cs-single-copy">When Covid-19 forced us all in to lockdown back in March 2020 no-one could predict the extent of how the virus would affect all of our lives at every given angle. As someone that has worked in the live broadcast industry for over 20 years it was inevitable that live shows and productions would be affected drastically - with immediate effect.</p>
                        <p class="cs-single-copy">One of the common denominators amongst those live shows is audiences and contributors. With the introduction of strict social distancing measures and banning of mass gatherings this instantly forced programme makers to consider how their shows could continue, if at all, having to produce them without any live audience, a crucial thriving component for many live shows success. A live show with the extraction of a physical audience would be a huge technical and editorial challenge to compensate. Would it be possible? How could those shows that are heavily reliant on studio audiences continue?</p>
                        <p class="cs-single-copy">At Hypothesis Media given our past successes with live broadcast audience engagement, interactive participation and TV audience centric innovations we thought this is a problem we could help solve with our extensive relationships with best of breed broadcast technology partners. During the early months of the pandemic, Broadcast Technology and Live Graphics experts Kinetic Pixel started to conceptualise and deliver Virtual Interactive Audience proof of concepts using Zoom and the Quicklink video calling platform. These demos caught our attention at Hypothesis Media and opened the opportunity to collaborate as we'd done in the past on other projects.</p>
                        <p class="cs-single-copy">Ultimately Kinetic Pixel settled upon leveraging The Famous Group's 'Virtual Seat' platform, adding their own extensive live interaction and graphics expertise to create a unique and robust broadcast-ready Virtual Interactive Audience solution that would set out to resonate and inspire the broadcast production industry here in Europe and beyond.</p>
                        <p class="cs-single-copy">Crucially, it was clear early on that although The Famous Group's platform suited the needs of Sports Fans in their home market, our solution needed to be a complete end to end broadcast audience and contributor experience, capitalising on the mass adjustment of using video calling in people's everyday lives.  It would therefore need to be more than a solution just for the pandemic.t needs to be flexible to the point that it could continue to be used post-Covid by showcasing that a Virtual Audience doesn't have to look like "Zoom on TV'. It had to be a far superior and richer solution that enhanced, not diminished, production values and programme content and as such aim to deliver the following features:</p>
                            <ul class="cs-single-list">
                                <li>A full end to end, ticket to seat, digital replica of a live audience/fan broadcast experience</li>
                                <li>Accommodate VIP’s, Contributors & Guests as part of the virtual experience and solution</li>
                                <li>Minimal Video latency of much less than a second end to end </li>
                                <li>Slick and customisable on air motion graphics and animations</li>
                                <li>Exciting interactive gameplay options so virtual audience members can be pushed questions to vote and interact in real time with the show content to provide instant real time audience editorial </li>
                                <li>Full two way video/audio interaction with the ability to select and highlight any participant instantly for one on one, or one to many conversation live in studio</li>
                                <li>A full scalable audience moderation process that slots into existing production gallery workflows</li>
                                <li>Scalable ticketing so specific audience members, contributors or VIP's can be pre-allocated certain seats in the virtual audience to make pre-production simple and effective</li>
                                <li>Commercialisation options within the audience journey/experience to allow for further sponsorship/monetisation considerations.</li>
                                <li>An exciting end to end 'experience' for the audience member or contributor - the further away from a corporate video calling solution the better!</li>
                            </ul>
                        <p class="cs-single-copy">The future for the Virtual Interactive Audience solution brings together the best of breed expertise through combining Hypothesis Media's Audience engagement and Participation experience and Kinetic Pixel's Graphics and Technology Solutions to change the way live audiences and contributors can be part of a live TV show or event, forever.Excitingly, ITV Studios here in the UK adopted the solution for their long running prime time Saturday night entertainment show 'Ant & Dec's Saturday Night Takeaway' delivering a world first on broadcast television - 320 individual families, which not only brings over 1000 audience members live into the studio but also enables them to interact through live voting, gameplay and one-to-one video chat with the studio. This helped to give the series launch a fantastic 8.1m viewers making it the second most watched show on ITV for the entire year outside news &amp; sport.</p>








                </div>
            
        </article>
</section>
  
</template>

