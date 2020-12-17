<template>
   
   <div class="close-toggle">
       
            <svg
              class="close-toggle-button"
              :class="{is_open:expanded}"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                class="close-toggle-button-line-one"
                x1="0"
                y1="15"
                y2="15"
                x2="30"
                strokeWidth="3"
                stroke="var(--c-light)"
              />
              <line
                class="close-toggle-button-line-two"
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

    name:'Close',
    data(){
        return{
          expanded:true
        }
    },
    // props:{
    //   expanded:Boolean
    // },
    mounted(){},
    methods:{}      

}
</script>
<style scoped>
    .close-toggle{
        --c-light:white;
     
       
    }


    .close-toggle-button{
        
        /* height:var(--u-close-icon-size);
        width:auto; */

        height:auto;
        width:var(--u-close-icon-size);
    }


   





    .close-toggle-button-line-one{
    transform:translate(0, 3px);
    transform-origin: center;
    transition: transform .3s;
    stroke-width: 3px;
    }
    .close-toggle-button-line-two{
    transform:translate(0, -3px);
    transform-origin: center;
    transition: transform .3s;
    stroke-width: 3px;

    }



.close-toggle-button:hover .close-toggle-button-line-one{   
    transform:translate(0, 6px);
}
.close-toggle-button:hover .close-toggle-button-line-two{   
    transform:translate(0, -6px);
}



/* CLOSE ICON */
  .is_open .close-toggle-button-line-one{
    /* transform:translate(0, 0px) rotate(225deg); */
    transform:translate(0, 0px) rotate(225deg);
    /* stroke:var(--c-dark); */
    
  }
  .is_open .close-toggle-button-line-two{
    transform:translate(0, 0px) rotate(-45deg);
    /* stroke:var(--c-dark); */
  }
  

.close-toggle-button.is_open:hover .close-toggle-button-line-one{   
    /* transform:translate(0, 0)  rotate(-45deg); */
    transform:translate(0, 0px) rotate(225deg);
    
}
.close-toggle-button.is_open:hover .close-toggle-button-line-two{   
    /* transform:translate(0, 0) rotate(225deg); */
     transform:translate(0, 0px) rotate(-45deg);
}

</style>
