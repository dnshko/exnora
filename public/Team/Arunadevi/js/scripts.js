/* MENU TOGGLE */
$('.side-widget .site-menu ul li a').on('click', function(e) {
    $(this).parent().children('.side-widget .site-menu ul li ul').toggle();
    return true;
});


// SEARCH BOX
$('.navbar .search-button').on('click', function(e) {
    $(this).toggleClass('open');
    $(".search-box").toggleClass('active');
});


// HAMBURGER MENU
$('.hamburger-menu').on('click', function(e) {
    $(this).toggleClass('open');
    $(".side-widget").toggleClass('active');
});


// PAGE TRANSITION
$('body a').on('click', function(e) {

    var target = $(this).attr('target');
    var fancybox = $(this).data('fancybox');
    var url = this.getAttribute("href");
    if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
            var hash = url.substring(url.indexOf('#'));


            if ($('body ' + hash).length != 0) {
                $('.page-transition').removeClass("active");


            }
        } else {
            $('.page-transition').toggleClass("active");
            setTimeout(function() {
                window.location = url;
            }, 1000);

        }
    }
});


// MAIN SLIDER
var swiper = new Swiper('.main-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    speed: 600,
    loop: 'true',
    touchRatio: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: '.button-prev',
        nextEl: '.button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// SIDE SLIDER
var swiper = new Swiper('.side-slider .slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    loop: 'true',
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// EXPERTS SLIDER
var swiper = new Swiper('.experts-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    loop: 'true',
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// HIGHLIGHT SLIDER
var swiper = new Swiper('.highlight-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    speed: 600,
    touchRatio: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
    },
});




// CAROUSEL IMAGE BOX
var swiper = new Swiper('.carousel-image-box', {
    slidesPerView: '4',
    spaceBetween: 40,
    speed: 600,
    //touchRatio: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});



// CAROUSEL TESTIMONIALS 
var swiper = new Swiper('.carousel-testimonials', {
    slidesPerView: '2',
    spaceBetween: 0,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }
});





// DATA BACKGROUND IMAGE
var pageSection = $("*");
pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", "url(" + $(this).data("background") + ")");
    }
});

// DATA BACKGROUND COLOR
var pageSection = $("*");
pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", $(this).data("background"));
    }
});


// STELLAR PARALLAX
$.stellar({
    horizontalOffset: 0,
    verticalOffset: 0
});




// COUNTER
$(document).scroll(function() {
    $('.odometer').each(function() {
        var parent_section_postion = $(this).closest('section').position();
        var parent_section_top = parent_section_postion.top;
        if ($(document).scrollTop() > parent_section_top - 300) {
            if ($(this).data('status') == 'yes') {
                $(this).html($(this).data('count'));
                $(this).data('status', 'no');
            }
        }
    });
});



// PRELOADER
$(window).load(function() {
    $("body").addClass("page-loaded");
});