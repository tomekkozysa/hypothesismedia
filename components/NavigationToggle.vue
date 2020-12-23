<template>
   
   <div class="nav-toggle">
       
            <svg
              class="nav-toggle-button"
              :class="{is_open:expanded}"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                class="nav-toggle-button-line-one"
                x1="0"
                y1="15"
                y2="15"
                x2="30"
                strokeWidth="3"
                stroke="var(--c-light)"
              />
              <line
                class="nav-toggle-button-line-two"
                x1="0"
                y1="15"
                y2="15"
                x2="30"
                strokeWidth="3"
                stroke="var(--c-light)"
              />
            </svg>
          </div>


</template>

<script>
export default{

    name:'NavigationToggle',
    data(){
        return{}
    },
    props:{
      expanded:Boolean
    },
    mounted(){},
    methods:{}      

}
</script>
<style scoped>
    .nav-toggle{
        --c-light:white;
        position: absolute;    
        top:0;
        right:0px;
       
    }


    .nav-toggle-button{
        
        /* height:var(--u-nav-icon-size);
        width:auto; */

        height:auto;
        width:var(--u-nav-icon-size);
    }


   





    .nav-toggle-button:active .nav-toggle-button-line-one,
    .nav-toggle-button-line-one{
    transform:translate(0, 3px);
    transform-origin: center;
    transition: transform .3s;
    stroke-width: 3px;
    }

    
    .nav-toggle-button:active .nav-toggle-button-line-two,
    .nav-toggle-button-line-two{
    transform:translate(0, -3px);
    transform-origin: center;
    transition: transform .3s;
    stroke-width: 3px;

    }



.nav-toggle-button:hover .nav-toggle-button-line-one{   
    transform:translate(0, 6px);
}
.nav-toggle-button:hover .nav-toggle-button-line-two{   
    transform:translate(0, -6px);
}



/* CLOSE ICON */
  .is_open .nav-toggle-button-line-one{
    /* transform:translate(0, 0px) rotate(225deg); */
    transform:translate(0, 0px) rotate(225deg);
    /* stroke:var(--c-dark); */
    
  }
  .is_open .nav-toggle-button-line-two{
    transform:translate(0, 0px) rotate(-45deg);
    /* stroke:var(--c-dark); */
  }
  

.nav-toggle-button.is_open:hover .nav-toggle-button-line-one{   
    /* transform:translate(0, 0)  rotate(-45deg); */
    transform:translate(0, 0px) rotate(225deg);
    
}
.nav-toggle-button.is_open:hover .nav-toggle-button-line-two{   
    /* transform:translate(0, 0) rotate(225deg); */
     transform:translate(0, 0px) rotate(-45deg);
}

</style>
