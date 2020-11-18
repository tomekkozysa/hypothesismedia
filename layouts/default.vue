<template>
  <div>
    <header class="header-main">
      <hgroup class="header-main-split">
        <img src="/hypothesismedia-logo.svg" class="header-logo"/>
        <nav class="header-navigation">
          <ul class="header-navigation-list">


            <li class="header-navigation-list-item">Home </li>
            <li class="header-navigation-list-item">Who we are </li>
            <li class="header-navigation-list-item">What we do </li>
            <li class="header-navigation-list-item">Case studies </li>
            <li class="header-navigation-list-item">Contact </li>
          </ul>
        </nav>
      </hgroup>
      
    </header>
    <Nuxt class="main" />
    <footer class="slide-snap"></footer>
  </div>
</template>

<style>


:root{
  
  --c-dark:#270949;
  --c-light:#4654A3;
  --c-body:rgba(255,255,255,.8);
  
  --cg-header:linear-gradient(0deg, rgba(0,0,0,0) 0%, var(--c-dark) 30%, var(--c-dark) 100%);
  --cg-main:linear-gradient(0deg, var(--c-light) 0%, var(--c-dark) 50%);

  --fs-headline:4.6rem;  
  --fs-headline-small:3rem;
  --fs-list-item:3rem;
    --fs-body:1.8rem;
    --fs-navigation:1.4rem;
  
  
  --fs-cs-headline:3rem;
  --fs-cs-blurb: 2.2rem;
  --l-max-w:1600px;
  
}



html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html { /* body won't work ¯\_(ツ)_/¯ */
  /* scroll-snap-type: y mandatory; */
  scroll-snap-type: y proximity;
  scroll-padding-top: 100px;
}

body{ 
  
  font-family:'Helvetica Neue', Arial, sans-serif;
  padding:0;
  margin:0;
  background:var(--c-dark);
  /* text-shadow: var(--c-light) 1px 1px 0; */

  background:var(--c-dark) var(--cg-main) no-repeat 0;
  background-attachment:fixed;
  background-size:100vw 100vh;
  color:var(--c-body);
   
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main{
  padding:80px;
  max-width: var(--l-max-w);
  margin: 0 auto;
}

.header-main-split{
  display:flex;
}

.header-main{
  /* display:none; */
  height: 120px;
  /* background:var(--c-dark); */
  position: -webkit-sticky;
  position: sticky;
  top:0;
  z-index:3000;
/* scroll-snap-align: start; */
padding:2em;
    background:transparent var(--cg-header) no-repeat 0;
  /* background-attachment:fixed; */
  /* background-size:100vw 50vh; */

}
.header-logo{
  width:180px;
  filter:brightness(200);
}
.header-navigation{
  text-align: right;
  display: block;
  /* align-self: flex-end; */
  justify-self: flex-end;
  flex-grow:2;
}
.header-navigation-list{
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  justify-items: flex-end;
}
.header-navigation-list-item{
  display:inline-block;
  font-size:var(--fs-navigation);
  padding:.25em;
}
</style>
