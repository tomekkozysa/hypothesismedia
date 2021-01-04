<template>
    <div class="contact">
        <ul class="contact-list">
            <li>
             
        <a class="contact-link"        
        href="mailto:tomx@hypothexsismedia.co.uk"
    onmouseover="this.href=this.href.replace(/x/g,'');">
     <span class="contact-link-icon" >
            <img src="/img/iconmonstr-email-13.svg" 
            class="contact-link-icon-svg"
            />
        </span>
        <span class="contact-link-label" >email</span>
    
    </a></li>

        <li>
            <a href="https://twitter.com/HypothMedia" class="contact-link" >
        <span class="contact-link-icon" >
            <img src="/img/iconmonstr-twitter-4.svg" 
            class="contact-link-icon-svg"
            />
        </span>
        <span class="contact-link-label" >twitter</span>
            </a></li>



        <li>
            <a href="https://www.linkedin.com/company/hypothesis-media/?viewAsMember=true" class="contact-link">
            <span class="contact-link-icon" >
            <img src="/img/iconmonstr-linkedin-4.svg" 
            class="contact-link-icon-svg"
            />
        </span>
        <span class="contact-link-label" >linkedin</span>
</a>
            
            
            
            </li>        
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

.contact-link-icon,
.contact-link-label{
    display: inline-block;
    padding:0 .5em;
}


.contact{

}
.contact-list{
    list-style:none;
    padding:0;
}

.contact-link{
    color:var(--c-body);
    text-decoration: none;
    display: inline-block;
    padding: .5em 0;
    
    display: flex;
    align-items: center;
}
</style>
