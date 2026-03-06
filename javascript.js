let BtnUp = document.getElementById('Up');
let NavBar = document.getElementById('Nav-Bar');
let WhatWeDo = document.getElementById('What-We-Do')
let Catigores = document.getElementById('Catigores')
let shosc = document.getElementById('shosc')
let Products = document.getElementById('Products')
let ContactUs = document.getElementById('Contact-Us')
let menu = document.querySelector('.menu')
let sidemenu = document.querySelector('.side-menu')
let imgsc = document.querySelector('.imgsc')
let Hero = document.querySelector('.Hero')

function openmenu(){
    sidemenu.style.transform = 'translateX(0)';
    sidemenu.style. marginLeft = '85%';
    WhatWeDo.style.filter = 'blur(2px)';
    Catigores.style.filter = 'blur(2px)';
    Products.style.filter = 'blur(2px)';
    ContactUs.style.filter = 'blur(2px)';
    Hero.style.filter = 'blur(2px)';
    NavBar.style.filter = 'blur(2px)';
}
function closemenu(){
    sidemenu.style.transform = 'translateX(100%)';
    sidemenu.style. marginLeft = '100%';
    WhatWeDo.style.filter = 'blur(0px)';
    Catigores.style.filter = 'blur(0px)';
    Products.style.filter = 'blur(0px)';
    ContactUs.style.filter = 'blur(0px)';
    Hero.style.filter = 'blur(0px)';
    NavBar.style.filter = 'blur(0px)';
}

let x = this.scrollY



function scrollhed(){
    if (this.scrollY >= 135) {
        BtnUp.style.opacity = '1';
        NavBar.style.background = '#fff';
        NavBar.style.boxShadow = '0px 0px 1px black';

    } else {
        BtnUp.style.opacity = '0';
        NavBar.style.background = 'none';
        NavBar.style.boxShadow = '0px 0px 0px black';
    }
}

function scrollbody(){
    
    if(this.scrollY >= 300){
        WhatWeDo.style.opacity = '1'
    }else{
        WhatWeDo.style.opacity = '0'
    }

    if(this.scrollY >= 700){
        Catigores.style.opacity = '1'
    }else{
        Catigores.style.opacity = '0'
    }

    if(this.scrollY >= 1400){
        Products.style.opacity = '1'
    }else{
        Products.style.opacity = '0'
    }

    if(this.scrollY >= 1930){
        ContactUs.style.opacity = '1'
    }else{
        ContactUs.style.opacity = '0'
    }
    
}

function scrollbodyscrmob(){
    
    if(this.scrollY >= 400){
        WhatWeDo.style.opacity = '1'
    }else{
        WhatWeDo.style.opacity = '0'
    }

    if(this.scrollY >= 1150){
        Catigores.style.opacity = '1'
    }else{
        Catigores.style.opacity = '0'
    }

    if(this.scrollY >= 2550){
        Products.style.opacity = '1'
    }else{
        Products.style.opacity = '0'
    }

    if(this.scrollY >= 3100){
        ContactUs.style.opacity = '1'
    }else{
        ContactUs.style.opacity = '0'
    }
    
}

function ifd(){
    
    if(window.scrollY <= 800){
        scrollbodyscrmob()
    }else{
        scrollbody()
    }
    
}

onscroll = function () {
    scrollhed()
    ifd()
    barscroll()
}

BtnUp.onclick = function () {
    scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}


function barscroll(){

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let scrolled = (window.scrollY / height) * 100;
    
    document.querySelector(".progress").style.width = scrolled + "%";
    
    }
