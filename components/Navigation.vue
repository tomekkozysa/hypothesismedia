<template>
    <nav class="navigation" :class="{is_expanded:expanded}" >
          <ul class="navigation-list">

            <!-- <li class="navigation-list-item" :class="{is_current:current == 'home'}" > 
              <nuxt-link class="navigation-list-link" to="/">  
                <span v-if="current == 'home'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Index </span></nuxt-link>
              </li>
            <li class="navigation-list-item" :class="{is_current:current == 'home'}" > 
              <nuxt-link class="navigation-list-link" to="/index-two">  
                <span v-if="current == 'home'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Index II</span></nuxt-link>
              </li> -->

            <li class="navigation-list-item" :class="{is_current:current == 'home'}" > 
              <nuxt-link class="navigation-list-link" to="/#home">  
                <span v-if="current == 'home'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Home </span></nuxt-link>
              </li>


            <li class="navigation-list-item" :class="{is_current:current == 'who-we-are'}" >
              <nuxt-link class="navigation-list-link"  to="/#who-we-are">
                <span v-if="current == 'who-we-are'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Who we are </span></nuxt-link></li>


            <li class="navigation-list-item" :class="{is_current:current == 'what-we-do'}" >
              <nuxt-link class="navigation-list-link"  to="/#what-we-do">
                <span v-if="current == 'what-we-do'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> What we do </span></nuxt-link></li>


            <li class="navigation-list-item" :class="{is_current:current == 'case-studies'}" >
              <nuxt-link class="navigation-list-link"  to="/#case-studies">
                <span v-if="current == 'case-studies'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Case studies </span></nuxt-link></li>


            <li class="navigation-list-item" :class="{is_current:current == 'contact'}" >
              <nuxt-link class="navigation-list-link"  to="/#contact">
                <span v-if="current == 'contact'" class="navigation-icon is_on">●</span>
                <span v-else class="navigation-icon is_off">○</span> 
                <span class="navigation-item-label"> Contact </span></nuxt-link></li>


          </ul>
          
    </nav>
</template>

<script>
export default{

    name:'Navigation2',
    data(){
      return{}
    },
    props:{
      expanded:Boolean,
      current:String,
    },
    mounted(){},
    methods:{
    
     scrollto:function(e,b){
       
        e.preventDefault();
        const offsetTop = document.querySelector('#'+b).offsetTop-120;
 
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });

     }


    }      

}
</script>


<style scoped>





.navigation{


  --n-wedge:40px;

  display: flex;
  align-items: center;
  position:fixed;
  top:0;
  right:-150px;
  z-index:20000;
  width: 200px;
  height:100vh;  
  
  background:rgba(0,0,0,0);
  transition: right .75s;

}

@media (max-width: 961px) {
   .navigation{
     right: -300px;
  }
 }

.navigation-item-label{
  display: inline-block;
 padding-left:1em;

}
.navigation:hover .navigation-item-label,
.navigation.is_expanded .navigation-item-label{
  padding-left:0;
}


.navigation:hover,
.navigation.is_expanded{
  right:0%;
  background:var(--c-dark);
  /* background:rgba(0,0,0,0.2); */
}

.navigation-list{

  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  justify-items: flex-end;
  display: inline;
  /* border:1px solid var(--c-light); */
  padding:1em 0; 
  /* border-radius:.5em; */
  /* background:var(--c-dark); */
  justify-self: flex-end;
  width:100%;
  /* height:100%; */
  
  /* text-align:center; */

}

.navigation-list-link:hover{
 

}
.navigation-list-link{
  color:white;
  text-decoration: none;
  display: block;
  padding:.5em 10px; 
}

.navigation-icon {display:inline-block;padding:0 10px;}
.navigation-icon.is_on{}
.navigation-icon.is_off{}


.navigation-list-item{
  /* display:inline-block; */
  /* --fs-navigation:76px; */

  font-size:var(--fs-navigation);
  
  /* padding:1em 1em; */
  font-weight:500;
  

  line-height:1.1;
  text-transform: lowercase;
  color:var(--c-dark);
  
  display:block;
}

.navigation-list-item.is_current{
  /* border: 1px solid red; */
}
/* 
.navigation-list-item.is_current:before{
  content:'●';
  color:white;
  
}
.navigation-list-item:before{
  margin-right:20px;
  color:white;
  content:'○';
} */

</style>
