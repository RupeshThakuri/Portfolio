const burger=document.querySelector('.hamburger');
const menu=document.querySelector('.navbar__navlinks-main');
const endMenu=document.querySelector('.close');
const navLink= document.querySelector('.nav__link');
if(burger){
    burger.addEventListener('click',()=>{
        menu.classList.add('bringNav');    
    });
}
if(endMenu){
    endMenu.addEventListener('click',()=>{
        menu.classList.remove('bringNav');    
    });
}
navLink.forEach(link => {
    navLink.addEventListener('click',()=>{
        menu.classList.remove('bringNav');    
    });
});
