<template>
    
     <div class="homepage-intro-story st1 js-clock" ref="js-clock">
    
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


 <img src="/img/mosaic.jpg" class="blur -ic1" />
 <img src="/img/mrbrit.jpg" class="blur -ic2" />
 <img src="/img/thevoice.jpg" class="blur -ic3" />




    <div class="homepage-intro-story-media" >
        
       
    </div>
    </div>



</template>

<script>
export default{

    name:'Slideshow4',
    data(){
    return{
      clockInterval:0,
      intervalTime:4000,
      intervalArray:['st1','st2','st3'],
      currentIndex:0,
      animate : false,
    }
  },
    mounted(){
        this.clockInterval = setInterval(()=>{

            if(!this.animate){
                return;
            }

          this.updateClock();

    },this.intervalTime)






    

        let options = {
            rootMargin: '0px',
            threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
        }
        this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {    
            if(entry.isIntersecting){
                if(entry.intersectionRatio > .5){
                    this.animate = true;
                }
            }
            else{
                this.animate = false;
            }
            });
    
        },options);

        this.observer.observe(this.$refs['js-clock']);
    
    },
    methods:{

        updateClock(){
            
      let current = this.currentIndex+1 > 2 ? 0 :  this.currentIndex+1;

      let c = this.$refs['js-clock'];
      
      let oldclass = this.intervalArray[this.currentIndex]
      let newclass = this.intervalArray[current];
    if(oldclass)
      c.classList.remove(oldclass);
      c.classList.add(newclass);

      this.currentIndex = current;



    }



    }      

}
</script>


<style scoped>


.homepage-intro-story{

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  grid-template-rows: repeat(8,7.5vh);
  
  border-radius:1em;

  width:100%;
  margin:0 auto;

  --text-opacity-off:0;
  --text-opacity-on: .9;

  --text-transdur-in: 1.75s;
  --text-transdur-out: .5s;

  --text-trans-rest:translateY(0);
  --text-trans-out:translateY(.25em);
  --text-trans-in:translateY(-.75em); 

  --image-opacity-off:0;
  --image-opacity-on: 1;
  
  --blur-opacity-off:0;
  --blur-opacity-on: .5;
  
  --image-rotation-in: scale(1);
  --image-rotation-out: scale(1);

  --image-transdur-in: 1.5s;
  --image-transdur-out: .5s;

  --image-trans-rest:translateY(0);
  --image-trans-out:translateY(-40px);
  --image-trans-in:translateY(40px);

}


.homepage-intro-story-copy{
  z-index:10000;
}


.homepage-intro-story-headline{

    color:rgba(255,255,255,.9);
    text-shadow:.25em .25em .25em rgba(0,0,0,.45);

    padding:0;
    font-size:var(--fs-headline); letter-spacing:-.04em;
    font-weight:500;
    line-height:1;
    transition:all .5s;

}



.homepage-intro-story-img{
    
    opacity:1;
    border:10px solid var(--c-dark);
    background:var(--c-dark);
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:2em; 
  
}


/*
    IC1
 */

.st1 .homepage-intro-story-headline.-ic1{

    opacity:  var(--text-opacity-on);
    transition-duration: var(--text-transdur-in);
    transform: var(--text-trans-rest);

}

.st2 .homepage-intro-story-headline.-ic1{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-out);
    transition-duration: var(--text-transdur-out);
}

.st3 .homepage-intro-story-headline.-ic1{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-in);
}


.st1 .homepage-intro-story-img.-ic1{
    transform: var(--image-trans-rest);
    transition-duration: var(--image-transdur-in);
    opacity:  var(--image-opacity-on);
    z-index:1001;
    
}
.st2 .homepage-intro-story-img.-ic1{
    transform: var(--image-trans-out);
    transition-duration: var(--text-transdur-out);
    opacity:  var(--image-opacity-off);
}
.st3 .homepage-intro-story-img.-ic1{
    transform: var(--image-trans-in);
    opacity:  var(--image-opacity-off);
}



/*
    IC2
 */



.st2 .homepage-intro-story-headline.-ic2{

    opacity:  var(--text-opacity-on);
    transition-duration: var(--text-transdur-in);
    transform: var(--text-trans-rest);

}

.st3 .homepage-intro-story-headline.-ic2{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-out);
    transition-duration: var(--text-transdur-out);
}

.st1 .homepage-intro-story-headline.-ic2{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-in);
}


