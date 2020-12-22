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
    methods:{},
}
</script>