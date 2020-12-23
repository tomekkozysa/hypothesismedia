<template>


  

    <ul class="homepage-content-list ">

      <li class="homepage-content-list-item js-toggle">
        <Expander class="homepage-content-list-item-content">
          <template v-slot:header>
            Live Audience & Viewer Engagement
          </template>

          <div class="expander-split">
            <div class="expander-image-frame image-mosaic">
               <img src="/img/mosaic.jpg" class="expander-image " />
            </div>
            <div class="expander-copy">
                Hypothesis Media delivers executive editorial production services & management of all live audience engagement elements - real time social media integration, viewer voting, audience participation, live playalong & virtual audiences having worked on some of the biggest shows such as The Brit Awards, The Voice UK, Big Brother, Got To Dance, Million Pound Drop & Crufts. 
            </div>
          </div>

        </Expander>
      </li>

      <li class="homepage-content-list-item js-toggle">
        <Expander class="homepage-content-list-item-content">
           <template v-slot:header>
                Viewer Engagement Strategy & Ideation
          </template>


           <div class="expander-split">
            <div class="expander-image-frame image-brits">
               <img src="/img/viewer-engagement.jpg" class="expander-image" />
            </div>
            <div class="expander-copy">
                <p>Using our extensive expertise and understanding of live audience behaviours we work to enhance existing shows and titles to increase audience interaction with complementary editorial engagement enhancements. </p>
                <p>Introducing new interactive features and mechanics giving live shows and events a unique interactive enhancement angle. </p>
                <p>Having worked on new breakout interactive formats across broadcast entertainment, sport, news, music & live events as well as enhancing existing well known titles we are expertly placed to supersize your production with engagement and interactive features that are resonating innovations, not gimmicks. </p>
            </div>
          </div>


           


                
        </Expander>
      </li>

      <li class="homepage-content-list-item js-toggle">
        <Expander class="homepage-content-list-item-content">
          <template v-slot:header>
              Market Direction & Innovation Partnerships  
          </template>

          <div class="expander-split">
            <div class="expander-image-frame image-voice">
               <img src="/img/thevoice.jpg" class="expander-image" />
            </div>
            <div class="expander-copy">
                <p>Working with our vast network of global creative technology partners across the industry we look to endorse best of breed innovative technologies to move the live broadcast sector forward.</p>
                <p>Advising on optimum interactive and visual solutions to deliver standout interactivity within live TV shows and events. </p>
                <p>Hypothesis Media provides the important 'glue' between the technology and creative. </p>
            </div>
          </div>         
          
        </Expander>
      </li>

    </ul>

</template>
<script>
import Expander from '~/components/Expander.vue';

export default{
    name:'WhatWeDo',

}
</script>
<style>






.homepage-story-slide-headline{
  padding:0;
  margin:10vh 0 0;
  font-size:var(--fs-headline); letter-spacing:-.04em;
  font-weight:500;
  line-height:1.1;
  /* animation: anim_in .75s; */
  
  z-index:1000000;
}





.homepage-content-list{
  list-style:none;
  margin-top:4em;
  padding:0;
}


.homepage-content-list-item{
  /* padding:2vh 0; */
  font-size:var(--fs-list-item);
  letter-spacing: -.02em;
  border-bottom:1px solid rgba(255,255,255,.2);
  line-height: 1;
  
}
.homepage-content-list-item-content:active,
.homepage-content-list-item-content{
  padding:2vh 0;
  /* background:rgba(70,84,163,0); */
  transition: background .5s;  
  /* mix-blend-mode: screen; */
}
/* .homepage-content-list-item-content:hover{
      background:rgba(70,84,163,.5);
} */
/* .homepage-content-list-item:last-child{ border:none; } */

.homepage-content-list-item{
/*   transform:translateX(80px); */
/*   opacity:0; */
/*   transition:all .5s ease-in-out ; */
}

.homepage-content-list-item.is_active{
/*   transform:translateX(0px); */
/*   opacity:1; */
}



/* 
.who-we-are-copy{
  columns: 2;
  column-gap: var(--u-column-padding);
}
 */




.homepage-content-list-item:nth-child(even) .expander-split{
    
  flex-direction: row-reverse;
}


.expander-split{
    display:flex;   
    margin-top:1em;


}
.expander-copy{
    width:60%;
    font-size: var(--fs-body);
    padding: 0 0 0 4em;
    line-height: 1.2;
}
.expander-copy p:not(:first-child){
    margin-top:1em;
}
.expander-image{
    max-width:100%;
    width:100%;
    height:100%;
    object-fit:cover;
}

.expander-image-frame{
    width:40%;
    max-height:60vh;
}
.expander-image-frame.image-voice{
    max-height:300px;
}

.homepage-content-list-item:nth-child(even) .expander-copy{
    padding: 0 4em 0 0;
}


 @media (max-width: 961px) {

.expander-image-frame{
  width:100%;
}
.homepage-content-list-item:nth-child(n) .expander-copy{
  width:100%;
  padding:1em 0;
}


.homepage-content-list-item:nth-child(n) .expander-split{
flex-direction: column;   

 }
 }



</style>
