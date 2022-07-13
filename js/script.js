$(function (){
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

    $('.main-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-arrow.png">','<img src="images/slide-arrow.png">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $('.actual-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:0,
        nav:false,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2.5,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2.5,
            }
        }
    });

    $('.brands-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:25,
        nav:false,
        dots:false,
        center: false,
        smartSpeed:900,
        items:6,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });

});

