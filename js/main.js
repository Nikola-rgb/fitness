 $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

// Hamburger-menu

const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
});

    

    
    
