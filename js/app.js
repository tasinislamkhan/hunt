$(function () {
    // banner slick slider
    $("#banner .banner_content").slick({
        arrows:true,
        autoplay:true,
        fade:true,
        autoplaySpeed:500,
        speed:2000,
        prevArrow: '<i class="slider_arrow slider_arrowLeft fas fa-arrow-left"></i>',
        nextArrow: '<i class="slider_arrow slider_arrowRight fas fa-arrow-right"></i>',
    });
    $("body").niceScroll({
        cursorcolor: '#6FDA44',
        cursorwidth:'8px',
        cursorborder:'1px solid green',
    });

  });
