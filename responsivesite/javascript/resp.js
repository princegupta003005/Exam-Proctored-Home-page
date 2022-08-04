burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
navright=document.querySelector('.nav-right');

burger.addEventListener('click',function (){
    navright.classList.toggle('visible');
    navlist.classList.toggle('visible');
    navbar.classList.toggle('h-nav');

})