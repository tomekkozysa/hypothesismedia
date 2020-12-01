<template>
    
     <div class="homepage-intro-story st2" ref="js-clock">
    
    <div class="homepage-intro-story-copy -ic1">
        <h3 class="homepage-intro-story-headline -ic1">
        Broadcast Audience &amp;&nbsp;Fan Engagement
        </h3>      
    </div>

    <div class="homepage-intro-story-copy -ic2">
    <h3 class="homepage-intro-story-headline -ic2">
      Live Executive Viewer Engagement
    </h3>
    </div>

    <div class="homepage-intro-story-copy -ic3">
      <h3 class="homepage-intro-story-headline -ic3">
        Content&nbsp;&amp; Interactivity
    </h3>
    </div>


    <svg class="homepage-intro-story-border -mod2" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none"  />
        </svg>

    <svg class="homepage-intro-story-border" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>


        



 <!-- <img src="/img/tmp3.gif" class="homepage-intro-story-img " /> -->
 
 <img src="/img/eds1.jpg" class="homepage-intro-story-img -ic1" />
 <img src="/img/tmp3.jpg" class="homepage-intro-story-img -ic2" />
 <img src="/img/eds2.jpg" class="homepage-intro-story-img -ic3" />
    <div class="homepage-intro-story-media" >
        
       
    </div>
    </div>



</template>

<script>
export default{

    name:'Slideshow',
    data(){
    return{
      clockInterval:0,
      intervalTime:4000,
      intervalArray:['st1','st2','st3'],
      currentIndex:0,
    }
  },
    mounted(){
        this.clockInterval = setInterval(()=>{

          this.updateClock();

    },this.intervalTime)
    },
    methods:{

        updateClock(){
      
      let current = this.currentIndex+1 > 2 ? 0 :  this.currentIndex+1;

      let c = this.$refs['js-clock'];
      
      let oldclass = this.intervalArray[this.currentIndex]
      let newclass = this.intervalArray[current];

      c.classList.remove(oldclass);
      c.classList.add(newclass);

      this.currentIndex = current;



    }



    }      

}
</script>


<style scoped>

@keyframes slidein {
  from { transform: translateX(-20px); text-shadow: 0 10px 0 cyan;opacity:0}
  to   { transform: translateX(0); text-shadow: 0 0px 0 cyan;opacity:1}
}

.homepage-intro-story{

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  /* grid-auto-rows: minmax(10vh, auto); height: 60vh;*/
  grid-template-rows: repeat(6,10vh);
  
  /* grid-auto-rows: 18vh; */
  border-radius:1em;

  /* width:1100px; */
  max-width:1100px;
  width:100%;
  margin:0 auto;

  background:var(--c-dark);

  /* background:purple; */
}

.homepage-intro-story-headline{
    padding:0;
    margin:10vh 0 0;
    font-size:var(--fs-headline); letter-spacing:-.04em;
    font-weight:500;
    line-height:1.1;
    z-index:1000000;
    transition:all 1.25s;
}


.homepage-intro-story-img{
    /* border:1px solid pink; */
    transition:all .5s ease-in-out;
    mix-blend-mode: screen;
}







.homepage-intro-story-media{
    
  z-index:-1;
  /* opacity:.5;q */
  /* overflow:hidden; */
  
  grid-column: 1 / 7;
  grid-row: 1 / 6;

  /* max-height: 60vh; */
  /* background:red; */
  /* background: transparent; */
  /* background:purple; */
  /* background:var(--c-dark); */
  /* box-shadow: 10px 10px 10px rgba(0,0,0,.2); */
  /* border:1px solid rgba(255,0,0,1); */
  /* background-blend-mode: hard-light; */
  border-radius:1em;
  mix-blend-mode: screen;
  /* mix-blend-mode: screen; */
}

.homepage-intro-story-img{
  
   opacity:1;
   /* z-index:-1; */

  /* transition:opacity 1s ease-in-out; */

  
  /* mix-blend-mode: multiply; */
  
  
    grid-column: 1 / 5;
  grid-row: 1 / 6;

  display: block;
  /* display: none; */
  width:100%;
  height:100%;
  /* height:60vh; */
  object-fit:cover;
  border-radius:1em; 
  
}






/*
    IC1
 */


.st1 .homepage-intro-story-headline.-ic1{

  opacity:1;
  transform:translateX(-.5em);
  transition-delay: .5s;
  text-shadow: 0px 0 0 rgba(200,0,0,.1)

}
.st3 .homepage-intro-story-headline.-ic1{
    opacity:0;
    transform:translateX(-.75em);
    color:rgba(0,200,200,0);
    text-shadow: 10px 0 0 rgba(200,0,0,.8);
}

/* headline 1 out */
.st2 .homepage-intro-story-headline.-ic1{
    opacity:0;
    transform:translateX(.25em);
    transition-delay: 0s;
    /* transition-duration: .25s; */
    color:rgba(0,200,200,0);
    text-shadow: 10px 0 0 rgba(200,0,0,.8);
}


