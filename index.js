const  navMobile = document.querySelector('.navbar-menu-mobile');
const  mobileNav = document.querySelector('.mobile-nav');

navMobile.addEventListener('click', ()=>{
    if(navMobile.innerHTML === 'menu'){
        navMobile.innerHTML = 'close';
        mobileNav.style.display = 'block';
        setInterval(()=>{
            mobileNav.style.width = '100%';
            mobileNav.style.height = '350px';
            mobileNav.style.opacity = 1;
        }, 200);
    }else{
        navMobile.innerHTML = 'menu';
        setTimeout(()=>{
            mobileNav.style.display = 'none';
        }, 400);
    }
});