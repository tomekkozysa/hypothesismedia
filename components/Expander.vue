<template>
    <div ref="zone" class="expander" :class="{is_expanded:is_expanded}">
        
        <header :class="{'expander-headline':true,is_expanded:is_expanded}" @click="expand">
            <slot name="header"></slot>
            <!-- <Close v-if="is_expanded" class="close-button" /> -->
            
        </header>
         
        <div :class="{'expander-content':true, is_expanded:is_expanded}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Close from '~/components/Close.vue';
export default{
    name:'Expander',
    data(){
        return{
            is_expanded:false,           
        }
    },
    methods:{
        __expand:function(e){
            let z = this.$refs['zone'];
            if(!this.is_expanded){
                z.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
            }
            setTimeout(()=>{
                this.is_expanded = !this.is_expanded;
            },250)
        },
        expand:function(e){
            let z = this.$refs['zone'];
            const offsetTop = z.offsetTop;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
            setTimeout(()=>{
                this.is_expanded = !this.is_expanded;
            },250);            
        }        
    }
}
</script>
<style >

:root{
    --u-expander-height:160vh;
    --u-expander-headline-padding:10vh 0 0;
    --u-expander-content-padding:5vh 0;
}

.expander{
    cursor:pointer;
        
        
}
.expander-headline{
    padding:.5em 0;
    transition:all .5s;
    position: relative;
}
.expander-headline:not(.is_expanded):hover{
    
    transform:translateX(10px);
    /* background:rgba(255,255,255,0.1); */
}
.close-button{
    position: absolute;
    top:0;right:0;
    padding:var(--u-expander-headline-padding);
}
.expander-content{
    padding:0 0;
    max-height:0px;
    overflow:hidden;
    will-change: max-height;
    transition:all .5s;
}
.expander-headline.is_expanded{
    padding:var(--u-expander-headline-padding);
}

.expander-content.is_expanded{
    max-height:var(--u-expander-height);
    padding:var(--u-expander-content-padding);
    transition:all .5s;
     
}



</style>
