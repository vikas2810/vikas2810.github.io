/*scrolling banner*/
(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".carousel_se_01_carousel").owlCarousel({
      items: 3,
      nav: true,
      loop: true,

      mouseDrag: true,
      responsiveClass: true,
      /*navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],*/
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  });

  $(document).ready(function () {
    $(".carousel_se_02_carousel").owlCarousel({
      items: 4,
      nav: true,
      loop: true,

      mouseDrag: true,
      responsiveClass: true,
      navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  $(document).ready(function () {
    $(".carousel_se_03_carousel").owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      loop: true,

      mouseDrag: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: ["<i class='icofont-scroll-left'></i>", "<i class='icofont-scroll-right'></i>"],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });
})(jQuery);