const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector(' .top-nav')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('close-menu');
  
        menu.classList.toggle('active');
   
})