.st2 .homepage-intro-story-img.-ic2{
    transform: var(--image-trans-rest);
    transition-duration: var(--image-transdur-in);
    opacity:  var(--image-opacity-on);
    z-index:1001;
    
}
.st3 .homepage-intro-story-img.-ic2{
    transform: var(--image-trans-out);
    transition-duration: var(--text-transdur-out);
    opacity:  var(--image-opacity-off);
}
.st1 .homepage-intro-story-img.-ic2{
    transform: var(--image-trans-in);
    opacity:  var(--image-opacity-off);
}



/*
    IC3
 */


.st3 .homepage-intro-story-headline.-ic3{

    opacity:  var(--text-opacity-on);
    transition-duration: var(--text-transdur-in);
    transform: var(--text-trans-rest);

}

.st1 .homepage-intro-story-headline.-ic3{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-out);
    transition-duration: var(--text-transdur-out);
}

.st2 .homepage-intro-story-headline.-ic3{
    opacity:  var(--text-opacity-off);
    transform: var(--text-trans-in);
}


.st3 .homepage-intro-story-img.-ic3{
    transform: var(--image-trans-rest);
    transition-duration: var(--image-transdur-in);
    opacity:  var(--image-opacity-on);
    z-index:1001;
    
}
.st1 .homepage-intro-story-img.-ic3{
    transform: var(--image-trans-out);
    transition-duration: var(--text-transdur-out);
    opacity:  var(--image-opacity-off);
}
.st2 .homepage-intro-story-img.-ic3{
    transform: var(--image-trans-in);
    opacity:  var(--image-opacity-off);
}


/* 

    GRID PLACEMENT AND TYPE SETTINGS
 
 
 */





.homepage-intro-story-copy.-ic1{
    grid-column: 8 / 13;
    grid-row: 2 / 8;
    justify-self: end; 
    align-self: center; 
    max-width: 550px;
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
 }





.homepage-intro-story-img.-ic1{
    grid-column: 2 / 12;
    grid-row: 1 / 9;
    /* max-height:90%; */
    align-self: center;
}
.homepage-intro-story-img.-ic2{
    grid-column: 2 / 12;
    /* max-width:90%; */
    justify-self: center;
    grid-row: 1 / 9;
    align-self: end;
}
.homepage-intro-story-img.-ic3{
    grid-column: 2 / 12;
    grid-row: 1 / 9;
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
}
.st3{

    --story-border-space:85vw;  
    --story-border-length: calc(120vw + 60vh);
    --story-border-offset: calc(80vw + 60vh);


    --story-border-length: 210%;
    --story-border-space:70%; 
    --story-border-offset:100%;

}






.homepage-intro-story-media{

    display: none;

    z-index:900;
    grid-column: 1 / 13;
    grid-row: 3 / 7;
    opacity:.1;
    border:1px solid PINK;
    border-radius:2em;
}


.homepage-intro-story-border{

  z-index:1010;
  width:calc(100%);
  /* height:calc(100% - 80px); */

  /* transform:translate(0px, 40px); */
  height:100%;
  transition:all .75s;


    stroke-dasharray: var(--story-border-length) var(--story-border-space);
  stroke-dashoffset: var(--story-border-offset);
  

  stroke-width: var(--story-border-sw);
  stroke:pink;
  opacity:.5;
  
  grid-column: 2 / 12;
  grid-row: 1 / 9;

  border-radius:1.1em;

  
}

.homepage-intro-story-border.-mod3{
    height:100%;
    transform:translate(40px);
    grid-column: 3 / 8;
    grid-row: 1 / 9;
    opacity:.2;
    stroke-dasharray:none;
    stroke-dashoffset: none;
    display:none;
}
.homepage-intro-story-border.-mod2{
    stroke:white;
    opacity:.4;
    stroke-width: calc (2 * var(--story-border-sw));
    transition-delay: .25s;
    transition:all 1.25s ease-out;
}



.st1 .blur.-ic1{  opacity:var(--blur-opacity-on); }
.st2 .blur.-ic1{  opacity:var(--blur-opacity-off); }
.st3 .blur.-ic1{  opacity:var(--blur-opacity-off); }


.st1 .blur.-ic2{  opacity:var(--blur-opacity-off); }
.st2 .blur.-ic2{  opacity:var(--blur-opacity-on); }
.st3 .blur.-ic2{  opacity:var(--blur-opacity-off); }

.st1 .blur.-ic3{  opacity:var(--blur-opacity-off); }
.st2 .blur.-ic3{  opacity:var(--blur-opacity-off); }
.st3 .blur.-ic3{  opacity:var(--blur-opacity-on); }




.blur{


    grid-column: 2 / 12;
    grid-row: 3 / 7;

    filter:blur(150px);
    object-fit: cover;
    z-index:-1;
    width:100%;
    height:100%;
    
    /* display:none; */
}




</style>
