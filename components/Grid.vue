<template>
    <div class="grid">
        <div class="grid-item">
        <img src="/clients_w/bbc_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/c4_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/dave_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/itv_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/sky_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/theboxplus_logo.svg" class="grid-item-logo">

        </div>
        <div class="grid-item">
        <img src="/clients_w/viacom_logo.svg" class="grid-item-logo">

        </div>
    </div>
</template>

<script>
export default{

    name:'Grid',
    
    mounted(){},
    methods:{}      

}
</script>
<style>
.grid{
    display:flex;
    flex-flow:row wrap;
    opacity:.8;
}
.grid-item{
   padding:2em 0;
   
   margin:.1em;
   display:flex;
   /* width:calc(33% - .2em); */
   width:calc(14.28% - .2em);
   /* background:rgba(255,255,255,.1); */
   display: flex;
   justify-content:center;
   align-items: center;
  
}

.grid-item-logo{
    
    width:100%;
    height:auto;
    display: block;
    max-width: 100px;
}


</style>
