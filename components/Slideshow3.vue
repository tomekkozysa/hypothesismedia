<template>
    
     <div class="homepage-intro-story st1" ref="js-clock">
    
    <div class="homepage-intro-story-copy -ic1">
        <h3 class="homepage-intro-story-headline -ic1">
        Audience Interactivity&nbsp;&amp; Participation
        </h3>      
    </div>

    <div class="homepage-intro-story-copy -ic2">
    <h3 class="homepage-intro-story-headline -ic2">
      Live Broadcast Innovation
    </h3>
    </div>

    <div class="homepage-intro-story-copy -ic3">
      <h3 class="homepage-intro-story-headline -ic3">
        Viewer&nbsp;&amp;&nbsp;Fan Engagement
    </h3>
    </div>


    <svg class="homepage-intro-story-border -mod2" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none"  />
        </svg>

    <svg class="homepage-intro-story-border" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>
    <svg class="homepage-intro-story-border -mod3" width="640" height="480" >
          <rect class="animated-stroke" x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" />
        </svg>


        



 <!-- <img src="/img/tmp3.gif" class="homepage-intro-story-img " /> -->
 
 <img src="/img/mosaic.jpg" class="homepage-intro-story-img -ic1" />
 <img src="/img/mrbrit.jpg" class="homepage-intro-story-img -ic2" />
 <img src="/img/thevoice.jpg" class="homepage-intro-story-img -ic3" />


 <!-- <img src="/img/mosaic.jpg" class="blur -ic1" /> -->
 <!-- <img src="/img/mrbrit.jpg" class="blur -ic2" /> -->
 <!-- <img src="/img/thevoice.jpg" class="blur -ic3" /> -->




    <div class="homepage-intro-story-media" >
        
       
    </div>
    </div>



</template>

<script>
export default{

    name:'Slideshow3',
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
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  /* grid-auto-rows: minmax(10vh, auto); height: 60vh;*/
  grid-template-rows: repeat(8,7.5vh);
  
  /* grid-auto-rows: 18vh; */
  border-radius:1em;

  /* width:1100px; */
  /* max-width:1100px; */
  width:100%;
  margin:0 auto;

  /* background:var(--c-dark); */

  /* background:purple; */
}

.homepage-intro-story-copy{
  z-index:10000;
}


.homepage-intro-story-headline{
    padding:0;
    /* margin:10vh 0 0; */
    font-size:var(--fs-headline); letter-spacing:-.04em;
    font-weight:500;
    line-height:1;
    
    transition:all .5s;
    text-shadow:.25em .25em .25em rgba(0,0,0,.65);
    color:rgba(255,255,255,.9);

}



.homepage-intro-story-media{
    
  z-index:900;
  /* opacity:.5;q */
  /* overflow:hidden; */
  
  grid-column: 1 / 7;
  grid-row: 1 / 7;

  /* max-height: 60vh; */
  /* background:red; */
  /* background: transparent; */
  /* background:purple; */
  /* background:var(--c-dark); */
  /* border:1px solid red; */
  /* box-shadow: 10px 10px 10px rgba(0,0,0,.2); */
  /* border:1px solid rgba(255,0,0,1); */
  /* background-blend-mode: hard-light; */
  border-radius:1em;
  /* mix-blend-mode: screen; */
  
  /* mix-blend-mode: screen; */
}

.homepage-intro-story-img{
    /* position: relative; */
   opacity:1;
   border:10px solid var(--c-dark);
   background:var(--c-dark);
   /* z-index:-1; */

  /* transition:opacity 1s ease-in-out; */

  
  /* mix-blend-mode: screen; */
  
/*   
    grid-column: 1 / 5;
  grid-row: 1 / 6; */

  /* display: block; */
  /* display: none; */
  width:100%;
  height:100%;
  /* height:60vh; */
  object-fit:cover;
  border-radius:2em; 
  
}