.st1 .homepage-intro-story-img.-ic1{
    transform:translateX(0);
    opacity:1;
}
.st3 .homepage-intro-story-img.-ic1{
    transform:translateX(-1em);
    opacity:0;
}
.st2 .homepage-intro-story-img.-ic1{
    transform:translateX(1em);
    opacity:0;
}



/*
    IC2
 */



.st2 .homepage-intro-story-headline.-ic2{
  opacity:1;
  transform:translateY(.5em);

   text-shadow: 0px 0 0 rgba(200,0,0,.1)

}

.st1 .homepage-intro-story-headline.-ic2{
    opacity:0;
    transform:translateY(0em);
    text-shadow: 0 10px 0 rgba(200,0,0,.8);
     color: rgba(0,200,200,0);
}

.st3 .homepage-intro-story-headline.-ic2{
    opacity:0;
    transform:translateY(1em);
    text-shadow: 0 -10px 0 rgba(200,0,0,.8);
    color: rgba(0,200,200,0);
}





.st2 .homepage-intro-story-img.-ic2{
    transform:translateX(0);
    opacity:1;
    
}
.st1 .homepage-intro-story-img.-ic2{
    transform:translateX(1em);
    opacity:0;
    
}
.st3 .homepage-intro-story-img.-ic2{
    transform:translateX(1em);
    opacity:0;
    
}



/*
    IC3
 */



.st3 .homepage-intro-story-headline.-ic3{
  opacity:1;
  transform:translateY(0px);
  text-shadow: 0px 0 0 rgba(0,200,100,.1)
}

.st2 .homepage-intro-story-headline.-ic3{
    opacity:0;
    transform:translateY(.5em);
    text-shadow: 0 -10px 0 rgba(0,200,200,.8);
    color: rgba(200,0,0,0);
}

.st1 .homepage-intro-story-headline.-ic3{
    opacity:0;
    transform:translateY(-.5em);
    text-shadow: 0 10px 0 rgba(0,200,200,.8);
    color: rgba(200,0,0,0);
    
}



.st3 .homepage-intro-story-img.-ic3{
    transform:translateY(0);
    opacity:1;
}
.st2 .homepage-intro-story-img.-ic3{
    transform:translateY(-1em);
    opacity:0;
}
.st1 .homepage-intro-story-img.-ic3{
    transform:translateY(1em);
    opacity:0;
}





/* 

    GRID PLACEMENT AND TYPE SETTINGS
 
 
 */





.homepage-intro-story-copy.-ic1{
  grid-column: 1 / 7;
  grid-row: 3/7;
  align-self: end; 
  text-align: right;
  /* padding:2em; */
  
}


.homepage-intro-story-copy.-ic2{
    grid-column: 1/3;
    grid-row: 1/3;
    align-self: start;
}

.homepage-intro-story-copy.-ic3{
    grid-column: 3 / 7;
    grid-row: 2/3;
    align-self: end;
    text-align: right;
    /* border:1px solid red; */
}





.homepage-intro-story-img.-ic1{
    grid-column: 1 / 5;
    grid-row: 1 / 5;
}
.homepage-intro-story-img.-ic2{
    grid-column: 3 / 7;
    grid-row: 1 / 6;
}









.st1{
    
    --story-border-space:90vw;  
    --story-border-length: calc(60vw + 60vh);
    --story-border-offset:0;

    --story-border-space:140%; 
    --story-border-length: 165%;
    

}
.st2{
     --story-border-space:85vw;  
    --story-border-length: calc(120vw + 60vh);
    --story-border-offset:0;

     
    --story-border-length: 290%;
    --story-border-space:70%; 

    /* --story-border-space: 1200px; */
    /* --story-border-offset: -600px; */
}

.st3{

       --story-border-space:85vw;  
    --story-border-length: calc(120vw + 60vh);
    --story-border-offset: calc(80vw + 60vh);


        --story-border-length: 210%;
    --story-border-space:70%; 
--story-border-offset:100%;
    
    /* --story-border-space: 1200px; */
    /* --story-border-offset: 1800px; */
}





.homepage-intro-story-border{

  z-index:500;

  width:100%;
  height:100%;
  /* height:60vh; */
  transition:all .75s;

  stroke-dasharray: var(--story-border-length) var(--story-border-space);
  stroke-dashoffset: var(--story-border-offset);
  transform: translate(-5px, -5px);
  
  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 1 / 7;
  grid-row: 1 / 6;

  border-radius:1.1em;


  
}

.homepage-intro-story-border.-mod2{
  /* transform:translate(0, 0); */
  stroke:white;
  opacity:.4;
  stroke-width: calc (2 * var(--story-border-sw));
  transition-delay: .25s;
  transition:all 1.25s ease-out;
  
}

</style>
