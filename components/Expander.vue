<template>
    <div ref="zone" class="expander" :class="{is_expanded:is_expanded}" @click="expand">
        <header>
            <slot name="header"></slot>
        </header>
        <div :class="{ex_content:true, is_expanded:is_expanded}">
            <slot></slot>
            <!-- <div class="expander-split">
            <div class="expander-image">
                <slot name="image"></slot>
            </div>
            <div class="expander-copy">
                <slot name="copy"></slot>
            </div> -->
        </div>
          
        
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
    //    let z = this.$refs['zone'];

    //    z.addEventListener('click',this.expand);
       
    },

    methods:{
       
       expand:function(e){
            let z = this.$refs['zone'];
            z.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  
  setTimeout(()=>{
          this.is_expanded = !this.is_expanded;
  },250)
        
       }
        
    }

}
</script>
<style >

:root{
    --u-expander-height:60vh;
}
.border{
    border:1px solid pink;
}

.expander{
    /* min-height:1px; */
    cursor:pointer;
    /* transition:min-height .50s ease-out; */
    padding:.3em 0;
    
}

.expander.is_expanded{
    /* min-height:80vh;   */
   /* background: var(--c-light); */
}
.ex_content{
    margin-top:0;
    min-height:0px;
    max-height:0px;
    overflow:hidden;
    /* background:var(--c-light); */
    /* opacity:.5; */
    
    transition:min-height .5s, margin-top .25s ease-in-out .26s;
}
.ex_content.is_expanded{
    min-height:var(--u-expander-height);
    margin-top:1em;
    transition:min-height .5s, margin-top .25s;
     
}
@keyframes wow {
  0%   { background-position: 0px 50%; }
  50% { background-position: 0px 100%; }
100%   { background-position: 0px 50%; }
}

</style>
