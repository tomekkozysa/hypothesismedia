<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@350&display=swap" rel="stylesheet">
      <header class="header-main">
        
        <hgroup class="header-main-split">
          <a href="/#home"><img src="/hypothesismedia-logo.svg" class="header-logo"  /></a>
          <NavigationToggle :expanded="navigation_expanded" @click.native="navToggle"
          class="header-navigation-toggle-button" />
        </hgroup>
      </header>
      <Navigation :expanded="navigation_expanded" :current="navigation_position" />   
      <Navigation :expanded="navigation_expanded" :current="navigation_position" />
      <Nuxt class="main" />
      <footer class="slide-snap"></footer>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation.vue';
import NavigationToggle from '~/components/NavigationToggle.vue';
 

export default{
scrollToTop: true,
    
    data(){
      return{
        navigation_expanded:false,
        navigation_position:'case-studies',
        currententry:null,
        pre:null,
        
      }
    },
    mounted(){},
    methods:{
      navToggle:function(e){
        this.navigation_expanded = !this.navigation_expanded;
      },
    },
}
</script>
<style>



.cs-single{
  /* padding:var(--u-hss-padding); */
  max-width: var(--l-max-w);
  padding:var(--u-slide-shift-y) var(--l-padding-rl);
  align-items: flex-start;
}
.cs-single-header{
    /* margin-top:5em; */

}
.cs-single-content{
    padding:10em 0 30vh;
}
.cs-split{
    display:flex;
    flex-direction:row;
}
.cs-split-column:first-child{
    padding-right:var(--u-column-padding);
}
.cs-split-column:last-child{
    padding-left:var(--u-column-padding);
}
.cs-split-column{
    
    width:50%;
    flex:1 1;
}

 

.cs-single-video{
    width:100%;
    /* height:auto; */
    /* height:0; */
    /* height:56.25%; */
}   
.cs-single-main-image{
    max-width: 100%;
    width:100%;
    border-radius:var(--u-border-radius);

}
.cs-single-copy{
    margin-top:1em;
    font-size: var(--fs-body);
}
.cs-single-channel{
  margin-top:.5em;
  font-size:var(--fs-cs-blurb);
}
.cs-single-headline{
    

  font-size:var(--fs-headline);
  font-weight:500;
  font-family: var(--ff-oswald);
  text-transform: uppercase;font-weight: 150;
  line-height: 1;
  letter-spacing:-.02em;
  margin:0;
  padding:0;


}


.cs-single-blurb{
  font-size:var(--fs-cs-blurb);
  font-weight:700;
  letter-spacing:-.02em;
  margin:0;
  padding:0;
}
.cs-single-data{
    margin:0;
  padding:0;
    margin-top:1em;
    font-weight:500;
    letter-spacing:-.02em;
    line-height:1;
    font-size:var(--fs-cs-single-data);
    /* font-style:italic; */
  /* font-size:var(--fs-cs-data); */
  
}

@media (max-width: 961px) {
  .cs-split-column:nth-child(n){
    width:100%;
    padding:1em 0 0;
  }
  .cs-split{
    flex-direction:column;
}
.cs-single-main-image{
  padding:1em 0 0;
}
 }

 
</style>