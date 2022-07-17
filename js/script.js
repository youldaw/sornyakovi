$(function (){


    $('.desc-block .show-all').on('click',function(e){
        e.preventDefault();
        $('.card-description').toggleClass('active');
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

    $('.catalog-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:30,
        nav:false,
        dots:false,
        center: false,
        smartSpeed:900,
        items:3.8,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1.8,
            },
            768:{
                items:2.6,
            },
            1200:{
                items:3.8,
            },
            1580:{
                items:4.2,
            }
        }
    });

    $('.catpro-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:30,
        nav:false,
        dots:false,
        center: false,
        smartSpeed:900,
        items:3.8,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1.8,
            },
            768:{
                items:2.6,
            },
            1200:{
                items:3.8,
            },
            1580:{
                items:3.2,
            }
        }
    });

    $('.card-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:1,
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


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});

