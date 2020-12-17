export default function (to, from, savedPosition) {

      
  console.log('❤️ scroll behaviour file router.config', to.name, from.name, savedPosition );
 
  // if(savedPosition){
  //   console.log('savedPosition', savedPosition)
  //   return savedPosition
  // }

  
  // else{
   
  //   return {x: 0, y: 0}
  // }

  if (to.path == from.path && to.hash) {
      console.log('scb same page')
     return {          
      selector: to.hash,
      behavior: 'smooth'
      
    }
    // return {x: 0, y: 0}
  }
  else if(to.path.indexOf('case-studies') > -1 ){
    console.log('scb leaving home page, hello cs')
    return {x: 0, y: 0}

  }
  else if (to.path == '/' ) {
    
    if(savedPosition){
      console.log('scb back to home page, saved:',savedPosition)
      return {x: 0, y: savedPosition.y};
    }
    else{
      console.log('scb back to home page hash:', to.hash)
      if(to.hash){
        return {          
          selector: to.hash,
          behavior: 'smooth'
        }
      }
      else{
        return {x: 0, y: 0}
      }
      
    }
    
  } 


  


}