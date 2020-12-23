<template>
    <div class="contact">
        <ul class="contact-list">
            <li>
             
        <a class="contact-link"
        href="mailto:tomx@hypothexismedia.co.uk"
    onmouseover="this.href=this.href.replace(/x/g,'');">email</a></li>
        <li><a href="https://twitter.com/HypothMedia" class="contact-link" >twitter</a></li>


        <li><a href="https://www.linkedin.com/company/hypothesis-media/?viewAsMember=true" class="contact-link">linkedin</a></li>        
        </ul>
    </div>
</template>

<script>
export default{

    name:'Contact',
    
    mounted(){},
    methods:{}      

}
</script>
<style scoped>
.contact{

}
.contact-list{
    list-style:none;
}
.contact-link{
    color:var(--c-body);
    text-decoration: none;
}
</style>
