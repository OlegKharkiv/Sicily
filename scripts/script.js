"use strict"

$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        // autoplaySpeed: 1500,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        // draggable: false,
        // swipe: true,
        // touchThreshold: 5,
        // touchMove: true,
        // waitForAnimate: false,
        // centerMode: true,
        // variableWidth: false,
        // fade: false,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 400,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
        // ],
    });
});



