
// $(document).ready(function() {
//     $('.slider').slick({
//         arrows: true,
//         dots: true,
//         adaptiveHeight: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         speed: 500,
//         easing: 'ease',
//         infinite: true,
//         initialSlide: 1,
//         autoplay: false,
//         // autoplaySpeed: 1500,
//         // pauseOnFocus: true,
//         // pauseOnHover: true,
//         // pauseOnDotsHover: true,
//         // draggable: false,
//         // swipe: true,
//         // touchThreshold: 5,
//         // touchMove: true,
//         // waitForAnimate: false,
//         // centerMode: true,
//         variableWidth: true,
//         // fade: false,
//         // responsive: [
//         //     {
//         //         breakpoint: 768,
//         //         settings: {
//         //             slidesToShow: 2
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 400,
//         //         settings: {
//         //             slidesToShow: 1
//         //         }
//         //     }
//         // ],
//     });
// });
// $('.single-item').slick();

// tiny-slider

import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

// import {tns} from "tiny-slider";


tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoWidth:false,
    autoplay: false,
    center: true,
    controlsPosition: 'bottom',
    mouseDrag: true
    // controlsContainer: true,
    // prevButton: true,
    // nextButton: true
  });

