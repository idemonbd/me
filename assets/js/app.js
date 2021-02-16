/* 
    Theme Name: Personal Portfolio Webview by idemonbd
   Author: Emon Khan
   Version: 1.0.0
   Created: December 2020
    File Description: Main JS file of the template
*/

! function ($) {
    "use strict";
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.navbar-nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("#navbarCollapse").scrollspy({
        offset: 70
    });

    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
}(jQuery);
