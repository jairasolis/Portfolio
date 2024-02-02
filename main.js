const goTopBtn = document.querySelector(".go-top-btn");
const navbar = document.querySelector('.navbar');


window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100){
        goTopBtn.classList.add("active");
    }else{
        goTopBtn.classList.remove("active");
    }
})

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
};