.homepage-intro-story-img:after{
  position: absolute;
  top:0px;left:0px;
  content:"asdasdasd ";
  width:40px;
  height:100px;
  border:10px solid red;
  color:yellow;
  /* z-index:10000000; */
}

.homepage-intro-story{

  /* border:1px solid red; */

  --text-opacity-off:.15;
  --text-opacity-on: 1;


  /* perspective:800px;


  --text-rotation-in: rotate3d(1,1,0,5deg);
  
  --image-rotation-in: rotate3d(1,1,0,15deg);
  --image-rotation-out: rotate3d(1,1,0,25deg);
 */
 

  --image-opacity-off:.15;
  --image-opacity-on: 1;
  
  --image-rotation-in: scale(.5);
  --image-rotation-out: scale(.5);
  --image-transdur-in: .75s;
  --image-transdur-out: 1.15s;
 
  /* --image-opacity-off:0; */
/* --image-rotation-in: scale(.90); */
  /* --image-rotation-out: scale(.90); */
  

} 









/*
    IC1
 */

.st1 .homepage-intro-story-headline.-ic1{

  opacity:  var(--text-opacity-on);

  transform:translateY(0);  
  transition-delay: .5s;
  /* text-shadow: 0px 0 0 rgba(200,0,0,.1) */

}
.st3 .homepage-intro-story-headline.-ic1{
    opacity: var(--text-opacity-off);
  

    transform:translateY(.5em) var(--text-rotation-in);
    color:rgba(0,200,200,0);
    /* text-shadow: 10px 0 0 rgba(200,0,0,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
}

/* headline 1 out */
.st2 .homepage-intro-story-headline.-ic1{
    opacity:var(--text-opacity-off);
      transform:translateY(-.5em);
    transition-delay: 0s;
    /* transition-duration: .25s; */
    color:rgba(0,200,200,0);
    /* text-shadow: 10px 0 0 rgba(200,0,0,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
}



.st1 .homepage-intro-story-img.-ic1{
    transform:translateX(0em);
    transition-duration: var(--image-transdur-in);
    opacity:var(--image-opacity-on);

    z-index:1001;
  

}
.st3 .homepage-intro-story-img.-ic1{
    transform:translateX(50em) translateY(10em) var(--image-rotation-in);
    transition-duration: var(--image-transdur-out);
    opacity:var(--image-opacity-off);

}
.st2 .homepage-intro-story-img.-ic1{
    transform:translateX(1em) translateY(5em) var(--image-rotation-out);
    transition-duration: var(--image-transdur-out);
    opacity:var(--image-opacity-off);

}



/*
    IC2
 */



.st2 .homepage-intro-story-headline.-ic2{
  opacity:  var(--text-opacity-on);
  transform:translateY(.5em);
  

   /* text-shadow: 0px 0 0 rgba(200,0,0,.1) */

}

.st1 .homepage-intro-story-headline.-ic2{
    opacity:  var(--text-opacity-off);
    transform:translateY(0em) var(--text-rotation-in);
    /* text-shadow: 0 10px 0 rgba(200,0,0,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
     color: rgba(0,200,200,0);
}

.st3 .homepage-intro-story-headline.-ic2{
    opacity:  var(--text-opacity-off);
    transform:translateY(1em);
    /* text-shadow: 0 -10px 0 rgba(200,0,0,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
    color: rgba(0,200,200,0);
}





.st2 .homepage-intro-story-img.-ic2{
    transform:translateX(10em);
    transition-duration: var(--image-transdur-in);
    opacity:  var(--image-opacity-on);
    z-index:1001;
    
}
.st1 .homepage-intro-story-img.-ic2{
    transform:translateX(1em) var(--image-rotation-in);
    transition-duration: var(--image-transdur-out);
    opacity:  var(--image-opacity-off);
    
}
.st3 .homepage-intro-story-img.-ic2{
    transform:translateX(1em) translateY(-5em) var(--image-rotation-out);
    transition-duration: var(--image-transdur-out);
    opacity:  var(--image-opacity-off);
    
}



/*
    IC3
 */



.st3 .homepage-intro-story-headline.-ic3{
  opacity:var(--text-opacity-on);
  transform:translateY(0px);
  /* text-shadow: 0px 0 0 rgba(0,200,100,.1) */

}

.st2 .homepage-intro-story-headline.-ic3{
    opacity:var(--text-opacity-off);
    transform:translateY(-.5em) var(--text-rotation-in);
    /* text-shadow: 0 -10px 0 rgba(0,200,200,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
    color: rgba(200,0,0,0);
}

.st1 .homepage-intro-story-headline.-ic3{
    opacity:var(--text-opacity-off);
    transform:translateY(.5em); 
    /* text-shadow: 0 10px 0 rgba(0,200,200,.8); */
    text-shadow: .5em .5em .5em rgba(0,0,0,0);
    color: rgba(200,0,0,0);
    
}



.st3 .homepage-intro-story-img.-ic3{
    z-index:1001;
    transform:translateX(0);
    transition-duration: var(--image-transdur-in);
    opacity:var(--image-opacity-on);
}
.st2 .homepage-intro-story-img.-ic3{
    transform:translateX(-5em) translateY(-10em) var(--image-rotation-in);
    transition-duration: var(--image-transdur-out);
    opacity:var(--image-opacity-off);
}
.st1 .homepage-intro-story-img.-ic3{
    
    transform:translateY(5em) translateX(45em) var(--image-rotation-out);
    transition-duration: var(--image-transdur-out);
    opacity:var(--image-opacity-off);
}





/* 

    GRID PLACEMENT AND TYPE SETTINGS
 
 
 */





.homepage-intro-story-copy.-ic1{
  grid-column: 8 / 13;
  grid-row: 2 / 8;
  justify-self: end; 
  align-self: center; 
    /* font-size:1rem; */
    max-width: 550px;
  /* border: 1px solid red; */
  /* text-align: right; */
  /* padding:2em; */
  padding-left:5em;
}


.homepage-intro-story-copy.-ic2{
    grid-column: 1/4;
    grid-row: 2/6;
    align-self: end;
}

.homepage-intro-story-copy.-ic3{
    grid-column: 6 / 13;
    grid-row: 3/8;
    align-self: start;
    justify-self: end;
    text-align: right;
    /* border:1px solid red; */
}





.homepage-intro-story-img.-ic1{
  
    grid-column: 1 / 8;
    grid-row: 2 / 8;
}
.homepage-intro-story-img.-ic2{
    grid-column: 4 / 12;
    grid-row: 2 / 7;
    align-self: end;
}
.homepage-intro-story-img.-ic3{
    grid-column: 1 / 8;
    grid-row: 3 / 8;
    align-self: end;
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

  /* z-index:500; */

  width:calc(100%);
  height:calc(100% - 80px);


  transform:translate(0px, 40px);
  /* height:60vh; */
  transition:all .75s;

  /* stroke-dasharray: var(--story-border-length) var(--story-border-space); */
  /* stroke-dashoffset: var(--story-border-offset); */
  /* transform: translate(-5px, -5px); */
  
  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 2 / 12;
  grid-row: 1 / 9;

  border-radius:1.1em;
  /* transform:scale(.85); */

  
}

.homepage-intro-story-border.-mod3{
    height:100%;
    transform:translate(40px);
     grid-column: 1 / 8;

  grid-row: 1 / 9;
  opacity:.2;
}
.homepage-intro-story-border.-mod2{
  /* transform:translate(0, 0); */
  stroke:white;
  opacity:.4;
  stroke-width: calc (2 * var(--story-border-sw));
  transition-delay: .25s;
  transition:all 1.25s ease-out;
  /* transform:scale(.85); */
  
}



.blur{


    /* display:none; */
    grid-column: 1 / 13;
    grid-row: 1 / 9;

    filter:blur(50px);
    opacity:.25;
    z-index:-1;
    width:100%;
    height:100%;
}


</style>
