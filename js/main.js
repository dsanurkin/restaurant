
function toggleHeader(){
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 0) {
        $(".header").addClass("header_min");
        $(".active-screen").addClass("active");
        $(".logo1").css("display", "none");
        $(".logo2").css("display", "block");
        $(".nav-link").css("color", "silver");
        $(".active").css("color", "#c90");
    } else {
        $(".header").removeClass("header_min");
        $(".active-screen").removeClass("active");
        $(".logo2").css("display", "none");
        $(".logo1").css("display", "block");
        $(".active").css("color", "white");
        $(".nav-link").css("color", "white");
    }
};

$(document).scroll(function(){
    toggleHeader();
})

$(document).ready(function(){
    $(function () { objectFitImages() });
  jQuery('.open-nav').click(function(e) {
    e.preventDefault();
    jQuery('.menu-icon').toggleClass('opened');
  });
    $('.slider').slick({
        arrows: false,
        swipe: false,
        // autoplay: true,
        dots: true,
    });
    $('.open-nav').click(function (e) { 
        e.preventDefault();
        $('.gadgets-nav_wrap').slideToggle(300);
    });
    $('.gallery').masonry({
        // options
        itemSelector: '.gallery-item',
        columnWidth: '.size',
        percentPosition: true,
        isResizable: true
    });
    $('.gallery').imagesLoaded( function() {
        // images have loaded
      });
      // options
      $('.gallery').imagesLoaded( {
        // options...
        },
        function() {
          // images have loaded
        }
      );
    $(".gallery-item").mouseenter(function() {
        var wrap = $(this).find('.item-text');
        var img = $(this).find('img');
        wrap.css("display", "block");
        img.css("filter", "grayscale(1)");
        $(this).mouseleave(function() {
            wrap.css("display", "none");
            img.css("filter", "grayscale(0)")
      });
    });
    $('.img-link').magnificPopup({
        type: 'image',
        callbacks: {
            open: function() {
                $('.header').css('position', 'static');
            },
            close: function() {
                $('.header').css('position', 'fixed');
            }
            // e.t.c.
          }
      });
  });

