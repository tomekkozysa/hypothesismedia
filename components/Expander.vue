<template>
    <div ref="zone" class="expander" :class="{is_expanded:is_expanded}">
        <slot>
          
        </slot>


        <div :class="{ex_content:true, is_expanded:is_expanded}">

        </div>
    </div>


</template>
<script>
export default{
    name:'Expander',
    data(){
        return{
            is_expanded:false,           
        }
        
    },
    mounted(){
       let z = this.$refs['zone'];

       z.addEventListener('click',this.expand);
       
    },

    methods:{
       
       expand:function(e){
            let z = this.$refs['zone'];
            z.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  
  setTimeout(()=>{
          this.is_expanded = !this.is_expanded;
  },150)
        
       }
        
    }

}
</script>
<style>
.expander{
    /* min-height:1px; */
    cursor:pointer;
    /* transition:min-height .50s ease-out; */
    padding:.3em 0;
}

.expander.is_expanded{
    /* min-height:80vh;   */
   
}
.ex_content{
    margin-top:0;
    min-height:0px;
    background:var(--c-light);
    opacity:.5;
    mix-blend-mode: overlay;
    transition:min-height .5s, margin-top .25s ease-in-out .26s;
}
.ex_content.is_expanded{
    min-height:60vh;
    margin-top:1em;
    transition:min-height .5s, margin-top .25s;
     
}
@keyframes wow {
  0%   { background-position: 0px 50%; }
  50% { background-position: 0px 100%; }
100%   { background-position: 0px 50%; }
}

</style>
