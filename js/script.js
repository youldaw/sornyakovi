$(function (){

    $('.order-in .about-order-btn, .back-order').on('click',function(e){
        e.preventDefault();
        $('.my-orders').toggleClass('hide');
        $('.about-order').toggleClass('active');
    });


    $('.desc-block .show-all').on('click',function(e){
        e.preventDefault();
        $('.card-description').toggleClass('active');
    });

    $('.drop-btn').on('click',function(e){
        e.preventDefault();
        $('.articles-side').toggleClass('active');
    });

    $('.all-comment').on('click',function(e){
        e.preventDefault();
        $('.comment-block').addClass('active');
        $(this).addClass('click');
    });

    $('.cat-btn').on('click',function(e){
        e.preventDefault();
        $('.head-cat-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".head-cat-menu, .cat-btn"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });

    $('.filter-back-btn, .mob-filter').on('click',function(e){
        e.preventDefault();
        $('.catpro-left').toggleClass('active');
        $('.filter-col').toggleClass('active');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".filter-col, .catpro-left"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });

    $('.main-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:10,
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
                center:true,
                loop: true,
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
                items:1.3,
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
                items:1.3,
            },
            600:{
                items:1.8,
            },
            768:{
                items:2.2,
            },
            1200:{
                items:3,
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


// document.addEventListener('click', function(e) {
//     var map = document.querySelector('#map-wrap iframe')
//     if(e.target.id === 'map-wrap') {
//         map.style.pointerEvents = 'all'
//     } else {
//         map.style.pointerEvents = 'none'
//     }
// })

// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
    // удаляем элемент с интерактивной подсказкой
    mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
}