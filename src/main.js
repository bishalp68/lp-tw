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

    $('.testimonial-slider').slick({
        slidesToShow: 3,
        dots: true,
    });

    //accordion
    $(".accordion").on("click", ".accordion-header", function () {
        var $header = $(this);
        var $content = $header.next(".accordion-content");

        // If this section is already open
        if ($content.is(":visible")) {
            $content.slideUp(300);
            $header.removeClass("active");
            $header.parent().removeClass("active");
        } else {
            // Close all sections
            $(".accordion .accordion-content").slideUp(300);
            $(".accordion .accordion-header").removeClass("active");
            $(".accordion .accordion-item").removeClass("active");

            // Open the clicked section
            $content.slideDown(300);
            $header.addClass("active");
            $header.parent().addClass("active");
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const siteContent = document.querySelector(".site-content");

    function adjustContentMargin() {
        if (header && siteContent) {
            const headerHeight = header.offsetHeight;
            siteContent.style.marginTop = headerHeight + "px";
        }
    }

    function handleScroll() {
        if (window.scrollY >= 100) {
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    }

    adjustContentMargin();
    handleScroll();

    window.addEventListener("resize", adjustContentMargin);
    window.addEventListener("scroll", handleScroll);
});