<template>


  

    <ul class="homepage-content-list ">

      <li class="homepage-content-list-item">
          

          <div class="expander-split">
            <div class="expander-image">
               <img src="/img/mosaic.jpg" class="" />
            </div>
            <div class="expander-copy">
                 <h2 class="homepage-content-list-item-headline">
            Live Audience & Viewer Engagement
           </h2>
            <p>
                Hypothesis Media delivers executive editorial production services & management of all live audience engagement elements - real time social media integration, viewer voting, audience participation, live playalong & virtual audiences having worked on some of the biggest shows such as The Brit Awards, The Voice UK, Big Brother, Got To Dance, Million Pound Drop & Crufts. 
            </p>
            </div>
          </div>

      
      </li>

      <li class="homepage-content-list-item">
       
            



           <div class="expander-split">
            <div class="expander-image">
               <img src="/img/mrbrit.jpg" class=" " />
            </div>
            <div class="expander-copy">

                 <h2 class="homepage-content-list-item-headline">
                Viewer Engagement Strategy & Ideation
          
          </h2>
          
                <p>Using our extensive expertise and understanding of live audience behaviours we work to enhance existing shows and titles to increase audience interaction with complementary editorial engagement enhancements. </p>
                <p>Introducing new interactive features and mechanics giving live shows and events a unique interactive enhancement angle. </p>
                <p>Having worked on new breakout interactive formats across broadcast entertainment, sport, news, music & live events as well as enhancing existing well known titles we are expertly placed to supersize your production with engagement and interactive features that are resonating innovations, not gimmicks. </p>
            </div>
          </div>


           

      </li>

      <li class="homepage-content-list-item">
          

          <div class="expander-split">
            <div class="expander-image">
               <img src="/img/thevoice.jpg" class=" " />
            </div>
            <div class="expander-copy">

                <h2 class="homepage-content-list-item-headline">
              Market Direction & Innovation Partnerships  
          </h2>
                <p>Working with our vast network of global creative technology partners across the industry we look to endorse best of breed innovative technologies to move the live broadcast sector forward.</p>
                <p>Advising on optimum interactive and visual solutions to deliver standout interactivity within live TV shows and events. </p>
                <p>Hypothesis Media provides the important 'glue' between the technology and creative. </p>
            </div>
          </div>


           
          
        
      </li>

    </ul>

</template>
<script>
import Expander from '~/components/Expander.vue';

export default{
    name:'WhatWeDo',
    data(){
        return{
            is_expanded:false,           
        }
        
    },
    mounted(){
    //    let z = this.$refs['zone'];

    //    z.addEventListener('click',this.expand);
       
    },

    methods:{
       
       expand:function(e){
            let z = this.$refs['zone'];
            z.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  
  setTimeout(()=>{
          this.is_expanded = !this.is_expanded;
  },350)
        
       }
        
    }

}
</script>
<style scoped>




.homepage-content-list-item-headline{
  --fs-headline-small:5.2rem;
  padding:0;
  
  /* margin:10vh 0 0; */
  font-size:var(--fs-headline-small); letter-spacing:-.03em;
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
  padding:10vh 0;
  /* font-size:var(--fs-list-item); */
  letter-spacing: -.02em;
  /* border-bottom:1px solid rgba(255,255,255,.2); */
  border:0;
  
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

at 1100px story width, border length is 3125px


CORNERS:


LB 
    --story-border-space: 870px;
    --story-border-offset: 270px;

RB


--story-border-space: 1200px;
--story-border-offset: 600px  
TL

--story-border-space: 420px;
--story-border-offset: -110px;

TR


--story-border-space: 660px;
--story-border-offset: 1800px;

*/




.who-we-are-copy{
  columns: 2;
  column-gap: 2em;
}






.homepage-content-list-item:nth-child(odd) .expander-split{
    
  flex-direction: row-reverse;
}


.expander-split{
    display:flex;   


}
.expander-copy{
    width:50%;
    font-size: var(--fs-body);
    padding: 0 0 0 4em;
}
.expander-copy p{
    margin-top:1em;
}
.expander-image img{
    max-width:100%;
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:10px;;
}
.expander-image{
    width:50%;
    /* height:60vh; */
}

.homepage-content-list-item:nth-child(odd) .expander-copy{
    padding: 0 4em 0 0;
}





</style>
