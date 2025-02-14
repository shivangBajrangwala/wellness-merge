
jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";
    // Sticky Header JS Start
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() >= 100) {
            jQuery(".site-header").addClass("sticky-header");
        } else {
            jQuery(".site-header").removeClass("sticky-header");
        }
    });
    // Sticky Header JS End
})

// Toggle Menu Mobile JS Start
if (jQuery(window).width() < 992) {
    jQuery(".ham-menu").on("click", function () {
        jQuery(".header-menu").toggleClass("toggle-menu");
        jQuery(".header-menu .nav-overlay").fadeToggle();
    });
    jQuery(".site-navigation ul li a").on("click", function () {
        jQuery(".header-menu").removeClass("toggle-menu");
        jQuery(".header-menu .nav-overlay").fadeOut();
    });

    jQuery(".header-menu .nav-overlay").on("click", function () {
        jQuery(this).fadeOut();
        jQuery(".header-menu").removeClass("toggle-menu");
    });
}
// Toggle Menu Mobile JS End