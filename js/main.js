
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
    $('.slider').slick({
        arrows: false,
        swipe: false,
        // autoplay: true,
        dots: true,
        // responsive: [
        //     {
        //       breakpoint: 990, // - от какой ширины изменять настройки(1024 и ниже)
        //       settings: {
        //         // вносим изменения на ширине 1024 и ниже 
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         // centerMode: true
        //       }
        //     }
        //   ]
    });
    $('.open-nav').click(function (e) { 
        e.preventDefault();
        $('.gadgets-nav_wrap').slideToggle(300);
    });
  });