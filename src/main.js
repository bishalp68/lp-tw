$(document).ready(() => {
    $('.logo-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.cta-slider').slick({
        slidesToShow: 3,
    });

    //accordion
    $(".accordion").on("click", ".accordion-header", function () {

        $(this).parent().toggleClass("active");
        $(this).toggleClass("active").next().slideToggle();

        $(".accordion-content").not($(this).next()).slideUp(300);

        $(this).siblings().removeClass("active");
    });

});