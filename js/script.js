//saat di klik tampil

const navbarNav = document.querySelector('.navbar');

document.querySelector('#humberger').onclick = ()=>{
    navbarNav.classList.toggle('active');
};

//keluar saat d klik di tempat lain

const berger = document.querySelector('#humberger');

document.addEventListener('click',function(e){
    if(!berger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
