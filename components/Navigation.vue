<template>
    <nav class="navigation" :class="{is_expanded:expanded}" >
          <ul class="navigation-list">
            <li class="navigation-list-item">
              <a class="navigation-list-link" @click="scrollto($event,'home')" href="#home">Home </a></li>
            <li class="navigation-list-item">
              <a class="navigation-list-link" @click="scrollto($event,'who-we-are')" href="#who-we-are">Who we are </a></li>
            <li class="navigation-list-item">
              <a class="navigation-list-link" @click="scrollto($event,'what-we-do')" href="#what-we-do">What we do </a></li>
            <li class="navigation-list-item">
              <a class="navigation-list-link" @click="scrollto($event,'case-studies')" href="#case-studies">Case studies </a></li>
            <li class="navigation-list-item">
              <a class="navigation-list-link" @click="scrollto($event,'contact')" href="#contact">Contact </a></li>
          </ul>
    </nav>
</template>

<script>
export default{

    name:'Navigation',
    data(){
      return{}
    },
    props:{
      expanded:Boolean
    },
    mounted(){},
    methods:{

     scrollto:function(e,b){
       console.log(e,b)
      e.preventDefault();
      // const href = this.getAttribute("href");
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
  /* text-align: left; */
  display: flex;
  /* align-self: flex-end; */
  
  align-items: center;

  position:fixed;
  top:0;
  right:-50%;
  z-index:2000;
  width:auto;
  height:100vh;
  
  background:rgba(0,0,0,.2);
  /* background:var(--c-light); */
  transition: right .75s;
  /* border-left:1px solid pink; */
}

.navigation.is_expanded{
  right:0%;
}

.navigation-list{

  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  justify-items: flex-end;
  display: inline;
  /* border:1px solid var(--c-light); */
  padding:1em 4em;
  border-radius:.5em;
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
}
.navigation-list-item{
  /* display:inline-block; */
  /* --fs-navigation:76px; */

  font-size:var(--fs-navigation);
  padding:.5em 2em;
  /* padding:1em 1em; */
  font-weight:500;
  

  line-height:1.1;
  text-transform: lowercase;
  color:var(--c-dark);
  
  display:block;
}


</style>
