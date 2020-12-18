<template>
  <div>

    
      <header class="header-main">
       <hgroup class="header-main-split">
          
        <nuxt-link to="/"><img src="/hypothesismedia-logo.svg" class="header-logo"  /></nuxt-link>
        
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
    components:{
      NavigationToggle,
      Navigation,
    },
    data(){
      return{
        navigation_expanded:false,
        navigation_position:'case-studies',
        currententry:null,
        pre:null,
        
      }
    },
    mounted(){
   
        console.log('layout cs')
        console.log('yay! new layout!')

  },

    methods:{}

      
    

}
</script>

<style>


</style>

